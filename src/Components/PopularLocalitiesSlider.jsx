import "../Components/PopularLocalitiesSlider.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function PopularLocalitiesSlider({ children,settings }) {


  return (
    <div className="sliderContainer container pt-0  ">
      <div className="row align-items-center gap-5">
        <div className="col ">
          <div className="slider-container">

            <Slider {...settings} className={`slider`}>
              {children}
            </Slider>

          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularLocalitiesSlider;
