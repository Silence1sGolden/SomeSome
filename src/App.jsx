import { useState } from "react";
import "./App.css";
import Menu from "./components/menu/Menu";
import { game, GameContext } from "./data/game";
import Game from "./components/game/Game";
import { story, StoryContext } from "./data/story";

export default function App() {
  const [page, setPage] = useState("game");

  return (
    <>
      <StoryContext.Provider value={story}>
        <GameContext.Provider value={game}>
          <div className="page">
            {page === "menu" && <Menu />}
            {page === "game" && <Game />}
          </div>
        </GameContext.Provider>
      </StoryContext.Provider>
    </>
  );
}
