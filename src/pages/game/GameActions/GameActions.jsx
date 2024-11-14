import { useEffect, useState } from 'react';
import './GameActions.css';

export default function GameActions({ data, onNextClick, onPreviewClick, onSettingsClick, onMenuClick}) {
    const [prevState, setPrevState] = useState(false);
    const [nextState, setNextState] = useState(false);

    useEffect(() => {
        (data === 1) ? setPrevState(true) : setPrevState(false);
        (data === 3) ? setNextState(true) : setNextState(false);
    }, [data])
    

  return (
    <div className="game__actions">
      <button className="game__button" type="button" disabled={prevState} onClick={onPreviewClick} >
        Назад
      </button>
      <button className="game__button" type="button" disabled={nextState} onClick={onNextClick}>
        Дашьше
      </button>
      <button className="game__button" type="button" onClick={onSettingsClick}>
        Настройки
      </button>
      <button className="game__button" type="button" onClick={onMenuClick}>
        Меню
      </button>
    </div>
  );
}
