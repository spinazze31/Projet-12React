import Projects from "../../../projects.json";

function Modal({ onSuccess, id }) {
  const project = Projects.find((project) => project.id === id);
  console.log(id);
  return (
    <>
      <div className="modal">
        <div className="cross_modal-container">
          <i onClick={() => onSuccess()} className="fa-solid cross_modal">
            &#xf00d;
          </i>
        </div>
        <p>{project.title} </p>
      </div>
    </>
  );
}

export default Modal;
