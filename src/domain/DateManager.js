import { ERROR, DATE } from "../Constants.js";
import PrefixError from "../prefixError.js";

class DateManager {
  #date;
  #month = DATE.DEFAULT_MONTH;

  constructor(date) {
    this.#validate(date);
    this.#date = new Date(`2023-${this.#month}-${date}`);
  }

  #validate(date) {
    const REGEX_NUMERIC = /^\d+$/;
    if (!REGEX_NUMERIC.test(date)) {
      throw new PrefixError(ERROR.DATE_NOT_A_NUMBER);
    }
    if (!(date >= DATE.MIN_NUMBER && date <= DATE.MAX_NUMBER)) {
      throw new PrefixError(ERROR.EXCEED_DATE_LIMIT);
    }
  }

  getDayofWeek() {
    const dayIndex = this.#date.getDay();
    return dayIndex;
  }
}

export default DateManager;
