import { useEffect, useState } from "react";
import "./App.css";
import Menu from "./components/menu/Menu";
import { game, GameContext } from "./data/game";
import Game from "./components/game/Game";
import { story, StoryContext } from "./data/story";
import Settings from "./components/settings/Settings";

export default function App() {
  const [page, setPage] = useState("menu");

  useEffect(() => {
    const localStoryData = localStorage.getItem("story");
    if (localStoryData) {
      game.state.chapter = localStoryData.chapter;
      game.state.line = localStoryData.line;
    } else {
      localStorage.setItem("story", {
        chapter: 1,
        line: 0
      })
      game.state.chapter = 1;
      game.state.line = 0;
    }
  }, [])

  return (
    <>
      <StoryContext.Provider value={story}>
        <GameContext.Provider value={game}>
          <div className="page">
            {page === "menu" && (
              <Menu
                setPage={setPage}
              />
            )}
            {page === "game" && <Game setPage={setPage}/>}
            {page === "settings" && <Settings setPage={setPage}/>}
          </div>
        </GameContext.Provider>
      </StoryContext.Provider>
    </>
  );
}
