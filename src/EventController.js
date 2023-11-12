import InputView from "./view/InputView.js";
import DateManager from "./DateManager.js";

class LottoController {
  async handleDate() {
    const dateNumber = await InputView.readDate();
    const date = new DateManager(dateNumber);
  }
  async handleMenu() {
    const menuList = await InputView.readMenu();
  }
}

export default LottoController;
