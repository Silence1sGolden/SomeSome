import { useContext, useState } from "react";
import "./Game.css";
import Background from "../background/Background";
import Navigation from "../navigation/Navigation";
import { GameContext } from "../../data/game";
import { StoryContext } from "../../data/story";

export default function Game() {
  const [choice, setChoice] = useState(false);
  const [line, setLine] = useState(0);
  const gameContext = useContext(GameContext);
  const storyContext = useContext(StoryContext);

  function onNextLineClick() {
    console.log(line, storyContext[gameContext.state.chapter].text.length - 1);
    if (line < storyContext[gameContext.state.chapter].text.length - 1) {
      setLine(line + 1);
      gameContext.state.line = line;
    } else {
      setChoice(true);
    }
  }

  return (
    <>
      <Background state={choice} data={storyContext[gameContext.state.chapter]} gameSize="small"/>
      {
        choice ? null : <Navigation name="Sam" text={storyContext[gameContext.state.chapter].text[line]} onClick={onNextLineClick}/>
      }
    </>
  )
}
