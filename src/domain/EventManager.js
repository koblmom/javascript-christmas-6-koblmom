import MENUS from "../Menus.js";
import { ERROR } from "../Constants.js";

class EventManager {
  applyFreeGift(totalPrice) {
    if (totalPrice > 120000) {
      return "샴폐인 1개";
    } else {
      return "없음";
    }
  }

  #calculateDiscountByMenuType(totalOrders, menuType) {
    return totalOrders.reduce((prev, curr) => {
      const foundNenuType = this.#findMenuTypeByName(curr.menuType);

      if (foundNenuType === menuType) {
        return prev + 2023 * curr.quantity;
      }

      return prev;
    }, 0);
  }

  #calculateWeekdayDiscount(totalOrders) {
    return this.#calculateDiscountByMenuType(totalOrders, "DESSERTS");
  }

  #calculateWeekendDiscount(totalOrders) {
    return this.#calculateDiscountByMenuType(totalOrders, "MAINS");
  }

  #findMenuTypeByName(name) {
    for (const [menuType, menus] of Object.entries(MENUS)) {
      const isExist = menus.some((menu) => menu.name === name);

      if (isExist) {
        return menuType;
      }
    }
    throw new PrefixError();
  }

  getDiscountAmount(weekIndex, totalOrders) {
    if (this.#isWeekday(weekIndex)) {
      return this.#calculateWeekdayDiscount(totalOrders);
    }

    return this.#calculateWeekendDiscount(totalOrders);
  }

  #isWeekday(weekIndex) {
    return weekIndex >= 0 && weekIndex <= 4;
  }
}

export default EventManager;
