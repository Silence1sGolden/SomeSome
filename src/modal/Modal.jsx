import "./Modal.css";

export default function Modal({ children, onCloseModal }) {
  return (
    <div className="modal">
      <div className="container">
        <span className="container__close" onClick={onCloseModal}></span>
        <div className="container__data">{children}</div>
      </div>
    </div>
  );
}
