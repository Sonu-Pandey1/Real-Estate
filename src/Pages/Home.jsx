import "./Home.scss"
import PopularLocalitiesSlider from "../Components/PopularLocalitiesSlider";
import { NavLink } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Spotlight from "../Components/Spotlight";


function Home() {
  

  return (
    <>
      {/* Hero Section */}
      <div className="hero-section ">
        {/* Background and Heading */}
        <div className="title mx-auto  text-white ">
          <p className="">Properties to buy in Gurgaon</p>
          {/* <img src="data:image/png;base64,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" alt="icon" /> */}
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
      {/* Spotlight Section */}
      <section>
        <Spotlight/>
      </section>

      
    </>
  );
}

export default Home;
