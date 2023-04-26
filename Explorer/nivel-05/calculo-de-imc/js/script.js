import Utils from "./utils.js";
import BMICalculator from "./bmi-calculator.js";
import ErrorMsg from "./error-msg.js";
import BMIMsg from "./bmi-msg.js";

const inWeight = document.getElementById("in-weight");
const inHeight = document.getElementById("in-height");
const btnCalcImc = document.getElementById("compute");
const bmiCalculator = new BMICalculator();

const errorMsg = new ErrorMsg(
  document.getElementById("error-msg"),
  "visible",
  "hidden"
);

const bmiMsg = new BMIMsg(
  document.getElementById("imc-result"),
  document.getElementById("shadow"),
  document.getElementById("imc-value"),
  document.getElementById("close-imc-result"),
  "visible",
  "hidden"
);

btnCalcImc.addEventListener("click", (evt) => {
  evt.preventDefault();

  try {
    bmiCalculator.weight = inWeight.value;
    bmiCalculator.height = inHeight.value;
  } catch (e) {
    errorMsg.show();
    return;
  }

  bmiMsg.show(bmiCalculator.computeBMI());
});

console.log(BMICalculator);
console.log(ErrorMsg);
console.log(BMIMsg);
console.log(inWeight);
console.log(inHeight);
console.log(btnCalcImc);
console.log(bmiCalculator);
console.log(errorMsg);
console.log(bmiMsg);
