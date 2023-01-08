export default function moon(cardNumber) {
  let sum = 0;
  cardNumber = cardNumber.toString();
  for (let i = 0; i < cardNumber.length; i++) {
    if (i % 2 === 0) {
      let m = parseInt(cardNumber[i]) * 2;
      if (m > 9) {
        sum = sum + (m - 9);
      } else {
        sum = sum + m;
      }
    } else {
      let n = parseInt(cardNumber[i]);
      sum = sum + n;
    }
  }
  //console.log(sum);
  //console.log(Boolean(!(sum % 10)));
  return Boolean(!(sum % 10));
}
