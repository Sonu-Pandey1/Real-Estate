import "./HeroC.scss";
import PopularLocalitiesSlider from "../Components/PopularLocalitiesSlider";
import { NavLink, useLocation } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrOptimize } from "react-icons/gr";
import { useState } from "react";

export default function HeroC() {

  const [selectedCity, setSelectedCity] = useState("");
  const [localitySuggestions, setLocalitySuggestions] = useState([]);
  const [localities] = useState({
    Noida: ["Sector 84", "Sector 48", "Sector 34", "Sector 24"],
    Delhi: ["Connaught Place", "Chandni Chowk", "Saket", "Dwarka"],
    Gurgaon: ["Cyber City", "DLF Phase 3", "Sector 29", "Sector 45"],
  });

  const cities = Object.keys(localities);

  const handleCityChange = (event) => {
    const city = event.target.value;
    setSelectedCity(city);
    setLocalitySuggestions(localities[city] || []);
  };


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
          // dots: true,
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
      // background:
      //   "url('https://c.housingcdn.com/demand/s/client/common/assets/buyCover.36ede2d6.jpg')",
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
  const currentConfig = heroConfig[location.pathname] || heroConfig["/"];

  return (
    <div>
      <div
        className="hero-section "
        style={{
          backgroundImage: currentConfig.background,
        }}
      >
        {/* Background and Heading */}
        <div className="title mx-auto text-white w-100">
          <p className="px-2 px-sm-0  "><span className="">{currentConfig.title}</span></p>
        </div>

        <form className="px-4">
          <div className="formContainer mx-auto mx-5">
            {/* Tabs */}
            <div className="tabsWrapper  overflow-hidden ">
              <nav className=" d-flex ">
                <NavLink className="navlink" to={"/"}>
                  Buy
                </NavLink>
                <NavLink className="navlink" to={"/rent"}>
                  Rent
                </NavLink>
                <NavLink className="navlink" to={"/commercial"}>
                  Commercial
                </NavLink>
                <NavLink
                  className="navlink d-none d-sm-block"
                  to={"/pg-coliving"}
                >
                  Pg / Co-living
                </NavLink>
                <NavLink className="navlink d-sm-none" to={"/pg-coliving"}>
                  Pg
                </NavLink>
                <NavLink className="navlink" to={"/plots"}>
                  Plots
                </NavLink>
              </nav>
            </div>
            {/* {/* search bar */}
           
            <form className="property-search-form mx-auto ">
  <div className="form-container d-flex justify-content-center align-items-center rounded-pill shadow-lg p-0 p-sm-2">
    {/* City Dropdown */}
    <div className="form-group city-dropdown   ">
      <select
        className="form-select rounded-start-pill p-0 px-3"
        onChange={handleCityChange}
        defaultValue=""
      >
        <option value="" disabled>
          Mumbai
        </option>
        {cities.map((city, index) => (
          <option value={city} key={index}>
            {city}
          </option>
        ))}
      </select>
    </div>

    {/* Locality Autocomplete */}
    <div className="form-group locality-search flex-grow-1 w-100  ">
      <input
        type="text"
        className="form-control rounded-0 "
        placeholder="Search for locality, landmark, project, or builder"
        list="localitySuggestions"
      />
      <datalist id="localitySuggestions">
        {localitySuggestions.map((locality, index) => (
          <option value={locality} key={index} />
        ))}
      </datalist>
    </div>

    {/* Search Button */}
    <div className="form-group search-button  ">
      <button type="submit" className="btn  w-100 rounded-pill p-0  ">
        <p className="m-0 d-none d-sm-block">Search</p>
        <img className=" h-100 w-auto rounded-5 d-block d-sm-none" src="https://cdn-icons-gif.flaticon.com/17489/17489774.gif" alt="search" />
      </button>
    </div>
  </div>
</form>

          </div>
        </form>

        <div className=" pps row align-items-center  justify-content-center text-center mx-auto ">
          {/* Left section with icon and title */}
          <div className="col-12 text-center col-md-4 col-lg-2 mt-2 mt-md-4 ">
            <GrOptimize className="localIcon fs-6" />
            <p className="p-2 pe-4 badge sliderTitle ">Popular Localities</p>
          </div>

          {/* Right section with slider */}
          <div className="col-12 col-md-7 col-lg-6 pe-4 text-center">
            <div className="PopularLocalitiesSliderWrapper mx-5">
              <PopularLocalitiesSlider settings={settings}>
                {popularLocalities.map((locality, index) => (
                  <div key={index} className="text-center w-75">
                    <p className="m-0 rounded-2 py-1">{locality} &gt;</p>
                  </div>
                ))}
              </PopularLocalitiesSlider>
            </div>
          </div>
        </div>

        <div className="downPara  h-100">
          {/* <h1>ram</h1> */}
          <div className=" paraRounded d-flex px-2 ">
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

            <p className="m-0 py-2 px-3  ">
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
