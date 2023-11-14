import { MissionUtils } from "@woowacourse/mission-utils";
const { Console } = MissionUtils;

const OutputView = {
  formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  },

  printMenu(orders) {
    Console.print("<주문 메뉴>");
    orders.forEach((order) => {
      const values = Object.values(order);
      const menuName = values[0];
      const quantity = values[1];
      Console.print(`${menuName} ${quantity}개`);
    });
  },

  printTotalOrder(totalOrder) {
    const formattedTotalOrder = this.formatNumberWithCommas(totalOrder);
    Console.print("<할인 전 총주문 금액>");
    Console.print(`${formattedTotalOrder}원`);
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
    const discountLabels = [
      "크리스마스 디데이 할인",
      "평일 할인",
      "특별할인",
      "증정이벤트",
    ];

    discounts.forEach((discount, index) => {
      const formattedDiscount = this.formatNumberWithCommas(discount);
      Console.print(`${discountLabels[index]}: -${formattedDiscount}원`);
    });
  },

  printDiscountAmount(discountAmount) {
    const formattedDiscountAmount = this.formatNumberWithCommas(discountAmount);
    Console.print("<총혜택 금액>");
    Console.print(`-${formattedDiscountAmount}원`);
  },

  printPayAmount(discountPay, totalOrder) {
    const PayMoney = totalOrder - discountPay;
    const formattedTotalOrder = this.formatNumberWithCommas(PayMoney);
    Console.print("<할인 후 예상 결제 금액>");
    Console.print(`${formattedTotalOrder}원`);
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
