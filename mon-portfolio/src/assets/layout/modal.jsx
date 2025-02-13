function Modal({ onSuccess }) {
  if (typeof onSuccess !== "function") {
    console.error("La prop onSuccess n'est pas une fonction !");
  }
  return (
    <>
      <div className="modal">
        <div className="cross_modal-container">
          <i onClick={() => onSuccess()} className="fa-solid cross_modal">
            &#xf00d;
          </i>
        </div>
      </div>
    </>
  );
}

export default Modal;
