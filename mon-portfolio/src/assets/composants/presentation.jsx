import backgroundImage from "../../../public/Img/image_font.jpg";

function Presentation() {
  return (
    <>
      <section>
        <h2 id="presentation">Présentation</h2>
        <div className="presentation_container">
          <img
            className="presentation_img"
            src={backgroundImage}
            alt="Image de fond avec des fleurs"
          />
          <p className="presentation_txt">
            Fleuriste pendant 7 ans et étant passionnée d'informatique et d'art
            créatif, j'ai choisi de me réorienter vers le métier de développeuse
            web étant donné que celui-ci me permet d'allier les deux en créant
            du contenu de A à Z.
          </p>
        </div>
      </section>
    </>
  );
}

export default Presentation;
