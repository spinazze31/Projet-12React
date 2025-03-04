import Logos from "../../../skills.json";

function Skills() {
  const LogosList = Logos.map((logo) => (
    <div className="skills_container-logo" key={logo.id}>
      <img className="logo" src={logo.src} alt={logo.alt} />
      <h3>{logo.title} </h3>
    </div>
  ));

  return (
    <>
      <section>
        <h2 id="competences">Mes Compétences</h2>
        <div className="skills_container">{LogosList}</div>
      </section>
    </>
  );
}

export default Skills;
