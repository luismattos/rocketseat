export default class BMICalculator {
  #weight;
  #height;

  constructor() {
    this.#weight = 0;
    this.#height = 0;
  }

  get weight() {
    return this.#weight;
  }
  set weight(newWeight) {
    this.#validateValue(newWeight);
    this.#weight = newWeight;
  }

  get height() {
    return this.#height;
  }
  set height(newHeight) {
    this.#validateValue(newHeight);
    this.#height = newHeight;
  }

  computeBMI() {
    return (this.#weight / Math.pow(this.#height, 2)).toFixed(2);
  }

  #validateValue(value) {
    if (isNaN(value)) {
      const msg = `Weight and Height must be numbers.`;
      console.log("throw error: ", msg);
      throw new Error(msg);
    }

    if (value <= 0) {
      const msg = `Weight and Height must have positive values.`;
      console.log("throw error: ", msg);
      throw new Error(msg);
    }
  }
}
