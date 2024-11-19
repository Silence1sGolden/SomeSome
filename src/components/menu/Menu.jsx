import './Menu.css';

export default function Menu({ onStartClick, onSettingsClick }) {

    return (
        <div className="menu">
            <button className="menu__button" type="button" onClick={onStartClick}>Начать</button>
            <button className="menu__button" type="button" onClick={onSettingsClick}>Настройки</button>
        </div>
    )
    
}