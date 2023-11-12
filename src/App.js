import { MissionUtils } from "@woowacourse/mission-utils";
const { Console } = MissionUtils;
import EventController from "./EventController.js";

class App {
  constructor() {
    this.EventController = new EventController();
  }
  async run() {
    try {
      await this.EventController.handleDate();
      await this.EventController.handleMenu();
    } catch (err) {
      Console.print(err.message);
    }
  }
}

export default App;
