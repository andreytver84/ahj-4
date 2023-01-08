import { ValidateCard } from "./components/validatecard/validatecard";
import { CardsList } from "./components/cards-list/cardslist";

const cardlist = new CardsList(".cards-block");
const validatecard = new ValidateCard(".validate-block", cardlist.filterCard);
cardlist.renderCards();
console.log("app.js included");
