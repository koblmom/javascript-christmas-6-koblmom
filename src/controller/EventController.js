import InputView from "../view/InputView.js";
import DateManager from "../domain/DateManager.js";
import OrderManager from "../domain/OrderManager.js";
import OutputView from "../view/OutputView.js";
import EventManager from "../domain/EventManager.js";

class EventController {
  #totalOrder;

  async handleDate() {
    const dateNumber = await InputView.readDate();
    const date = new DateManager(dateNumber);
  }
  async handleOrder() {
    const orders = await InputView.readOrder();
    const orderMenu = new OrderManager(orders);
    OutputView.printMenu(orderMenu.getOrders());
    const totalAmounts = orderMenu.calculateTotalAmount();
    this.#totalOrder = totalAmounts.reduce((sum, amount) => {
      return sum + amount.totalAmount;
    }, 0);
    OutputView.printTotalOrder(this.#totalOrder);
  }
  async handleEvent() {
    const event = new EventManager();
    const freeGift = event.addFree(this.#totalOrder);
    OutputView.printFree(freeGift);
  }
}

export default EventController;
