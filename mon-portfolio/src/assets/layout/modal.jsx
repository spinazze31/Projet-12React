import { useState } from "react";
import Projects from "../../../projects.json";
import Carousel from "../composants/carousel";

function Modal({ onSuccess, id }) {
  const project = Projects.find((project) => project.id === id);

  const skillsList = project.skills.map((skills) => (
    <li key={skills}>{skills}</li>
  ));

  const presentationList = project.content.map((content) => (
    <li key={content}>{content}</li>
  ));

  const modalPresentation = () => {
    const modalContentPresentation = (
      <div>
        <p className="modal_presentation">{project.description}</p>
        <ul className="modal_content">{presentationList} </ul>
      </div>
    );
    return modalContentPresentation;
  };

  const [modalContent, setModalContent] = useState(modalPresentation);

  const [activeButton, setActiveButton] = useState("presentation");

  const handleClick = (e) => {
    let buttonName = e.target.dataset.name;
    setActiveButton(buttonName);
    if (buttonName === "presentation") {
      setModalContent(modalPresentation);
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

        <Carousel pictures={project.pictures} />

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
        <div className="modale_link-container">
          <a href={project.link} target="_blank">
            <button className="modale_link">Lien GitHub</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Modal;
