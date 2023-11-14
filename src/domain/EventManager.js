import MENUS from "../Menus.js";
import { ERROR } from "../Constants.js";

class EventManager {
  applyFreeGift(totalPrice) {
    if (totalPrice > 120000) {
      const freeGiftAmount = Number(25000);
      return freeGiftAmount;
    } else {
      return 0;
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

  getDiscountAmountDay(weekIndex, totalOrders) {
    if (this.#isWeekday(weekIndex)) {
      return this.#calculateWeekdayDiscount(totalOrders);
    }
    return this.#calculateWeekendDiscount(totalOrders);
  }

  #isWeekday(weekIndex) {
    return weekIndex >= 0 && weekIndex <= 4;
  }

  isChristmasDday(date) {
    const christmasDate = 25;
    const currentDate = date;

    if (currentDate <= christmasDate) {
      const daysUntilChristmas = Math.floor(christmasDate - currentDate);

      const additionalDiscount =
        1000 + (christmasDate - daysUntilChristmas - 1) * 100;
      return additionalDiscount;
    }
    return 0;
  }

  isStarDay(date) {
    const starDates = [3, 10, 17, 24, 25];

    return starDates.includes(date) ? 1000 : 0;
  }
}

export default EventManager;
