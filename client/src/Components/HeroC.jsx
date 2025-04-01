
import "./HeroC.scss";
// import PopularLocalitiesSlider from "../Components/PopularLocalitiesSlider";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { GrOptimize } from "react-icons/gr";
import { useState } from "react";

export default function HeroC() {
  const [propertyType, setPropertyType] = useState("buy");
  const [selectedCity, setSelectedCity] = useState("noida");
  const [localitySuggestions, setLocalitySuggestions] = useState([
    "Sector 84",
    "Sector 48",
    "Sector 34",
    "Sector 24",
    "sector 62",
  ]);
  const [selectedLocality, setSelectedLocality] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(localitySuggestions);
  const localities = {
    noida: ["Sector 84", "Sector 48", "Sector 34", "Sector 24"],
    delhi: ["CP", "Chandni C", "Saket", "Dwarka"],
    gurgaon: ["Cyber City", "DLF Phase 3", "Sector 29", "Sector 45"],
  };

  const cities = Object.keys(localities);

  const handleCityChange = (event) => {
    const city = event.target.value;
    setSelectedCity(city);
    setLocalitySuggestions(localities[city] || []);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams({
      city: selectedCity,
      type: propertyType,
      searchTerm: selectedLocality,

      // todo add min and max and fix loding loder it only show on listing loading component not whole page . mins this only indicate list is load not page
    }).toString();

    navigate(`/search?${params}`);
  };

  const getHeroConfig = (city) => ({
    "/": {
      background:
        "url('https://c.housingcdn.com/demand/s/client/common/assets/buyCover.36ede2d6.jpg')",
      title: `Properties to buy in ${city}`,
      placeholder: "Search for locality, project, or builder",
    },
    "/rent": {
      background:
        "url('https://c.housingcdn.com/demand/s/client/common/assets/rentCover.c47ae7d7.jpg')",
      title: `Properties for rent in ${city}`,
      placeholder: "Search for city, budget, or size",
    },
    "/pg-coliving": {
      background:
        "url('https://c.housingcdn.com/demand/s/client/common/assets/pgCover.d07e5816.jpg')",
      title: `PG/Co-Living in ${city}`,
      placeholder: "Search for PG or co-living spaces",
    },
    "/commercial": {
      background:
        "url('https://c.housingcdn.com/demand/s/client/common/assets/commercialCover.c5df3aef.jpg')",
      title: `Commercial Real Estate in ${city}`,
      placeholder: "Search for offices or retail spaces",
    },
    "/plots": {
      background:
        "url('https://c.housingcdn.com/demand/s/client/common/assets/plotsCover.effff013.jpg')",
      title: `Plots for sale in ${city}`,
      placeholder: "Search for plots, spaces",
    },
  });

  const city = selectedCity;
  const heroConfig = getHeroConfig(city);

  const currentConfig = heroConfig[location.pathname] || heroConfig["/"];

  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 600,
  //   autoplay: true,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   initialSlide: 0,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: { slidesToShow: 4 },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: { slidesToShow: 3 },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: { slidesToShow: 1 },
  //     },
  //   ],
  // };

  return (
    <div>
      <div
        className="hero-section"
        style={{
          backgroundImage: currentConfig.background,
        }}
      >
        <div className="title mx-auto text-white w-100">
          <p className="px-2 px-sm-0">
            <span>{currentConfig.title}</span>
          </p>
        </div>

        {/* Search Form */}
        <form onSubmit={handleSearch} className="px-4">
          <div className="formContainer mx-auto mx-5">
            <div className="tabsWrapper overflow-hidden">
              <nav className="d-flex nav">
                <NavLink
                  onClick={() => setPropertyType("buy")}
                  className={`navlink ${propertyType === "buy" ? "active" : ""
                    }`}
                  to="/"
                >
                  Buy
                </NavLink>
                <NavLink
                  onClick={() => setPropertyType("rent")}
                  className={`navlink ${propertyType === "rent" ? "active" : ""
                    }`}
                  to="/rent"
                >
                  Rent
                </NavLink>
                <NavLink
                  onClick={() => setPropertyType("commercial")}
                  className={`navlink ${propertyType === "commercial" ? "active" : ""
                    }`}
                  to="/commercial"
                >
                  Commercial
                </NavLink>
                <NavLink
                  onClick={() => setPropertyType("pg")}
                  className={`navlink d-none d-sm-block ${propertyType === "pg" ? "active" : ""
                    }`}
                  to="/pg-coliving"
                >
                  Pg / Co-living
                </NavLink>
                <NavLink
                  onClick={() => setPropertyType("pg")}
                  className={`navlink d-sm-none ${propertyType === "pg" ? "active" : ""
                    }`}
                  to="/pg-coliving"
                >
                  Pg
                </NavLink>
                <NavLink
                  onClick={() => setPropertyType("plots")}
                  className={`navlink ${propertyType === "plots" ? "active" : ""
                    }`}
                  to="/plots"
                >
                  Plots
                </NavLink>
              </nav>
            </div>

            <div className="property-search-form mx-auto">
              <div className="form-container d-flex justify-content-center align-items-center rounded-pill shadow-lg p-0 p-sm-2">
                <div className="form-group city-dropdown">
                  <select
                    className="form-select rounded-start-pill p-0 px-3"
                    value={selectedCity}
                    onChange={handleCityChange}
                  >
                    {cities.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group locality-search flex-grow-1 w-100">
                  <input
                    type="text"
                    className="form-control rounded-0"
                    placeholder="Search for locality, landmark, project, or builder"
                    list="localitySuggestions"
                    value={selectedLocality}
                    onChange={(e) => setSelectedLocality(e.target.value)}
                  />
                  <datalist id="localitySuggestions">
                    {localitySuggestions.map((locality) => (
                      <option key={locality} value={locality} />
                    ))}
                  </datalist>
                </div>
                <div className="form-group search-button">
                  <button type="submit" className="btn w-100 rounded-pill p-0">
                    <p className="m-0 d-none d-sm-block">Search</p>
                    <img
                      className="h-100 w-auto rounded-5 d-block d-sm-none"
                      src="https://cdn-icons-gif.flaticon.com/17489/17489774.gif"
                      alt="search"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>

        {/* Popular Localities */}
        {/* <div className="pps row align-items-center justify-content-center text-center mx-auto">
          <div className="col-12 text-center col-md-4 col-lg-2 mt-2 mt-md-4">
            <GrOptimize className="localIcon fs-6" />
            <p className="p-2 pe-4 badge sliderTitle">Popular Localities</p>
          </div>
          <div className="col-12 col-md-7 col-lg-6 pe-4 text-center">
            <div className="PopularLocalitiesSliderWrapper mx-5">
              <PopularLocalitiesSlider settings={settings} city={selectedCity}>
                {localitySuggestions.map((locality, index) => (
                  <div key={index} className="text-center w-75">
                    <p className="m-0 rounded-2 py-1 ">{locality} &gt;</p>
                  </div>
                ))}
              </PopularLocalitiesSlider>
            </div>
          </div>
        </div> */}

        {/*bottom Para */}

        <div className="downPara  h-100">
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
