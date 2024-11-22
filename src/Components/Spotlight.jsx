import "../Components/Spotlight.scss";
import Slider from "react-slick";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { TbLocationCheck } from "react-icons/tb";
import { NavLink } from "react-router-dom";

export default function Spotlight() {
  const settings = {
    // dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  return (
    <>
      <div className="spotlightSectionWrapper ">
        <section className="spotLight-section container  py-3">
          <div className="spotLightTitle mb-4">
            <h2>
              {" "}
              <span className=" opacity-75 fs-3">In </span> Spotlight
            </h2>
            <p className="m-0">FInd Your Best Place To Live With Us.</p>
            <img
              src="https://masaischool.com/images/new-homepage/yellow-vector.svg"
              alt="line"
            />
          </div>
          <div className="spotlightSlider-Wrapper  h-100">
            <div className="slider-container m-auto  ">
              <Slider {...settings} className=" slider rounded-4">
                <div className=" sliderWrapper d-flex row ps-4">
                  <div className="spotlightCard col-3 rounded-5 ">
                    <div className="">
                      <div className=" row row-top pt-5 ps-0 ">
                        <div className="col ">
                          <img
                            className="rounded-4 "
                            src="https://housing-images.n7net.in/0b8ad14c/730076b4a956aff45e9f7cc265ff74f8/v0/medium.png"
                            alt="logo"
                          />
                        </div>
                        <div className="col  text-center pt-2">
                          <h6 className="m-0">Ashiyana Villas</h6>
                          <NavLink>View Projects</NavLink>
                        </div>
                      </div>

                      <div className=" row flex-column py-4 px-0 row-bottom">
                        <div className="col py-2 d-flex">
                          <div>
                            <TbLocationCheck className="me-3 mt-3 fs-5" />
                          </div>
                          <div>
                            <h5 className="m-0">Ashiyana Villas</h5>
                            <p>Noida Extension, Grater Noida</p>
                          </div>
                        </div>
                        <div className="col py-2 d-flex">
                          <div>
                            <LiaRupeeSignSolid className="fs-4 me-2" />
                          </div>
                          <div>
                            <h5 className="m-0">1.39 Cr - 1.67 Cr</h5>
                            <p>4 BHK Vilas</p>
                          </div>
                        </div>
                        <div className="col py-4">
                          <button className="btn btn-outline-primary w-100 py-2">
                            Contact
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-9 pe-0 py-2">
                    <img
                      className=""
                      src={
                        "https://housing-images.n7net.in/4f2250e8/3f3714060e11307b6a70f4d7c1a30de0/v0/fs/ashiyana_villas-noida_extension-greater+noida-dagar_builders_%26_developers.jpeg"
                      }
                    />
                  </div>
                </div>

                <div className=" sliderWrapper d-flex row ps-4">
                  <div className="spotlightCard col-3 rounded-5 ">
                    <div className="">
                      <div className=" row row-top pt-5 ps-0 ">
                        <div className="col ">
                          <img
                            className="rounded-4 "
                            src="https://housing-images.n7net.in/0b8ad14c/fe06cd3552dc2bcece182a3a9302fd15/v0/medium.jpg"
                            alt="logo"
                          />
                        </div>
                        <div className="col  text-center pt-2">
                          <h6 className="m-0">Gold Homes</h6>
                          <NavLink>View Projects</NavLink>
                        </div>
                      </div>

                      <div className=" row flex-column py-4 px-0 row-bottom">
                        <div className="col py-2 d-flex">
                          <div>
                            <TbLocationCheck className="me-3 mt-3 fs-5" />
                          </div>
                          <div>
                            <h5 className="m-0">Orchid Estate</h5>
                            <p>Noida Extension, Grater Noida</p>
                          </div>
                        </div>
                        <div className="col py-2 d-flex">
                          <div>
                            <LiaRupeeSignSolid className="fs-4 me-2" />
                          </div>
                          <div>
                            <h5 className="m-0">38.5 L - 58.01 L</h5>
                            <p>2,3 BHK Apartments</p>
                          </div>
                        </div>
                        <div className="col py-4">
                          <button className="btn btn-outline-primary w-100 py-2">
                            Contact
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-9 pe-0 py-2">
                    <img
                      className=""
                      src={
                        "https://housing-images.n7net.in/4f2250e8/2316946f3e06d2e47ccc96deab6a2b9e/v0/fs/orchid_estate-noida_extension-greater+noida-rana_ji.jpeg"
                      }
                    />
                  </div>
                </div>

                <div className=" sliderWrapper d-flex row ps-4">
                  <div className="spotlightCard col-3 rounded-5 ">
                    <div className="">
                      <div className=" row row-top pt-5 ps-0 ">
                        <div className="col ">
                          <img
                            className="rounded-4 "
                            src="https://housing-images.n7net.in/0b8ad14c/730076b4a956aff45e9f7cc265ff74f8/v0/medium.png"
                            alt="logo"
                          />
                        </div>
                        <div className="col  text-center pt-2">
                          <h6 className="m-0">Ultima Heights</h6>
                          <NavLink>View Projects</NavLink>
                        </div>
                      </div>

                      <div className=" row flex-column py-4 px-0 row-bottom">
                        <div className="col py-2 d-flex">
                          <div>
                            <TbLocationCheck className="me-3 mt-3 fs-5" />
                          </div>
                          <div>
                            <h5 className="m-0">The Ultime 107</h5>
                            <p>Sector 107, Noida</p>
                          </div>
                        </div>
                        <div className="col py-2 d-flex">
                          <div>
                            <LiaRupeeSignSolid className="fs-4 me-2" />
                          </div>
                          <div>
                            <h5 className="m-0">61.14 L - 1.79 Cr</h5>
                            <p>2,3 BHK Builder Floors</p>
                          </div>
                        </div>
                        <div className="col py-4">
                          <button className="btn btn-outline-primary w-100 py-2">
                            Contact
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-9 pe-0 py-2">
                    <img
                      className=""
                      src={
                        "https://housing-images.n7net.in/4f2250e8/9a2debd58638b508491d7169c8817b86/v0/fs/the_ultima_107-sector_107_noida-noida-the_ultima_group.jpeg"
                      }
                    />
                  </div>
                </div>

                <div className=" sliderWrapper d-flex row ps-4">
                  <div className="spotlightCard col-3 rounded-5 ">
                    <div className="">
                      <div className=" row row-top pt-5 ps-0 ">
                        <div className="col ">
                          <img
                            className="rounded-4 "
                            src="https://housing-images.n7net.in/0b8ad14c/3459816399e5127de672ca478ef85b8d/v0/medium.jpg"
                            alt="logo"
                          />
                        </div>
                        <div className="col  text-center pt-2">
                          <h6 className="m-0">Best Deal</h6>
                          <NavLink>View Projects</NavLink>
                        </div>
                      </div>

                      <div className=" row flex-column py-4 px-0 row-bottom">
                        <div className="col py-2 d-flex">
                          <div>
                            <TbLocationCheck className="me-3 mt-3 fs-5" />
                          </div>
                          <div>
                            <h5 className="m-0">Paradise Palm Villa</h5>
                            <p>Noida Extension, Grater Noida</p>
                          </div>
                        </div>
                        <div className="col py-2 d-flex">
                          <div>
                            <LiaRupeeSignSolid className="fs-4 me-2" />
                          </div>
                          <div>
                            <h5 className="m-0">90.0 L - 1.02 Cr</h5>
                            <p>4 BHK Vilas</p>
                          </div>
                        </div>
                        <div className="col py-4">
                          <button className="btn btn-outline-primary w-100 py-2">
                            Contact
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-9 pe-0 py-2">
                    <img
                      className=""
                      src={
                        "https://housing-images.n7net.in/4f2250e8/ef93096c7bb46181cd166ccc5237c750/v0/fs/dagar_ashiyana_prime-noida_extension-greater+noida-dagar_builders_%26_developers.jpeg"
                      }
                    />
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
