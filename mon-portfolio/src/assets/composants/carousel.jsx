import { useState } from "react";

function Carousel({ pictures }) {
  const [index, setIndex] = useState(0);

  const nextImage = () => {
    if (index === pictures.length - 1) setIndex(0);
    else setIndex(index + 1);
  };

  const prevImage = () => {
    if (index === 0) setIndex(pictures.length - 1);
    else setIndex(index - 1);
  };

  const imageSrc = pictures.map((picture) => {
    return picture.src;
  });

  const imageSrcSet = pictures.map((picture) => {
    return picture.srcSet;
  });

  return (
    <>
      <img
        className="modal_image"
        src={imageSrc[index]}
        srcSet={imageSrcSet[index]}
        alt="image du projet"
      />
      <i onClick={nextImage} className="fa-solid chevron-right">
        &#xf054;
      </i>
      <i onClick={prevImage} className="fa-sharp fa-solid chevron-left">
        &#xf053;
      </i>
    </>
  );
}

export default Carousel;
