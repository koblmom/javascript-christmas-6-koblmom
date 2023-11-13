import { MissionUtils } from "@woowacourse/mission-utils";
const { Console } = MissionUtils;

const OutputView = {
  printMenu(orders) {
    Console.print("<주문 메뉴>");
    orders.forEach((order) => {
      const values = Object.values(order);
      const menuName = values[0];
      const quantity = values[1];
      Console.print(`${menuName} ${quantity}개`);
    });
  },
  printTotalOrder(TotalOrder) {
    Console.print("<할인 전 총주문 금액>");
    Console.print(TotalOrder);
  },
  printFree(freeGift) {
    Console.print("<증정 메뉴>");
    Console.print(freeGift);
  },
};

export default OutputView;
