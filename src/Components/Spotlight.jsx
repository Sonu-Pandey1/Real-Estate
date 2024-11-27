import "../Components/Spotlight.scss";
import Slider from "react-slick";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { TbLocationCheck } from "react-icons/tb";
import { NavLink } from "react-router-dom";

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
                <div className="sliderWrapper d-flex row ps-4">
                  <div className="spotlightCard col-lg-3 col-md-4 col-sm-12 rounded-5">
                    <div className="row row-top pt-5 ps-0">
                      <div className="col">
                        <img
                          className="rounded-4"
                          src="https://housing-images.n7net.in/0b8ad14c/730076b4a956aff45e9f7cc265ff74f8/v0/medium.png"
                          alt="Ashiyana Villas Logo"
                        />
                      </div>
                      <div className="col text-center pt-2">
                        <h6 className="m-0">Ashiyana Villas</h6>
                        <NavLink to="/">View Projects</NavLink>
                      </div>
                    </div>
                    <div className="row flex-column py-4 px-0 row-bottom">
                      <div className="col py-2 d-flex">
                        <TbLocationCheck className="me-3 mt-3 fs-5" />
                        <div>
                          <h5 className="m-0">Ashiyana Villas</h5>
                          <p>Noida Extension, Grater Noida</p>
                        </div>
                      </div>
                      <div className="col py-2 d-flex">
                        <LiaRupeeSignSolid className="fs-4 me-2" />
                        <div>
                          <h5 className="m-0">1.39 Cr - 1.67 Cr</h5>
                          <p>4 BHK Villas</p>
                        </div>
                      </div>
                      <div className="col py-4">
                        <button className="btn btn-outline-primary w-100 py-2">
                          Contact
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-9 col-md-8 col-sm-12 pe-0 py-2">
                    <img
                      src="https://housing-images.n7net.in/4f2250e8/3f3714060e11307b6a70f4d7c1a30de0/v0/fs/ashiyana_villas-noida_extension-greater+noida-dagar_builders_%26_developers.jpeg"
                      alt="Ashiyana Villas"
                      className="rounded-4 w-100 h-100"
                    />
                  </div>
                </div>

                {/* Repeat similar structure for additional slides */}
              </Slider>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
