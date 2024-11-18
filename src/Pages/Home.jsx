import "./Home.scss"; // Add custom styles here
import PopularLocalitiesSlider from "../Components/PopularLocalitiesSlider";
import { NavLink } from "react-router-dom";
// import {NavLink} from "react-router-dom"

function Home() {
  return (
    <div className="hero-section">
      {/* Background and Heading */}
      <div className="hero-bg text-center text-white py-5 ">
        <h1 className="fw-bold">Properties to buy in Gurgaon</h1>
      </div>

      {/* Tabs and Search Bar */}
      <div className="search-bar-container text-white py-3">
        <div className="container">
          {/* Tabs */}
          <div className="tabs-container d-flex justify-content-center gap-3 mb-4">
            <button className="tab-button active">Buy</button>
            <button className="tab-button">Rent</button>
            <button className="tab-button">Commercial</button>
            <button className="tab-button">PG/Co-Living</button>
            <button className="tab-button">Plots</button>
          </div>

          {/* Search Bar */}
          <div
            className="input-group mx-auto search-bar"
            style={{ maxWidth: "800px" }}
          >
            <input
              type="text"
              className="form-control search-input"
              placeholder="Search for locality, landmark, project, or builder"
            />
            <button className="btn btn-success search-button">Search</button>
          </div>
        </div>
      </div>

      {/* Popular Localities Slider */}
      <PopularLocalitiesSlider />
    <div className="downPara ">
  
      <p>Are you a Property Owner? <NavLink to={"/"} >Sell / Rent for FREE</NavLink> </p>
      
    </div>
    </div>
  );
}

export default Home;

// bg 1 -- https://c.housingcdn.com/demand/s/client/common/assets/buyCover.36ede2d6.jpg
// bg 2 -- https://c.housingcdn.com/demand/s/client/common/assets/HomeBg.d42b5d41.svg
