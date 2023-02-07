/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/components/validatecard/validatenumber.js
function luhn(num) {
  let arr = (num + "").split("").reverse().map(x => parseInt(x));
  let lastDigit = arr.splice(0, 1)[0];
  let sum = arr.reduce((acc, val, i) => i % 2 !== 0 ? acc + val : acc + val * 2 % 9 || 9, 0);
  sum += lastDigit;
  return sum % 10 === 0;
}
;// CONCATENATED MODULE: ./src/js/components/validatecard/validatecard.js


class ValidateCard {
  constructor(element, filterHandler) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    this.element = element;
    this.filterHandler = filterHandler;
    this.onBtnClick = this.onBtnClick.bind(this);
    this.changeInput = this.changeInput.bind(this);
    this.validateBtn = this.element.querySelector(".validate-btn");
    this.validateInput = this.element.querySelector(".validate-input");
    this.validateInput.addEventListener("input", this.changeInput);
    this.validateBtn.addEventListener("click", this.onBtnClick);
  }
  changeInput(e) {
    e.preventDefault();
    const text = this.validateInput.value;
    this.filterHandler(text);
  }
  validateNum(num) {
    if (luhn(num)) {
      this.validateInput.classList.remove("invalid");
      this.validateInput.classList.add("valid");
    } else {
      this.validateInput.classList.remove("valid");
      this.validateInput.classList.add("invalid");
    }
  }
  onBtnClick(e) {
    e.preventDefault();
    const text = this.validateInput.value;
    this.validateNum(text);
  }
}
;// CONCATENATED MODULE: ./src/js/components/cards-list/cardlist.json
const cardlist_namespaceObject = JSON.parse('[{"name":"mir","picture":"img/mir.jpg","code":["20","21","22","23","24","25","26","27","28","29"]},{"name":"visa","picture":"img/visa.jpg","code":["40","41","42","43","44","45","46","47","48","49"]},{"name":"master","picture":"img/master.jpg","code":["51","52","53","54","55"]},{"name":"maestro","picture":"img/maestro.jpg","code":["50","56","57","58","62","63"]},{"name":"jcb","picture":"img/jcb.jpg","code":["31","35"]},{"name":"china","picture":"img/china.jpg","code":["62"]}]');
;// CONCATENATED MODULE: ./src/js/filter.js
function filterBy(cards, filterCallback) {
  return cards.filter(filterCallback);
}
function containsCode(data, search) {
  const clean = search.replace(/[- ()]/g, ""); // удаляем -; ' ' и т.д.
  let firstLetter = clean.substr(0, 2);
  return data.some(code => code.startsWith(firstLetter));
}
;// CONCATENATED MODULE: ./src/js/components/cards-list/cardslist.js


const filterCb = (search, card) => {
  return containsCode(card.code, search);
};
class CardsList {
  constructor(element) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    this.element = element;
    this.filterCard = this.filterCard.bind(this);
    this.cards = cardlist_namespaceObject;
  }
  renderCard(card) {
    return `<div class="card ${card.name}"><img src="${card.picture}" alt="${card.name}" ></div>`;
  }
  renderCards() {
    this.cards.forEach(cardItem => {
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
;// CONCATENATED MODULE: ./src/js/app.js


const cardlist = new CardsList(".cards-block");
const validatecard = new ValidateCard(".validate-block", cardlist.filterCard);
cardlist.renderCards();
console.log("app.js included");
;// CONCATENATED MODULE: ./src/index.js



// TODO: write your code in app.js
/******/ })()
;