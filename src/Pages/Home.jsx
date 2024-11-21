import "./Home.scss"; // Add custom styles here
import PopularLocalitiesSlider from "../Components/PopularLocalitiesSlider";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { TbLocationCheck } from "react-icons/tb";

function Home() {
  const settings = {
    // dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    // autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <>
      {/* Hero Section */}
      <div className="hero-section ">
        {/* Background and Heading */}
        <div className="title mx-auto  text-white ">
          <p className="">Properties to buy in Gurgaon</p>
        </div>

        <form>
          <div className="formContainer mx-auto">
            {/* Tabs */}
            {/* <div className="tabsWrapper">
           <nav className=" d-flex">
            <NavLink className="navlink" to={"/buy"}>Buy</NavLink>
            <NavLink className="navlink" to={"/rent"}>Rent</NavLink>
            <NavLink className="navlink" to={"/commercial"}>Commercial</NavLink>
            <NavLink className="navlink" to={"/pg-coliving"}>Pg / Co-living</NavLink>
            <NavLink className="navlink" to={"/plots"}>Plots</NavLink>
           </nav>
          </div> */}
            {/* search bar */}
            <div className="mx-auto tbasSearchForm">
              <div className="mb-3 position-relative">
                {/* Search Icon */}
                <div className=" searchIcon position-absolute top-50 start-0 translate-middle-y ps-3 d-flex">
                  {/* <div className="">
              <div className="dropdown">
                <button
                  className="btn  dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown button
                </button>
                <ul className="dropdown-menu dropdown-menu-dark">
                  <li>
                    <a className="dropdown-item active" href="#">
                      Delhi
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Noida
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Gurugram
                    </a>
                  </li>
                </ul>
              </div>
            </div> */}
                  <svg
                    className="bi bi-search text-muted "
                    width="20"
                    height="40"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      className="bi-search-icon"
                      fillRule="evenodd"
                      d="M19 19l-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                {/* Search Input */}
                <input
                  type="search"
                  id="default-search"
                  className="form-control  py-3 rounded-5"
                  placeholder="  Search For Locality, Landmark, Project, or Builders.."
                  required
                />
                {/* Search Button */}
                <button
                  type="submit"
                  className="btn btn-outline-primary position-absolute end-0 top-50 translate-middle-y me-3 rounded-5 "
                >
                  Search
                  {/* <i className="bi bi-binoculars"></i> */}
                </button>
              </div>
            </div>
          </div>
        </form>

        {/* Popular Localities Slider */}
        <div>
          <PopularLocalitiesSlider />
        </div>
        <div className="downPara  h-100 ">
          {/* <h1>ram</h1> */}
          <div className=" paraRounded d-flex px-2">
            <div className="starsWrapper">
              <img
                className="star1 "
                src="https://c.housingcdn.com/demand/s/client/common/assets/white_diamond_card_icon.74fc11b3.svg"
                alt="star1"
              />
            </div>
            <img
              className="star2 pt-3 "
              src="https://c.housingcdn.com/demand/s/client/common/assets/white_diamond_card_icon.74fc11b3.svg"
              alt="star2"
            />

            <p className="m-0 py-2 px-4 ">
              Are you a Property Owner?{" "}
              <NavLink className={"navlinks"} to={"/"}>
                Sell / Rent for FREE
              </NavLink>{" "}
            </p>
            <img
              className="star3 pt-2"
              src="https://c.housingcdn.com/demand/s/client/common/assets/white_diamond_card_icon.74fc11b3.svg"
              alt="star3"
            />
          </div>
        </div>
      </div>

      <section className="spotLight-section container my-3">
        <div className="spotLightTitle mb-4">
          <h2> <span className=" opacity-75 fs-3">In </span> Spotlight</h2>
          <p className="m-0">FInd Your Best Place To Live With Us.</p>
          <img src="https://masaischool.com/images/new-homepage/yellow-vector.svg" alt="line" />
        </div>
        <div className="spotlightSlider-Wrapper  h-100">
          <div className="slider-container m-auto  ">
            <Slider {...settings} className=" slider rounded-4">
              <div className=" sliderWrapper d-flex row ps-4">

                <div className="spotlightCard col-3 rounded-5 ">
                  <div className="">

                    <div className=" row row-top pt-5 ps-0 ">
                      <div className="col ">
                        <img className="rounded-4 " src="https://housing-images.n7net.in/0b8ad14c/730076b4a956aff45e9f7cc265ff74f8/v0/medium.png" alt="logo" />
                      </div>
                      <div className="col  text-center pt-2">
                        <h6 className="m-0">Ashiyana Villas</h6>
                        <NavLink>View Projects</NavLink>
                      </div>
                    </div>

                    <div className=" row flex-column py-4 px-0 row-bottom">
                      <div className="col py-2 d-flex">
                      <div>
                        <TbLocationCheck className="me-3 mt-3 fs-5"/>
                      </div>
                        <div><h5 className="m-0">Ashiyana Villas</h5>
                        <p>Noida Extension, Grater Noida</p></div>
                      </div>
                      <div className="col py-2 d-flex">
                         <div><LiaRupeeSignSolid className="fs-4 me-2"/></div>
                        <div><h5 className="m-0">1.39 Cr - 1.67 Cr</h5>
                        <p>4 BHK Vilas</p></div>
                      </div>
                      <div className="col py-4">
                        <button className="btn btn-outline-primary w-100 py-2">Contact</button>
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

              <div>
                <img
                  className=""
                  src={
                    "https://housing-images.n7net.in/4f2250e8/2316946f3e06d2e47ccc96deab6a2b9e/v0/fs/orchid_estate-noida_extension-greater+noida-rana_ji.jpeg"
                  }
                />
              </div>
              <div className=" h-20 overflow-hidden d-flex align-items-center">
                {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, dolor.</p> */}
                <img
                  className=""
                  src={
                    "https://housing-images.n7net.in/4f2250e8/9a2debd58638b508491d7169c8817b86/v0/fs/the_ultima_107-sector_107_noida-noida-the_ultima_group.jpeg"
                  }
                />
              </div>
              <div>
                <img
                  className=""
                  src={
                    "https://housing-images.n7net.in/4f2250e8/ef93096c7bb46181cd166ccc5237c750/v0/fs/dagar_ashiyana_prime-noida_extension-greater+noida-dagar_builders_%26_developers.jpeg"
                  }
                />
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;

// bg 1 -- https://c.housingcdn.com/demand/s/client/common/assets/buyCover.36ede2d6.jpg
// bg 2 -- https://c.housingcdn.com/demand/s/client/common/assets/HomeBg.d42b5d41.svg
