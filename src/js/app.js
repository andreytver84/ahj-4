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

/* function isValid(cardNumber[1..length])
    sum := 0
    parity := length mod 2
    for i from 1 to length do
        if i mod 2 = parity then
            sum := sum + cardNumber[i]
        elseif cardNumber[i] > 4 then
            sum := sum + 2 * cardNumber[i] - 9
        else
            sum := sum + 2 * cardNumber[i]
        end if
    end for
    return sum mod 10 = 0
end function */

console.log("app.js included");
