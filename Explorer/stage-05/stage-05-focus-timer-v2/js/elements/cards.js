const cards = Cards();

export default cards;

function Cards() {
  const theme = { light: "light", dark: "dark" };
  const card = { tree: "tree", rain: "rain", store: "store", fire: "fire" };
  const audio = {
    tree: "https://github.com/luismattos/web-study/blob/main/assets/trees.mp3?raw=true",
    rain: "https://github.com/luismattos/web-study/blob/main/assets/rain.mp3?raw=true",
    store:
      "https://github.com/luismattos/web-study/blob/main/assets/coffee.mp3?raw=true",
    fire: "https://github.com/luismattos/web-study/blob/main/assets/fireplace.mp3?raw=true",
    alarm:
      "https://github.com/luismattos/web-study/blob/98daafbcb48096a5997762b995499d8fcf65102d/assets/clock-alarm.mp3?raw=true",
  };

  const bgAudio = BgAudio();

  const treeCard = Card(card.tree, audio.tree);
  const rainCard = Card(card.rain, audio.rain);
  const storeCard = Card(card.store, audio.store);
  const fireCard = Card(card.fire, audio.fire);

  function Card(card, audio) {
    const cardElem = document.querySelector("#" + card + "-card");
    const cardImgLightElem = document.querySelector(
      "#" + card + "-card img." + theme.light
    );
    const cardImgDarkElem = document.querySelector(
      "#" + card + "-card img." + theme.dark
    );
    const audioSrc = audio;

    config();

    function deselectAll() {
      treeCard.deselect();
      rainCard.deselect();
      storeCard.deselect();
      fireCard.deselect();
    }

    function config() {
      cardElem.addEventListener("click", function (evt) {
        const iS = isSelected();

        deselectAll();

        if (iS) {
          deselect();
          bgAudio.stop();
          bgAudio.setSrc("");
        } else {
          select();
          bgAudio.setSrc(audio, true);
          bgAudio.play();
        }
      });
    }

    function isSelected() {
      return cardElem.classList.contains("selected");
    }

    function select() {
      if (!isSelected()) {
        cardElem.classList.add("selected");
      }
    }

    function deselect() {
      if (isSelected()) {
        cardElem.classList.remove("selected");
      }
    }

    function dark() {
      cardImgLightElem.classList.add("hidden");
      cardImgDarkElem.classList.remove("hidden");
    }

    function light() {
      cardImgLightElem.classList.remove("hidden");
      cardImgDarkElem.classList.add("hidden");
    }

    return { dark, light, select, deselect, isSelected };
  }

  function BgAudio() {
    const bgAudioElem = document.querySelector(".bg-audio");
    config();

    function config() {}

    function getSrc() {
      return String(bgAudioElem.getAttribute("src"));
    }

    function setSrc(src, loop = true) {
      bgAudioElem.setAttribute("src", src);
      bgAudioElem.loop = loop;
    }

    function play() {
      if (bgAudioElem.getAttribute("src") == "") {
        console.log("Nenhum audio selecionado.");
        return;
      }
      bgAudioElem.play();
    }

    function pause() {
      if (bgAudioElem.getAttribute("src") == "") {
        console.log("Nenhum audio selecionado.");
        return;
      }

      bgAudioElem.pause();
    }

    function stop(src) {
      bgAudioElem.load();
    }

    function getCurrentTime() {
      return bgAudioElem.currentTime;
    }

    function setCurrentTime(currentTime) {
      bgAudioElem.currentTime = currentTime;
    }

    function addEventListener(event, doIt) {
      bgAudioElem.addEventListener(event, doIt, true);
    }

    function removeEventListener(event, doIt) {
      bgAudioElem.removeEventListener(event, doIt, true);
    }

    return {
      getSrc,
      setSrc,
      play,
      pause,
      stop,
      getCurrentTime,
      setCurrentTime,
      addEventListener,
      removeEventListener,
    };
  }

  function toDark() {
    treeCard.dark();
    rainCard.dark();
    storeCard.dark();
    fireCard.dark();
  }

  function toLight() {
    treeCard.light();
    rainCard.light();
    storeCard.light();
    fireCard.light();
  }

  function alarm() {
    const src = bgAudio.getSrc();
    const ct = bgAudio.getCurrentTime();

    function doIt(evt) {
      bgAudio.stop();
      bgAudio.setSrc(src);
      bgAudio.setCurrentTime(ct);
      bgAudio.play();
      bgAudio.removeEventListener("ended", doIt);
    }

    bgAudio.stop();
    bgAudio.setSrc(audio.alarm, false);
    bgAudio.play();
    bgAudio.addEventListener("ended", doIt);
  }

  return {
    toDark,
    toLight,
    alarm,
  };
}
