import { useContext } from "react";
import "./Button.css";
import { GameContext } from "../../data/game";

export default function Button({ children, type, onClick, ...rest }) {
    const gameContext = useContext(GameContext);

    function playSound(evt) {
        if (gameContext.sounds.status) {
            // добавить звук нажатия на клавишу
            console.log('sounds played');
        }
        onClick(evt);
    }

    return <button className={"button " + type} {...rest} type="button" onClick={playSound}>{children}</button>
}