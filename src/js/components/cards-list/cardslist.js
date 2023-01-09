import data from "./cardlist.json";

import { filterBy, containsCode } from "../../filter";

const filterCb = (search, card) => {
  return containsCode(card.code, search);
};

export class CardsList {
  constructor(element) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    this.element = element;
    this.filterCard = this.filterCard.bind(this);
    this.cards = data;
  }

  renderCard(card) {
    return `<div class="card ${card.name}"><img src="${card.picture}" alt="${card.name}" ></div>`;
  }

  renderCards() {
    this.cards.forEach((cardItem) => {
      const cardHtml = this.renderCard(cardItem);
      this.element.insertAdjacentHTML("beforeend", cardHtml);
    });
  }

  filterCard(text) {
    const active = this.element.querySelector(".active-card");
    if (active) {
      active.classList.remove("active-card");
    }
    const filterCallback = filterCb.bind(null, text);
    try {
      const needCardClass = filterBy(this.cards, filterCallback)[0].name;
      if (needCardClass) {
        const needCard = this.element.querySelector(`.${needCardClass}`);
        needCard.classList.add("active-card");
      }
    } catch (err) {
      console.log(err);
    }
  }
}
