import { elements } from "./elements.js";
import Display from "./display.js";
import BtnsWrapper from "./btns-wrapper.js";
import Sounds from "./sounds.js";

const {
  inMinutes,
  inSeconds,
  playCircle,
  pauseCircle,
  stopWatch,
  stopCircle,
  volumeMedium,
  volumeMute,
} = elements;

const display = new Display(inMinutes, inSeconds);
const btnsWrapper = new BtnsWrapper();
const sounds = Sounds();

let originalTime = { minutes: 25, seconds: 0 };

let intervalID = 0;

display.minutes = Number(originalTime.minutes);
display.seconds = Number(originalTime.seconds);

console.log("originalTime", originalTime);
console.log("display", display);

playCircle.addEventListener("click", function (evt) {
  if (inMinutes.value == "") {
    inMinutes.value = "00";
  }

  if (inMinutes.value == 0) {
    if (inSeconds.value == 0) {
      return;
    }
  }

  if (!stopWatch.classList.contains("hidden")) {
    originalTime.minutes = inMinutes.value;
    originalTime.seconds = inSeconds.value;
  }

  playCircle.classList.add("hidden");
  pauseCircle.classList.remove("hidden");

  stopWatch.classList.add("hidden");
  stopCircle.classList.remove("hidden");

  inMinutes.disabled = true;

  display.minutes = Number(inMinutes.value);
  display.seconds = Number(inSeconds.value);

  console.log("originalTime", originalTime);
  console.log("display", display);

  intervalID = setInterval(decrementDisplay, 1000);

  sounds.buttonPressAudio.play();
});

pauseCircle.addEventListener("click", function (evt) {
  playCircle.classList.remove("hidden");
  pauseCircle.classList.add("hidden");

  clearInterval(intervalID);
  intervalID = 0;

  sounds.buttonPressAudio.play();
});

stopWatch.addEventListener("click", function (evt) {
  inMinutes.select();
  sounds.buttonPressAudio.play();
});

stopCircle.addEventListener("click", function (evt) {
  playCircle.classList.remove("hidden");
  pauseCircle.classList.add("hidden");

  stopWatch.classList.remove("hidden");
  stopCircle.classList.add("hidden");

  inMinutes.disabled = false;

  display.minutes = Number(originalTime.minutes);
  display.seconds = Number(originalTime.seconds);

  console.log(originalTime);

  if (intervalID != 0) clearInterval(intervalID);

  sounds.buttonPressAudio.play();
});

volumeMedium.addEventListener("click", function (evt) {
  volumeMedium.classList.add("hidden");
  volumeMute.classList.remove("hidden");
  sounds.bgAudio.pause();
  sounds.bgAudio.currentTime = 0;
});

volumeMute.addEventListener("click", function (evt) {
  volumeMedium.classList.remove("hidden");
  volumeMute.classList.add("hidden");
  sounds.bgAudio.play();
});

document.addEventListener("keydown", (evt) => {
  const key = evt.key;

  if (document.activeElement === inMinutes) {
    if (isNaN(key)) {
      if (key != "Backspace" && key != "Delete") {
        evt.preventDefault();
      }
    }
  }
});

function decrementDisplay() {
  if (display.seconds != 0) {
    display.seconds = display.seconds - 1;
  } else if (display.minutes != 0) {
    display.seconds = 59;
    display.minutes = display.minutes - 1;
  } else {
    sounds.kitchenTimer.play();
    display.minutes = Number(originalTime.minutes);
    display.seconds = Number(originalTime.seconds);
    clearInterval(intervalID);
  }
}
