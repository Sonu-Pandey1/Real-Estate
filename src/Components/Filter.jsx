import "./Filter.scss";

export default function Filter({city,type,locality}) {
  return (
    <div className="filterContainer ">
      <div className="d-flex justify-content-between">
        <h1>
          Search Result For <b>Noida</b>
        </h1>
        <p>Last Updated: Nov 23, 2024</p>
      </div>
      <div className="  ">
      <div className="top">
        <div className="item">
          <label htmlFor="city">Location</label>
          <input
            type="text"
            id="city"
            name="city"
            // value={city}
            placeholder="City Location"
          />
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <label htmlFor="type">Type</label>
          <select name="type" id="type" 
          // value={type}
          >
            <option value="">Any</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
            <option value="pg">Pg</option>
            <option value="commericial">Commericial</option>
          </select>
        </div>

        <div className="item">
          <label htmlFor="property">Property</label>
          <select name="property" id="property">
            <option value="">Any</option>
            <option value="buy">Apartment</option>
            <option value="buy">House</option>
            <option value="buy">villa</option>
            <option value="buy">flat</option>
          </select>
        </div>

        <div className="item">
          <label htmlFor="minPrice">Min Price</label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            placeholder="any"
          />
        </div>
        <div className="item">
          <label htmlFor="maxPrice">Max Price</label>
          <input
            type="number"
            id="maxPrice"
            name="MaxPrice"
            placeholder="any"
          />
        </div>
        <div className="item">
          <label htmlFor="badroom">Badroom</label>
          <input type="number" id="badroom" name="badroom" placeholder="any" />
        </div>

        <button type="submit" className="">
          <img
            className=""
            src="https://cdn-icons-gif.flaticon.com/17489/17489774.gif"
            alt=""
          />
        </button>
      </div>
      </div>

      {/* <div className="filterWrapper d-flex justify-content-center ">
        <div className="inputWrapper bg-danger">
          <p className="m-0">Type</p>
          <input type="text" />
        </div>
        <div className="inputWrapper bg-info">
          <p className="m-0">Type</p>
          <input type="text" />
        </div>
        <div className="inputWrapper bg-success">
          <p className="m-0">Type</p>
          <input type="text" />
        </div>
        <div className="inputWrapper bg-dark">
          <p className="m-0">Type</p>
          <input type="text" className="" />
        </div>
        <button type="submit" className="btn btn-outline-success">
          Search
        </button>
      </div> */}
    </div>
  );
}
