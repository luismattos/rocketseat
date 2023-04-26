export default class BMIMsg {
  #bmiMsg;
  #shadow;
  #bmiValue;
  #close;
  #visibleClass;
  #hiddenClass;

  constructor(
    bmiMsgElement,
    shadowElement,
    bmiValueElement,
    closeImgElement,
    visileClassName,
    hiddenClassName
  ) {
    this.#bmiMsg = bmiMsgElement;
    this.#shadow = shadowElement;
    this.#bmiValue = bmiValueElement;
    this.#close = closeImgElement;
    this.#visibleClass = visileClassName;
    this.#hiddenClass = hiddenClassName;
    this.#close.addEventListener("click", (evt) => {
      evt.preventDefault();

      this.hide();
    });
  }

  show(bmiValue) {
    this.#bmiValue.textContent = bmiValue;

    this.#bmiMsg.classList.add(this.#visibleClass);
    this.#bmiMsg.classList.remove(this.#hiddenClass);

    this.#shadow.classList.add(this.#visibleClass);
    this.#shadow.classList.remove(this.#hiddenClass);
  }

  hide() {
    this.#bmiValue.textContent = 0;

    this.#bmiMsg.classList.add(this.#hiddenClass);
    this.#bmiMsg.classList.remove(this.#visibleClass);

    this.#shadow.classList.add(this.#hiddenClass);
    this.#shadow.classList.remove(this.#visibleClass);
  }
}
