import { Console } from "@woowacourse/mission-utils";

class EventManager {
  addFree(totalPrice) {
    if (totalPrice > 120000) {
      return "샴폐인 1개";
    } else {
      return "없음";
    }
  }
}
export default EventManager;
