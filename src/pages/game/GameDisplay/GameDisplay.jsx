import './GameDisplay.css';

export default function GameDisplay({text, img, alt}) {
    return (
        <div className="game__display">
            <p className="game__display-text">{text}</p>
            <img className="game__display-img" src={img} alt={alt} />
        </div>
    )
}