import "./Background.css";
import Area from "../area/Area";

export default function Background({ data, state, gameSize }) {
  function onClick() {
    console.log("err");
  }

  if (state) {
    return (
      <div className="background">
        <img className="background__img" src={data.background} alt={data.alt} />
        {...data.points[gameSize].map((elem) => (
          <Area data={elem} onClick={onClick} />
        ))}
      </div>
    );
  } else {
    return (
      <div className="background">
        <img
          className="background__img"
          useMap="#map"
          src={data.background}
          alt={data.alt}
        />
      </div>
    );
  }
}
