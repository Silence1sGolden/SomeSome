export default function Settings() {
    return (
        <div className="menu">
            <button className="menu__button" type="button" onClick={onStartClick}>Музыка</button>
            <button className="menu__button" type="button" onClick={onSettingsClick}>Звуки</button>
            <button className="menu__button" type="button" onClick={onSettingsClick}>Язык</button>
        </div>
    )
}