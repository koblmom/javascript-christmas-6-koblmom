import InputView from "../view/InputView.js";
import DateManager from "../domain/DateManager.js";
import OrderManager from "../domain/OrderManager.js";
import OutputView from "../view/OutputView.js";

class EventController {
  async handleDate() {
    const dateNumber = await InputView.readDate();
    const date = new DateManager(dateNumber);
  }
  async handleOrder() {
    const orders = await InputView.readOrder();
    const orderMenu = new OrderManager(orders);
    OutputView.printMenu(orderMenu.getOrders());
    const totalAmounts = orderMenu.calculateTotalAmount();
    const TotalOrder = totalAmounts.reduce((sum, amount) => {
      return sum + amount.totalAmount;
    }, 0);
    OutputView.printTotalOrder(TotalOrder);
  }
}

export default EventController;
