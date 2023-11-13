import { ERROR, DATE } from "../Constants.js";
import FixError from "../FixError.js";
import MENUS from "../Menus.js";

class OrderManager {
  #order;

  constructor(order) {
    this.#order = this.parseOrder(order);
    this.#validate(this.#order);
  }

  getOrders() {
    return this.#order;
  }

  parseOrder(order) {
    const orderItems = order.split(",");
    const parsedOrders = [];

    orderItems.forEach((item) => {
      const [menuType, quantity] = item.split("-");
      parsedOrders.push({ menuType, quantity: parseInt(quantity, 10) });
    });

    return parsedOrders;
  }

  #validate(orders) {
    const seenMenuNames = new Set();

    orders.forEach((orderDetails) => {
      const menuName = orderDetails.menuType;

      if (seenMenuNames.has(menuName)) {
        throw new FixError(ERROR.DUPLICATE_MENU);
      }

      let isValidMenu = false;

      for (const category in MENUS) {
        if (MENUS.hasOwnProperty(category)) {
          const menuNames = MENUS[category].map((item) => item.name);
          if (menuNames.includes(menuName)) {
            isValidMenu = true;
          }
        }
      }
      if (!isValidMenu) {
        throw new FixError(ERROR.ORDER_NOT_A_FORM);
      }
      seenMenuNames.add(menuName);
    });
  }

  calculateTotalAmount() {
    return this.#order.map((orderDetails) => {
      const menuType = orderDetails.menuType;
      const quantity = orderDetails.quantity;

      const menu = this.findMenu(menuType);
      if (menu) {
        return {
          totalAmount: menu.price * quantity,
        };
      }
      return 0;
    });
  }
  findMenu(menuType) {
    for (const category in MENUS) {
      if (MENUS.hasOwnProperty(category)) {
        const menu = MENUS[category].find((item) => item.name === menuType);
        if (menu) {
          return menu;
        }
      }
    }
    return null;
  }
}

export default OrderManager;
