export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    //this.evacuationWarningMessage()();
  }

  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
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
