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
    Console.print(`${TotalOrder}원`);
  },

  printFree(freeGift) {
    Console.print("<증정 메뉴>");
    if (freeGift === 25000) {
      Console.print("샴페인 1개");
      return "샴페인 1개";
    }

    Console.print("없음");
    return "없음";
  },

  printDiscountDetails(discounts) {
    Console.print("<혜택 내역>");
    Console.print(`크리스마스 디데이 할인: -${discounts[0]}원`);
    Console.print(`평일 할인: -${discounts[1]}원`);
    Console.print(`특별할인: -${discounts[2]}원`);
    Console.print(`증정이벤트: -${discounts[3]}원`);
  },

  printDiscountAmount(discountAmount) {
    Console.print("<총혜택 금액>");
    Console.print(`-${discountAmount}원`);
  },

  printPayAmount(DiscountPay, totalOrder) {
    Console.print("<할인 후 예상 결제 금액>");
    Console.print(`${totalOrder - DiscountPay}원`);
  },

  printBadge(discountAmount) {
    Console.print("<12월 이벤트 배지>");
    let badgeName = "없음";

    switch (true) {
      case discountAmount > 20000:
        badgeName = "산타";
        break;
      case discountAmount > 10000:
        badgeName = "트리";
        break;
      case discountAmount > 5000:
        badgeName = "별";
        break;
    }

    Console.print(badgeName);
    return badgeName;
  },
};

export default OutputView;
