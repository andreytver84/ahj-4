// TODO: write code here

// comment this to pass build
const unusedVariable = "variable";

// for demonstration purpose only
export default function demo(value) {
  return `Demo: ${value}`;
}

import { ValidateCard } from "./components/validatecard/validatecard";
import { CardsList } from "./components/cards-list/cardslist";

const cardlist = new CardsList(".cards-block");
const validatecard = new ValidateCard(".validate-block", cardlist.filterCard);


cardlist.renderCards();

/* 2-Мир
3- American Express, JCB International, Diners Club
____30,36,38-Diners Club
____31,35-JCB International
____34,37-American Express
4- VISA
5- MasterCard, Maestro
____50,56,57,58-Maestro
____51,52,53,54,55-MasterCard
6- Maestro, China UnionPay, Discover
____60-Discover
____62 - China UnionPay
____63, 67 - Maestro  */

console.log("app.js included");
