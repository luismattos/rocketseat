export default class Display {
  #minutesElement;
  #secondsElement;

  constructor(minutesElement, secondsElement) {
    this.#minutesElement = minutesElement;
    this.#secondsElement = secondsElement;
  }

  get minutes() {
    return this.#minutesElement.value;
  }

  set minutes(newMinutes) {
    this.#isValidNumber("Minutes", newMinutes);

    if (newMinutes >= 100) {
      throw new Error("Minutes must be less then 100.");
    }

    newMinutes = String(newMinutes).padStart(2, "0");

    this.#minutesElement.value = newMinutes;
  }

  get seconds() {
    return this.#secondsElement.value;
  }

  set seconds(newSeconds) {
    this.#isValidNumber("Seconds", newSeconds);

    if (newSeconds >= 60) {
      throw new Error("Seconds must be less then 60.");
    }

    newSeconds = String(newSeconds).padStart(2, "0");

    this.#secondsElement.value = newSeconds;
  }

  #isValidNumber(valueName, value) {
    if (isNaN(value)) {
      throw new Error(`${valueName} must be a number.`);
    }

    if (!Number.isInteger(value)) {
      throw new Error(`${valueName} must be an integer number.`);
    }

    if (value < 0) {
      throw new Error(`${valueName} must not be negative.`);
    }
  }
}
