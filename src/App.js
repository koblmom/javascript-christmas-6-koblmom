import { MissionUtils } from "@woowacourse/mission-utils";
const { Console } = MissionUtils;
import EventController from "./controller/EventController.js";

class App {
  constructor() {
    this.EventController = new EventController();
  }
  async run() {
    await this.retry(() => this.EventController.handleDate());
    await this.retry(() => this.EventController.handleOrder());
    await this.retry(() => this.EventController.handleEvent());
  }

  async retry(callback) {
    try {
      return await callback();
    } catch (err) {
      Console.print(err.message);
      return this.retry(callback);
    }
  }
}

export default App;
