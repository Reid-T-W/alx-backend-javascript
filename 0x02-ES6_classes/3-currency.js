export default class Currency {
  constructor(code, name) {
    if (typeof code === 'string') {
      this._code = code;
    } else {
      throw new Error('TypeError: Code must be a string');
    }
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new Error('TypeError: Name must be a string');
    }
  }

  displayFullCurrency() {
    return (`${this._name} (${this._code})`);
  }
}
