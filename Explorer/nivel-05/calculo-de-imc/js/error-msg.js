export default class ErrorMsg {
  #errorMsg;
  #visibleClass;
  #hiddenClass;

  constructor(errorMsgElement, visileClassName, hiddenClassName) {
    this.#errorMsg = errorMsgElement;
    this.#visibleClass = visileClassName;
    this.#hiddenClass = hiddenClassName;
  }

  show() {
    this.#errorMsg.classList.add(this.#visibleClass);
    this.#errorMsg.classList.remove(this.#hiddenClass);
  }

  hide() {
    this.#errorMsg.classList.add(this.#hiddenClass);
    this.#errorMsg.classList.remove(this.#visibleClass);
  }
}
