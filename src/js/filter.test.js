import { containsCode } from "./filter";

const mir = ["20", "21", "22", "23", "24", "25", "26", "27", "28", "29"];
const visa = ["40", "41", "42", "43", "44", "45", "46", "47", "48", "49"];
const master = ["51", "52", "53", "54", "55"];
const maestro = ["50", "56", "57", "58", "62", "63"];
const jcb = ["31", "35"];
const china = ["62"];
const unknownCard = [
  "00",
  "32",
  "33",
  "34",
  "36",
  "37",
  "38",
  "39",
  "60",
  "61",
  "70",
  "80",
  "90",
];

function testCardValid(cardName) {
  test(`Проверка на карту ${cardName}, ожидается true`, () => {
    cardName.forEach((item) => expect(containsCode(cardName, item)).toBe(true));
  });
}
function testCardInValid(cardName) {
  test(`Проверка на карту ${cardName}, ожидается false`, () => {
    unknownCard.forEach((item) =>
      expect(containsCode(cardName, item)).toBe(false)
    );
  });
}
testCardValid(visa);
testCardValid(mir);
testCardValid(master);
testCardValid(maestro);
testCardValid(jcb);
testCardValid(china);
testCardInValid(visa);
testCardInValid(mir);
testCardInValid(master);
testCardInValid(maestro);
testCardInValid(jcb);
testCardInValid(china);
