import "../Components/Spotlight.scss";
import Slider from "react-slick";
import SpotlightCard from "../Components/SpotlightCard";
import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";

export default function Spotlight() {
  const { listings } = useContext(AuthContext);
  console.log(listings)

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
              {/* Map over API data */}
              {listings && listings.length > 0 ? (
                listings.map((listing, index) => (
                  <div key={index} className="">
                    <SpotlightCard
                      title={listing.title}
                      image={listing.images[0]}
                      description={listing.property}
                      location={listing.address}
                      price={listing.price}
                    />
                  </div>
                ))
              ) : (
                <p>No listings available</p>
              )}
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
}
