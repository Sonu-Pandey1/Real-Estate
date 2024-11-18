import "./Home.scss"; // Add custom styles here
import PopularLocalitiesSlider from "../Components/PopularLocalitiesSlider";
import { NavLink } from "react-router-dom";
// import {NavLink} from "react-router-dom"

function Home() {
  return (
    <div className="hero-section ">
      {/* Background and Heading */}
      <div className="title mx-auto  text-white ">
        <h1 className="">Properties to buy in Gurgaon</h1>
      </div>

      {/* Tabs and Search Bar */}

      <form className="mx-auto" style={{ maxWidth: "800px" }}>
        <div className="mb-3 position-relative">
          {/* Search Icon */}
          <div className="position-absolute top-50 start-0 translate-middle-y ps-3 d-flex">
            <div className="w-100 bg-info">
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
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Separated link
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <svg
              className="bi bi-search text-muted "
              width="16"
              height="16"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
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
            className="form-control  py-2"
            placeholder="Search Mockups, Logos..."
            required
          />
          {/* Search Button */}
          <button
            type="submit"
            className="btn btn-primary position-absolute end-0 top-50 translate-middle-y me-2 "
          >
            Search
          </button>
        </div>
      </form>

      {/* Popular Localities Slider */}
      <PopularLocalitiesSlider />
      <div className="downPara ">
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

          <p className="m-0 py-2 px-4">
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
  );
}

export default Home;

// bg 1 -- https://c.housingcdn.com/demand/s/client/common/assets/buyCover.36ede2d6.jpg
// bg 2 -- https://c.housingcdn.com/demand/s/client/common/assets/HomeBg.d42b5d41.svg
