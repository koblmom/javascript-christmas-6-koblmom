import { ERROR, DATE } from "./Constants.js";
import FixError from "./FixError.js";

class DateManager {
  #date;

  constructor(date) {
    this.#validate(date);
    this.#date(date);
  }

  #validate(date) {
    const REGEX_NUMERIC = /^\d+$/;
    if (!REGEX_NUMERIC.test(date)) {
      throw new FixError(ERROR.DATE_NOT_A_NUMBER);
    }
    if (!(date >= DATE.MIN_NUMBER && date <= DATE.MAX_NUMBER)) {
      throw new FixError(ERROR.EXCEED_DATE_LIMIT);
    }
  }
}

export default DateManager;
