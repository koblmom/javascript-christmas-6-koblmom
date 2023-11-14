import { MissionUtils } from "@woowacourse/mission-utils";
const { Console } = MissionUtils;

import InputView from "../view/InputView.js";
import DateManager from "../domain/DateManager.js";
import OrderManager from "../domain/OrderManager.js";
import OutputView from "../view/OutputView.js";
import EventManager from "../domain/EventManager.js";

class EventController {
  #dayofWeek;
  #totalOrder;
  #orderMenus;

  async handleDate() {
    const dateNumber = await InputView.readDate();
    const date = new DateManager(dateNumber);
    this.#dayofWeek = date.getDayofWeek();
  }

  async handleOrder() {
    const orders = await InputView.readOrder();
    const orderManager = new OrderManager(orders);
    this.#orderMenus = orderManager.getOrders();
    OutputView.printMenu(this.#orderMenus);

    const totalAmounts = orderManager.calculateTotalAmount();
    this.#totalOrder = totalAmounts.reduce((sum, amount) => {
      return sum + amount.totalAmount;
    }, 0);
    OutputView.printTotalOrder(this.#totalOrder);
  }

  async handleEvent() {
    const event = new EventManager();
    const freeGift = event.applyFreeGift(this.#totalOrder);
    OutputView.printFree(freeGift);

    const discountAmount = event.getDiscountAmount(
      this.#dayofWeek,
      this.#orderMenus
    );
    console.log("discountAmount", discountAmount);
  }
}

export default EventController;
