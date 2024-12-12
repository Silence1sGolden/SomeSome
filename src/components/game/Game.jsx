import { useContext, useState } from "react";
import "./Game.css";
import Background from "../background/Background";
import Navigation from "../navigation/Navigation";
import { GameContext } from "../../data/game";
import { StoryContext } from "../../data/story";
import Button from "../button/Button";
import Modal from "../modal/Modal";

export default function Game({ setPage }) {
  const gameContext = useContext(GameContext);
  const storyContext = useContext(StoryContext);
  const [choice, setChoice] = useState(false);
  const [line, setLine] = useState(gameContext.state.line);
  const [modal, setModal] = useState(false);

  function onMenuClick() {
    setPage("menu");
  }

  function onNextLineClick() {
    if (line < storyContext[gameContext.state.chapter].text.length) {
      localStorage.setItem("story", {
        chapter: gameContext.state.chapter,
        line: line + 1
      });
      gameContext.state.line = line + 1;
      setLine(line + 1);
    } else {
      setChoice(true);
    }
  }

  function openModal() {
    setModal(true);
  }

  function onModalClose() {
    setModal(false);
  }

  function onNextChapter() {
    localStorage.setItem("story", {
      chapter: gameContext.state.chapter += 1,
      line: 0
    });
    gameContext.state.chapter += 1;
    gameContext.state.line = 0;
    setLine(0);
    setChoice(false)
  }

  return (
    <>
      <img className="game__settings" src="https://i.pinimg.com/enabled_lo_mid/736x/5e/1c/59/5e1c5989eff661f93ffd5d1a82868dde.jpg" alt="настройки" onClick={openModal}/>
      {modal && (
        <Modal onModalClose={onModalClose}>
          <Button type="menu__button " onClick={onMenuClick}>Меню</Button>
        </Modal>
      )}
      <Background
        state={choice}
        data={storyContext[gameContext.state.chapter]}
        gameSize="small"
        onNextChapter={onNextChapter}
      />
      {choice ? null : (
        <Navigation
          name={storyContext[gameContext.state.chapter].text[line].name}
          text={storyContext[gameContext.state.chapter].text[line].text}
          onClick={onNextLineClick}
        />
      )}
    </>
  );
}
