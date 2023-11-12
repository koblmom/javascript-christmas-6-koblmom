import { MissionUtils } from "@woowacourse/mission-utils";
const { Console } = MissionUtils;
import { MESSAGE } from "../Constants.js";

const InputView = {
  async readDate() {
    const inputDate = await Console.readLineAsync(
      `${MESSAGE.GET_DATE_INPUT}\n`
    );
    return Number(inputDate);
  },

  async readOrder() {
    const inputOrder = await Console.readLineAsync(
      `${MESSAGE.GET_MENU_INPUT}\n`
    );
    return inputOrder;
  },
};
export default InputView;
