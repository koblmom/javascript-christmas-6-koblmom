import { MissionUtils } from "@woowacourse/mission-utils";
const { Console } = MissionUtils;
import InputView from "./view/InputView.js";
import DateManager from "./DateManager.js";
import menus from "./Menus.js";
import OrderManager from "./OrderManager.js";

class LottoController {
  async handleDate() {
    const dateNumber = await InputView.readDate();
    const date = new DateManager(dateNumber);
  }
  async handleOrder() {
    const orders = await InputView.readOrder();
    const orderMenu = new OrderManager(orders);
  }
}

export default LottoController;
