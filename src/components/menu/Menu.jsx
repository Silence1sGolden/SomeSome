import { useContext } from "react";
import "./Menu.css";
import { GameContext } from "../../data/game";
import Button from "../button/Button";

export default function Menu({
  setPage
}) {
  const gameContext = useContext(GameContext);

  function onStartClick() {
    gameContext.state.chapter = 1;
    gameContext.state.line = 0;
    setPage("game");
  }

  function onSettingsClick() {
    setPage("settings");
  }

  function onContinueClick() {
    setPage("game");
  }

  return (
    <div className="menu">
      {gameContext.state.chapter !== 1 && gameContext.state.line !== 0 && (
        <Button type="menu__button" onClick={onContinueClick}>
          Продолжить
        </Button>
      )}
      <Button type="menu__button" onClick={onStartClick}>
        Начать
      </Button>
      <Button type="menu__button" onClick={onSettingsClick}>
        Настройки
      </Button>
    </div>
  );
}
