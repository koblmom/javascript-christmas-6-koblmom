export const MESSAGE = {
  GET_DATE_INPUT: `12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)`,
  GET_MENU_INPUT: `주문하실 메뉴를 메뉴와 개수를 알려 주세요.`,
  GET_PRIVIEW: `12월 3일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`,
};

export const DATE = {
  MIN_NUMBER: 1,
  MAX_NUMBER: 31,
  //MONEY_LIMIT: 100000,
  //COUNT: 6,
};

export const ERROR = {
  PREFIX: "[ERROR]",
  DATE_NOT_A_NUMBER: `숫자만 입력해주세요.`,
  EXCEED_DATE_LIMIT: `유효하지 않은 날짜입니다. 다시 입력해 주세요.`,
  DATE_NOT_A_POSITIVE: "날짜는 정수여야 합니다.",
  EXCEED_MONEY_LIMIT: `입력 해주신 날짜는 ${DATE.MAX_NUMBER}이하 합니다.`,
};
