import { useState } from "react";
import Projects from "../../../projects.json";

function Modal({ onSuccess, id }) {
  const project = Projects.find((project) => project.id === id);
  console.log(id);

  const skillsList = project.skills.map((skills) => (
    <li key={skills}>{skills} </li>
  ));

  const presentationList = project.content.map((content) => (
    <li key={content}>{content} </li>
  ));

  const [modalContent, setModalContent] = useState(
    <div>
      <p className="modal_presentation">{project.description}</p>
      <ul className="modal_content">{presentationList} </ul>
    </div>
  );

  const [activeButton, setActiveButton] = useState("presentation");

  const handleClick = (e) => {
    let buttonName = e.target.dataset.name;
    setActiveButton(buttonName);
    if (buttonName === "presentation") {
      setModalContent(
        <div>
          <p className="modal_presentation">{project.description}</p>
          <ul className="modal_content">{presentationList} </ul>
        </div>
      );
    } else
      setModalContent(
        <ul className=" modal_content modal_skills">{skillsList}</ul>
      );
  };
  return (
    <>
      <div className="modal">
        <div className="cross_modal-container">
          <i onClick={() => onSuccess()} className="fa-solid cross_modal">
            &#xf00d;
          </i>
        </div>
        <h2 className="project_card-title">{project.title} </h2>
        <div className="modal_image-container">
          <img
            className="modal_image"
            src={project.cover}
            alt="image du projet"
          />
        </div>
        <div className="modal_buttons-container">
          <button
            data-name="presentation"
            className={
              activeButton === "presentation"
                ? "modal_button modal_button-selected"
                : "modal_button"
            }
            onClick={handleClick}
          >
            Présentation
          </button>
          <button
            data-name="skills"
            className={
              activeButton === "skills"
                ? "modal_button modal_button-selected"
                : "modal_button"
            }
            onClick={handleClick}
          >
            Compétences acquises
          </button>
        </div>
        {modalContent}
      </div>
    </>
  );
}

export default Modal;
