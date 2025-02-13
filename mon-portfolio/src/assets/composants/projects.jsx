import ProjectCard from "../layout/projectCard";
import Modal from "../layout/modal";

function Projects() {
  return (
    <>
      <section className="projects">
        <h2 id="projets">Mes projets</h2>
        <div className="projects_container">
          <ProjectCard title="Projet Ohmyfood" />
          <ProjectCard title="Projet Portfolio Sophie Bluel" />
          <ProjectCard title="Projet Kasa" />
          <ProjectCard title="Projet ArgentBank" />
        </div>
      </section>
    </>
  );
}

export default Projects;
