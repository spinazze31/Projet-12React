import { useEffect, useState } from "react";
import Modal from "./modal";
import Projects from "../../../projects.json";

function ProjectCard() {
  const [isOpen, setIsOpen] = useState(true);
  const [buttonId, setButtonId] = useState(null);

  const clickedButton = (e) => {
    const buttonIdClicked = e.currentTarget.id;
    setButtonId(buttonIdClicked);
  };

  useEffect(() => {}, [buttonId]);

  const buttonProject = Projects.map((project) => (
    <button
      key={project.id}
      type="button"
      data-id={project.id}
      id={project.id}
      onClick={(e) => {
        setIsOpen(false);
        clickedButton(e);
      }}
      className="project_card"
    >
      <h3 className="project_card-title">{project.title}</h3>
    </button>
  ));

  return (
    <>
      {isOpen ? (
        <div className="projects_container">{buttonProject} </div>
      ) : (
        <Modal onSuccess={() => setIsOpen(true)} id={buttonId} />
      )}
    </>
  );
}

export default ProjectCard;
