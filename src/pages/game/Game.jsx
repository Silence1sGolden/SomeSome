import { pages } from "../../data/pages";
import Modal from "../../modal/Modal";
import "./Game.css";
import GameActions from "./GameActions/GameActions";
import GameDisplay from "./GameDisplay/GameDisplay";
import { useState } from "react";

export default function Game({ onMenuClick }) {
  const [data, setData] = useState(pages[0]);
  const [modal, setModal] = useState(null);

  function onPreviewClick() {
    if (data.page === 1) {
      console.log("Это первая страница");
    } else {
      const p = pages.find((item) => item.page === data.page - 1);
      if (p) setData(p);
    }
  }

  function onNextClick() {
    const p = pages.find((item) => item.page === data.page + 1);
    if (p) {
      setData(p);
    } else {
      console.log("Страница не найдена.");
    }
  }

  function onSettingsClick() {
    setModal(<Modal onCloseModal={onCloseModal}/>);
  }

  function onCloseModal() {
    setModal(null);
  }

  return (
    <div className="game">
      {modal}
      <GameDisplay text={data.text} img={data.img} alt={data.alt} />
      <GameActions data={data.page} onNextClick={onNextClick} onPreviewClick={onPreviewClick} onSettingsClick={onSettingsClick} onMenuClick={onMenuClick}/>
    </div>
  );
}
