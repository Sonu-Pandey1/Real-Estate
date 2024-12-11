
/* eslint-disable react/prop-types */
import { useState } from "react";
import "./slider.scss";

function Slider({ images, onImageClick }) {
  const [imageIndex, setImageIndex] = useState(null);

  const changeSlide = (direction) => {
    if (direction === "left") {
      setImageIndex(imageIndex === 0 ? images.length - 1 : imageIndex - 1);
    } else {
      setImageIndex(imageIndex === images.length - 1 ? 0 : imageIndex + 1);
    }
  };

  // todo img border and  slider responsive and pass every id. cords so that map show onlt that particular property and also single page main toda bhut data statice hai dynamic krna hai like school,etc. also take care of responsiveness
  return (
    <div className="singlePageSlider">
      <div className="slider">
        {imageIndex !== null && (
          <div className="fullSlider">
            <div className="arrow" onClick={() => changeSlide("left")}>
              <img src="https://cdn-icons-png.flaticon.com/128/2722/2722991.png" alt="Previous" />
            </div>
            <div className="imgContainer ">
              <img className="w-100" src={images[imageIndex]} alt="Preview" />
            </div>
            <div className="arrow" onClick={() => changeSlide("right")}>
              <img src="https://cdn-icons-png.flaticon.com/128/2985/2985179.png" className="right" alt="Next" />
            </div>
            <div className="close" onClick={() => setImageIndex(null)}>
              &times;
            </div>
          </div>
        )}
        <div className="bigImage">
          <img
            src={images[0]}
            alt="Main Preview"
            onClick={() => setImageIndex(0)}
          />
        </div>
        <div className="smallImages">
          {images.slice(1).map((image, index) => (
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              key={index}
              onClick={() => setImageIndex(index + 1)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slider;
