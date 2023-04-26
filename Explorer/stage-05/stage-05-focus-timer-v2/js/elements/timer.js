import cards from "./cards.js";

const theme = { light: "light", dark: "dark" };
const timer = Timer();

export default timer;

function Timer() {
  const minutes = Minutes();
  const seconds = Seconds();
  const dark = Dark();
  const light = Light();
  let id = -1;

  function Minutes() {
    const minutesElem = document.querySelector(".input");
    let defaultValue = 0;

    config();

    function config() {
      minutesElem.addEventListener("blur", function (evt) {
        if (isEditable()) {
          toggleEditable();
        }
      });

      minutesElem.addEventListener("keydown", function (evt) {
        const key = evt.key;

        if (key == "Delete" || key == "Backspace") {
          return;
        } else if (isNaN(key)) {
          evt.preventDefault();
          return;
        }

        if (String(get()).length >= 2) {
          evt.preventDefault();
          return;
        }
      });
    }

    function focus() {
      minutesElem.focus();

      let range = new Range();
      range.setStart(minutesElem, 0);
      range.setEnd(minutesElem, 1);

      let selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
    }

    function get() {
      return Number(minutesElem.textContent);
    }

    function set(minutes) {
      if (isNaN(minutes)) {
        return;
      }
      if (minutes > 59) {
        return;
      }
      if (minutes < 0) {
        return;
      }

      minutesElem.textContent = String(minutes).padStart(2, "0");

      if (id == -1) {
        defaultValue = Number(minutesElem.textContent);
      }
    }

    function toggleEditable() {
      return (minutesElem.contentEditable = !isEditable() + "");
    }

    function isEditable() {
      return (
        String(minutesElem.isContentEditable).toLocaleLowerCase() === "true"
      );
    }

    return {
      get,
      set,
      focus,
      toggleEditable,
      isEditable,
      defaultValue,
    };
  }

  function Seconds() {
    const secondsElem = document.querySelector("#timer-seconds");

    function get() {
      return Number(secondsElem.textContent);
    }

    function set(seconds) {
      if (isNaN(seconds)) {
        return;
      }
      if (seconds > 59) {
        return;
      }
      if (seconds < 0) {
        return;
      }

      secondsElem.textContent = String(seconds).padStart(2, "0");
    }

    return { seconds: secondsElem, get, set };
  }

  function Theme(theme) {
    const play = Play();
    const pause = Pause();
    const clock = Clock();
    const stop = Stop();
    const plus = Plus();
    const minus = Minus();

    function Prototipo(elem, handle) {
      config();

      function config() {
        elem.addEventListener("click", handle);
      }

      function show() {
        if (isHidden()) {
          elem.classList.remove("hidden");
        }
      }

      function hide() {
        if (!isHidden()) {
          elem.classList.add("hidden");
        }
      }

      function isHidden() {
        if (elem.classList.contains("hidden")) {
          return true;
        }
        return false;
      }

      return { show, hide, isHidden };
    }

    function Play() {
      const elem = document.querySelector(".play." + theme);
      return Prototipo(elem, function () {
        if (seconds.get() == 0) {
          if (minutes.get() == 0) {
            return;
          }
        }
        play.hide();
        pause.show();
        clock.hide();
        stop.show();
        doIt();
      });

      function doIt() {
        minutes.defaultValue = minutes.get();
        id = setInterval(() => {
          if (seconds.get() == 0) {
            if (minutes.get() == 0) {
              cards.alarm();
              clearInterval(id);
              id = -1;
            } else {
              minutes.set(minutes.get() - 1);
              seconds.set(3); //TODO 59
            }
          } else {
            seconds.set(seconds.get() - 1);
          }
        }, 1000);
      }
    }

    function Pause() {
      const elem = document.querySelector(".pause." + theme);
      return Prototipo(elem, function () {
        play.show();
        pause.hide();
        clock.hide();
        stop.show();
        doIt();
      });

      function doIt() {
        clearInterval(id);
      }
    }

    function Clock() {
      const elem = document.querySelector(".clock." + theme);
      return Prototipo(elem, function () {
        if (!minutes.isEditable()) {
          minutes.focus();
          minutes.toggleEditable();
        }
      });
    }

    function Stop() {
      const elem = document.querySelector(".stop." + theme);
      return Prototipo(elem, function () {
        play.show();
        pause.hide();
        clock.show();
        stop.hide();
        doIt();
      });
      function doIt() {
        clearInterval(id);
        id = -1;
        minutes.set(minutes.defaultValue);
        seconds.set(0);
      }
    }

    function Plus() {
      const elem = document.querySelector(".plus." + theme);
      return Prototipo(elem, function () {
        minutes.set(minutes.get() + 5);
      });
    }

    function Minus() {
      const elem = document.querySelector(".minus." + theme);
      return Prototipo(elem, function () {
        minutes.set(minutes.get() - 5);
      });
    }

    function hideAll() {
      play.hide();
      pause.hide();
      clock.hide();
      stop.hide();
      plus.hide();
      minus.hide();
    }

    function showAll() {
      play.show();
      pause.show();
      clock.show();
      stop.show();
      plus.show();
      minus.show();
    }

    return { play, pause, clock, stop, plus, minus, hideAll, showAll };
  }

  function Dark() {
    function toDark() {
      if (!light.play.isHidden()) {
        dark.play.show();
      }

      if (!light.pause.isHidden()) {
        dark.pause.show();
      }

      if (!light.clock.isHidden()) {
        dark.clock.show();
      }

      if (!light.stop.isHidden()) {
        dark.stop.show();
      }

      if (!light.plus.isHidden()) {
        dark.plus.show();
      }

      if (!light.minus.isHidden()) {
        dark.minus.show();
      }

      light.hideAll();
    }

    return { ...Theme(theme.dark), toDark };
  }

  function Light() {
    function toLight() {
      if (!dark.play.isHidden()) {
        light.play.show();
      }

      if (!dark.pause.isHidden()) {
        light.pause.show();
      }

      if (!dark.clock.isHidden()) {
        light.clock.show();
      }

      if (!dark.stop.isHidden()) {
        light.stop.show();
      }

      if (!dark.plus.isHidden()) {
        light.plus.show();
      }

      if (!dark.minus.isHidden()) {
        light.minus.show();
      }

      dark.hideAll();
    }
    return { ...Theme(theme.light), toLight };
  }

  return {
    minutes,
    seconds,
    dark,
    light,
  };
}
