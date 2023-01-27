import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar() {
    // return new this.constructor(Symbol('brand'), Symbol('motor'), Symbol('color'));
    // const evcar = super.cloneCar();
    // return evcar;
    const car = new Car(Symbol('brand'), Symbol('motor'), Symbol('color'));
    return car;
  }
}
