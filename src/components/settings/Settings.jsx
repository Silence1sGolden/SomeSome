import "./Settings.css";
import musicCat from "../../assets/mus.mp3";
import { useContext, useRef } from "react";
import { GameContext } from "../../data/game";

const mus = new Audio(musicCat);

export default function Settings({ onMenuClick }) {
  const gameSettings = useContext(GameContext);
  const musicVolume = useRef(null);
  const soundsVolume = useRef(null);

  function toggleMusic(evt) {
    if (gameSettings.music.status) {
      gameSettings.music.status = false;
      mus.pause();
      musicVolume.current.disabled = true;
    } else {
      gameSettings.music.status = true;
      mus.play();
      musicVolume.current.disabled = false;
    }
    toggleButton(evt.target);
  }

  function toggleSounds(evt) {
    if (gameSettings.sounds.status) {
      gameSettings.sounds.status = false;
      soundsVolume.current.disabled = true;
    } else {
      gameSettings.sounds.status = true;
      soundsVolume.current.disabled = false;
    }
    toggleButton(evt.target);
  }

  function toggleButton(target) {
    if (target.classList.contains("menu__button-on")) {
      target.classList.remove("menu__button-on");
      target.classList.add("menu__button-off");
    } else {
      target.classList.remove("menu__button-off");
      target.classList.add("menu__button-on");
    }
  }

  function onChangeMusicVolume() {
    gameSettings.music.volume = musicVolume.current.value;
    mus.volume = gameSettings.music.volume;
  }

  function onChangeSoundsVolume() {
    gameSettings.sounds.volume = soundsVolume.current.value;
    mus.volume = gameSettings.sounds.volume;
  }

  return (
    <div className="menu">
      <button
        className="menu__button menu__button-off"
        type="button"
        onClick={toggleMusic}
      >
        Музыка
      </button>
      <input
        type="range"
        max={1}
        min={0}
        step={0.01}
        ref={musicVolume}
        disabled={true}
        onChange={onChangeMusicVolume}
      />
      <button
        className="menu__button menu__button-off"
        type="button"
        onClick={toggleSounds}
      >
        Звуки
      </button>
      <input
        type="range"
        max={1}
        min={0}
        step={0.01}
        ref={soundsVolume}
        disabled={true}
        onChange={onChangeSoundsVolume}
      />
      <button className="menu__button menu__button-off" type="button">
        Язык
      </button>
      <button className="menu__button" onClick={onMenuClick}>
        Меню
      </button>
    </div>
  );
}
