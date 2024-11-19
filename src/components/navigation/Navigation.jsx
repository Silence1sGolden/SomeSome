import "./Navigation.css";

export default function Navigation({ name, text, onClick }) {
    return (
        <div className="nav" onClick={onClick}>
            <h2 className="nav__name">{name}</h2>
            <p className="nav__text">{text}</p>
        </div>
    )
}