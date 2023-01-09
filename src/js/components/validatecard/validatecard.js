import "./validatecard.css";
import { moon } from "./validatenumber";

export class ValidateCard {
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
    if (moon(num)) {
      this.validateInput.classList.remove("invalid");
      this.validateInput.classList.add("valid");
    } else {
      this.validateInput.classList.remove("valid");
      this.validateInput.classList.add("invalid");
    }
  }
  onBtnClick(e) {
    e.preventDefault();
    const text = +this.validateInput.value;
    this.validateNum(text);
  }
}
