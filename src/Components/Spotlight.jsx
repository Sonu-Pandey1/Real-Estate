import "../Components/Spotlight.scss";
import Slider from "react-slick";
import SpotlightCard from "../Components/SpotlightCard";

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

  const SpotlightData = [
    {
      image:"https://housing-images.n7net.in/4f2250e8/3f3714060e11307b6a70f4d7c1a30de0/v0/fs/ashiyana_villas-noida_extension-greater+noida-dagar_builders_%26_developers.jpeg",
      title: "Ashiyana Villas",
      location: "Noida Extension, Grater Noida",
      price: " 1.39 Cr - 1.67 Cr",
      description: "3 BHK Vilas",
    },
    {
      image:"https://housing-images.n7net.in/4f2250e8/902d562f58b6eddebb3833818b9a75cd/v0/medium/escon_panache_villas_phase_2-surajpur-greater+noida-escon_infra_realtors_pvt_ltd.jpeg",
      title: "Bhutani Flats",
      location: "Amarpali City, Sector 76, Noida",
      price: "1.19 Cr - 2.67 Cr",
      description: "4 BHK Vilas",
    },
    {
      image:"https://housing-images.n7net.in/4f2250e8/05643458e4a91b5fa014a077c4988551/v0/medium/ivory_county_gold-sector_115-noida-county_group.jpeg",
      title: "M3M Flats",
      location: "Amarpali Silicon City",
      price: "1.59 Cr - 3.67 Cr",
      description: "2 BHK Vilas",
    },
    {
      image:"https://housing-images.n7net.in/4f2250e8/c925ab04f02f54312c67fe3ec4b889e3/v0/medium/ats_picturesque_reprieves_phase_2-sector_152-noida-ats_infrastructure_limited.jpeg",
      title: "Mahagun Mantra",
      location: " Sector 76, Noida",
      price: "1.9 Cr - 3.7 Cr",
      description: "3,4 BHK FLats",
    },
  ];

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
                {SpotlightData.map((SpotlightData, index) => (
                  <div
                    key={index}
                    className="" 
                  >
                    <SpotlightCard
                      title={SpotlightData.title}
                      image={SpotlightData.image}
                      description={SpotlightData.description}
                      location={SpotlightData.location}
                      price={SpotlightData.price}
                    />
                  </div>
                ))}

                {/* Repeat similar structure for additional slides */}
              </Slider>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
