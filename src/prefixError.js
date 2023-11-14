import { ERROR } from "./Constants.js";

class PrefixError extends Error {
  constructor(message) {
    super(`${ERROR.PREFIX} ${message}`);
  }
}

export default PrefixError;
