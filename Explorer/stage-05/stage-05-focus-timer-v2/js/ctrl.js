import cards from "./elements/cards.js";
import timer from "./elements/timer.js";

const ctrl = Ctrl();

export default ctrl;

function Ctrl() {
  const themeImgDark = document.querySelector(".theme.dark");
  const themeImgLight = document.querySelector(".theme.light");
  const page = document.querySelector("#page");

  function init() {
    light();
    timer.light.pause.hide();
    timer.light.stop.hide();
  }

  function dark() {
    themeImgDark.classList.remove("hidden");
    themeImgLight.classList.add("hidden");
    page.classList.remove("light");
    page.classList.add("dark");

    cards.toDark();

    timer.dark.toDark();
  }

  function light() {
    themeImgLight.classList.remove("hidden");
    themeImgDark.classList.add("hidden");

    page.classList.remove("dark");
    page.classList.add("light");

    cards.toLight();

    timer.light.toLight();
  }

  themeImgDark.addEventListener("click", function (evt) {
    light();
  });

  themeImgLight.addEventListener("click", function (evt) {
    dark();
  });

  return {
    init,
  };
}
