import "./Modal.css";

export default function Modal({children, onModalClose}) {
    return (
        <div className="modal" onClick={onModalClose}>
            <div className="modal__content">
                {children}
            </div>
        </div>
    )
}