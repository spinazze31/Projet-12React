import imageProjectOhmyfood from "../Img/image_projet_ohmyfood_1.jpg";

function Projects() {
  return (
    <>
      <section className="projects">
        <h2 id="projets">Mes projets</h2>
        <div className="projects_container">
          <img className="img_projects" src={imageProjectOhmyfood} />
        </div>
      </section>
    </>
  );
}

export default Projects;
