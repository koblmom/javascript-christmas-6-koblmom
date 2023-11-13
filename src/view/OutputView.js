import { MissionUtils } from "@woowacourse/mission-utils";
const { Console } = MissionUtils;

const OutputView = {
  printMenu(orders) {
    Console.print("<주문 메뉴>");
    orders.forEach((order) => {
      const value = Object.values(order);
      Console.print(`${value}개`);
    });
  },
  printTotalOrder(TotalOrder) {
    Console.print("<할인 전 총주문 금액>");
    Console.print(TotalOrder);
  },
};

export default OutputView;
