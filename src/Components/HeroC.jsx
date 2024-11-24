import "./HeroC.scss";
import PopularLocalitiesSlider from "../Components/PopularLocalitiesSlider";
import { NavLink, useLocation } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrOptimize } from "react-icons/gr";

export default function HeroC() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 600,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const popularLocalities = [
    "Sector 84",
    "Sector 48",
    "Sector 34",
    "Sector 24",
    "Sector 29",
    "Sector 18",
    "Sector 14",
    "Sector 2",
  ];

  const location = useLocation();
  // console.log(location.pathname);

  const heroConfig = {
    "/": {
      background:
        "url('https://c.housingcdn.com/demand/s/client/common/assets/buyCover.36ede2d6.jpg')",
      title: "Properties to buy in Noida",
      placeholder: "Search for locality, project, or builder",
    },
    "/rent": {
      background:
        // "url('https://c.housingcdn.com/demand/s/client/common/assets/HomeBg.d42b5d41.svg')",
        "url('https://c.housingcdn.com/demand/s/client/common/assets/rentCover.c47ae7d7.jpg')",
      title: "Properties for rent in Noida",
      placeholder: "Search for city, budget, or size",
    },
    "/pg-coliving": {
      background:
        "url('https://c.housingcdn.com/demand/s/client/common/assets/pgCover.d07e5816.jpg')",
      title: "PG/Co-Living in Noida",
      placeholder: "search for pg,co-leaving spaces",
    },
    "/commercial": {
      background:
        "url('https://c.housingcdn.com/demand/s/client/common/assets/commercialCover.c5df3aef.jpg')",
      title: "Commercial Real Estate in Noida ",
      placeholder: "Search for offices or retail spaces",
    },
    "/plots": {
      background:
        "url('https://c.housingcdn.com/demand/s/client/common/assets/plotsCover.effff013.jpg')",
      title: "Plots for sale in Noida",
      placeholder: "Search for plots, spaces",
    },
  };
  // https://c.housingcdn.com/demand/s/client/common/assets/plotsCover.effff013.jpg

  // Match current path or fallback to "/"
  const currentConfig = heroConfig[location.pathname] || heroConfig["/"];

  return (
    <div>
      <div
        className="hero-section  "
        style={{
          backgroundImage: currentConfig.background,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Background and Heading */}
        <div className="title mx-auto  text-white ">
          <p className="">{currentConfig.title}</p>
        </div>

        <form>
          <div className="formContainer mx-auto">
            {/* Tabs */}
            <div className="tabsWrapper">
              <nav className=" d-flex">
                <NavLink className="navlink" to={"/"}>
                  Buy
                </NavLink>
                <NavLink className="navlink" to={"/rent"}>
                  Rent
                </NavLink>
                <NavLink className="navlink" to={"/commercial"}>
                  Commercial
                </NavLink>
                <NavLink className="navlink" to={"/pg-coliving"}>
                  Pg / Co-living
                </NavLink>
                <NavLink className="navlink" to={"/plots"}>
                  Plots
                </NavLink>
              </nav>
            </div>
            {/* {/* search bar */}
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
                  placeholder={currentConfig.placeholder}
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
        <div className="row align-items-center ">
          <div className="col-4   mt-3 text-end">
            <GrOptimize className="localIcon fs-6" />
            <p className="p-2 pe-4 badge sliderTitle">Popular Localities</p>
          </div>
          <div className="col-7 w-50 pe-4">
            <div className=" PopularLocalitiesSliderWrapper mx-5">
              <PopularLocalitiesSlider settings={settings} className="">
                {popularLocalities.map((locality, index) => (
                  <div key={index} className="text-center w-75">
                    <p className="m-0 rounded-2 py-1">{locality} &gt;</p>
                  </div>
                ))}
              </PopularLocalitiesSlider>
            </div>
          </div>
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

            <p className="m-0 py-2 px-3 ">
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
    </div>
  );
}
