import "./Area.css";

export default function Area({ data, onClick }) {
  return (
    <div className="background__point" style={{ inset: data.point }}>
      <img
        className="background__point-img"
        src={data.img}
        alt={data.name}
        onClick={onClick}
      />
      <span className="background__point-name">{data.name}</span>
    </div>
  );
}
