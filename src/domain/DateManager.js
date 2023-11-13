import { ERROR, DATE } from "../Constants.js";
import FixError from "../FixError.js";

class DateManager {
  #date;
  #month = 12;

  constructor(date) {
    this.#validate(date);
    this.#date = new Date(`2023-${this.#month}-${date}`);
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

  getDayofWeek(date) {
    const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const dayIndex = this.#date.getDay();
    return daysOfWeek[dayIndex];
  }
}

export default DateManager;
