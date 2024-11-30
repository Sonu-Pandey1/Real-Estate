import "../Components/Spotlight.scss";
import Slider from "react-slick";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { TbLocationCheck } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import SpotlightCard from "../Components/SpotlightCard"

export default function Spotlight() {
  const settings = {
    fade: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="spotlightSectionWrapper">
        <section className="spotLight-section container py-3">
          {/* Section Title */}
          <div className="spotLightTitle mb-4">
            <h2>
              <span className="opacity-75 fs-3">In</span> Spotlight
            </h2>
            <p className="m-0">Find Your Best Place To Live With Us.</p>
            <img
              src="https://masaischool.com/images/new-homepage/yellow-vector.svg"
              alt="decorative line"
              className="mt-2 img-fluid"
            />
          </div>

          {/* Slider Section */}
          <div className="spotlightSlider-Wrapper h-100">
            <div className="slider-container m-auto">
              <Slider {...settings} className="slider rounded-4">
                {/* Slide 1 */}
                <SpotlightCard/>

                {/* Repeat similar structure for additional slides */}
              </Slider>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
