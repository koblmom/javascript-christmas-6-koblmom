import { ERROR } from "./Constants.js";

class FixError extends Error {
  constructor(message) {
    super(`${ERROR.PREFIX} ${message}`);
  }
}

export default FixError;
