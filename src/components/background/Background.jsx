import "./Background.css";
import Area from "../area/Area";

export default function Background({ data, state, gameSize, onNextChapter }) {
  return (
    <div className="background">
      <img className="background__img" src={data.background} alt={data.alt} />
      {state &&
        data.points[gameSize].map((elem, index) => (
          <Area key={index} data={elem} onClick={onNextChapter} />
        ))}
    </div>
  );
}
