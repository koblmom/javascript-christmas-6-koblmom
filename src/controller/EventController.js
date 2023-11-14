import { MissionUtils } from "@woowacourse/mission-utils";
const { Console } = MissionUtils;

import InputView from "../view/InputView.js";
import DateManager from "../domain/DateManager.js";
import OrderManager from "../domain/OrderManager.js";
import OutputView from "../view/OutputView.js";
import EventManager from "../domain/EventManager.js";

class EventController {
  #date;
  #dayofWeek;
  #totalOrder;
  #orderMenus;

  async handleDate() {
    this.#date = await InputView.readDate();
    const date = new DateManager(this.#date);
    this.#dayofWeek = date.getDayofWeek();
  }

  async handleOrder() {
    const orders = await InputView.readOrder();
    const orderManager = new OrderManager(orders);
    this.#orderMenus = orderManager.getOrders();
    OutputView.printMenu(this.#orderMenus);
    Console.print("");

    const totalAmounts = orderManager.calculateTotalAmount();
    this.#totalOrder = totalAmounts.reduce((sum, amount) => {
      return sum + amount.totalAmount;
    }, 0);

    OutputView.printTotalOrder(this.#totalOrder);
    Console.print("");
  }

  async handleEvent() {
    const event = new EventManager();
    const freeGift = event.applyFreeGift(this.#totalOrder);
    OutputView.printFree(freeGift);
    Console.print("");

    const discountAmountDay = event.getDiscountAmountDay(
      this.#dayofWeek,
      this.#orderMenus
    );
    const discountAmountCristmas = event.isChristmasDday(this.#date);
    const discountStarDay = event.isStarDay(this.#date);

    const discounts = [
      discountAmountCristmas,
      discountAmountDay,
      discountStarDay,
      freeGift,
    ];

    OutputView.printDiscountDetails(discounts, this.#totalOrder);

    const discountAmount = discounts.reduce(
      (accumulator, currentValue) => accumulator + Number(currentValue),
      0
    );
    Console.print("");

    OutputView.printDiscountAmount(discountAmount, this.#totalOrder);
    Console.print("");
    const DiscountPay = discounts[0] + discounts[1] + discounts[2];

    OutputView.printPayAmount(DiscountPay, this.#totalOrder);
    Console.print("");
    OutputView.printBadge(discountAmount);
  }
}

export default EventController;
