import './validatecard.css';

export class ValidateCard {
    constructor(element, filterHandler) {
        if (typeof element === 'string') {
            element = document.querySelector(element);
        }
        this.element = element;

        this.filterHandler = filterHandler;
        this.onBtnClick = this.onBtnClick.bind(this);
        this.validateBtn = this.element.querySelector('.validate-btn');
        this.validateInput = this.element.querySelector('.validate-input');
        this.validateInput.addEventListener('input', this.onBtnClick); 
        this.validateBtn.addEventListener('click', this.onBtnClick);        
    }

    onBtnClick(e) {
        e.preventDefault();
        const text = this.validateInput.value;
        this.filterHandler(text);
    }
}