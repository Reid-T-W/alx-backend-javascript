export default class Building {
  constructor(sqft) {
    if (this.constructor === Building) {
      this._sqft = sqft;
    } else if (this.evacuationWarningMessage() === undefined) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    } else {
      this._sqft = sqft;
    }
  }

  // Getter for _sqft
  get sqft() {
    return this._sqft;
  }

  // Setter for _sqft
  set sqft(sqft) {
    this._sqft = sqft;
  }
}
