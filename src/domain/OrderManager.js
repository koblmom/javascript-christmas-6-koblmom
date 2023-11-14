import { ERROR, DATE } from "../Constants.js";
import PrefixError from "../prefixError.js";
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

  isInclude(category, menuName) {
    return MENUS[category].map((item) => item.name).includes(menuName);
  }

  isValidMenu(menuName) {
    for (const category in MENUS) {
      if (MENUS.hasOwnProperty(category)) {
        if (this.isInclude(category, menuName)) {
          return true;
        }
      }
    }

    return false;
  }

  #validate(orders) {
    const seenMenuNames = new Set();
    const amount = this.calculateTotalAmount()[0].totalAmount;
    const totalQuantity = this.totalQuantity();

    orders.forEach((orderDetails) => {
      const menuName = orderDetails.menuType;
      if (seenMenuNames.has(menuName)) {
        throw new PrefixError(ERROR.DUPLICATE_MENU);
      }

      if (!this.isValidMenu(menuName)) {
        throw new PrefixError(ERROR.ORDER_NOT_A_FORM);
      }
      if (amount < 10000) {
        throw new PrefixError(ERROR.UNDER_ORDER_LIMIT);
      }

      if (totalQuantity > 20) {
        throw new PrefixError(ERROR.TOTAL_QUANTITY_TOO_HIGH);
      }
      seenMenuNames.add(menuName);
    });
  }

  totalQuantity() {
    let totalQuantity = 0;

    this.#order.forEach((orderDetails) => {
      const quantity = orderDetails.quantity;
      totalQuantity += quantity;
    });

    return totalQuantity;
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
