import { MissionUtils } from "@woowacourse/mission-utils";
const { Console } = MissionUtils;
import EventController from "./controller/EventController.js";

class App {
  constructor() {
    this.EventController = new EventController();
  }
  async run() {
    let inputValid = false;

    while (!inputValid) {
      try {
        await this.EventController.handleDate();
        await this.EventController.handleOrder();
        //await this.EventController.handlePrice();
        inputValid = true;
      } catch (err) {
        Console.print(err.message);
      }
    }
  }
}

export default App;
