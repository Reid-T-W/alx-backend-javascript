import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof (amount) === 'number') {
      this._amount = amount;
    } if (currency instanceof Currency) {
      this._currency = currency;
    }
  }

  displayFullPrice() {
    return (`${this._amount} ${this._currency.displayFullCurrency()}`);
  }

  // Getter for amount
  get amount() {
    return this._amount;
  }

  // Getter for currency
  get currency() {
    return this._currency;
  }

  // Setter for amount
  set amount(amount) {
    this._amount = amount;
  }

  // Setter for currency
  set currency(currency) {
    this._currency = currency;
  }

  static convertPrice(amount, conversionRate) {
    return (amount * conversionRate);
  }
}
