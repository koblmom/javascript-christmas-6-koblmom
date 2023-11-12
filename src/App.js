import { MissionUtils } from "@woowacourse/mission-utils";
const { Console } = MissionUtils;
import EventController from "./EventController.js";

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
        inputValid = true;
      } catch (err) {
        Console.print(err.message);
      }
    }
  }
}

export default App;
