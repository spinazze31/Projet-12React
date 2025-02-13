import { useState } from "react";
import Modal from "./modal";

function ProjectCard({ title }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      {isOpen ? (
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="project_card"
        >
          <h3 className="project_card-title">{title}</h3>
        </button>
      ) : (
        <Modal onSuccess={() => setIsOpen(true)} />
      )}
    </>
  );
}

export default ProjectCard;
