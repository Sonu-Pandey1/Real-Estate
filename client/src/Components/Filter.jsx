
import { useSearchParams } from "react-router-dom";
import "./Filter.scss";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function Filter({ city,type,locality }) {

  const [searchParams,setSearchParams] = useSearchParams();
  console.log(searchParams.get("city"))
  // console.log(city)
  // console.log(locality)
  // console.log(type)
  const [query,setQuery] = useState({
    type: searchParams.get("type") || "",
    city: searchParams.get("city") || "",
    property: searchParams.get("property") || "",
    minPrice: searchParams.get("minPrice") || 0,
    maxPrice: searchParams.get("maxPrice") || 100000000,
    bedroom: searchParams.get("bedroom") || 1,

  })

  const handleChange =e =>{
    setQuery({
      ...query,
      [e.target.name]:e.target.value
    })
  }

  const handleFilter = ()=>{
    setSearchParams(query);

  }

  return (
    <div className="filterContainer">
    <h1>{query.city}</h1>
      <div className="filterOptions">
        <div className="filterGroup">
          <label htmlFor="propertyType">Property Type</label>
          <select id="propertyType" name="property" onChange={handleChange} defaultValue={query.property}>
            <option value="">Any</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="villa">Villa</option>
          </select>
        </div>

        <div className="filterGroup">
          <label htmlFor="bhk">BHK Type</label>
          <select id="bhk" name="bhk">
            <option value="">Any</option>
            <option value="1">1 BHK</option>
            <option value="2">2 BHK</option>
            <option value="3">3 BHK</option>
          </select>
        </div>

        <div className="filterGroup">
          <label htmlFor="price">Price Range</label>
          <select id="price" name="price">
            <option value="">Any</option>
            <option value="0-50L">0 - 50L</option>
            <option value="50L-1Cr">50L - 1Cr</option>
            <option value="1Cr+">1Cr+</option>
          </select>
        </div>

        <div className="filterGroup">
          <label htmlFor="saleType">Sale Type</label>
          <select id="saleType" name="type" onChange={handleChange} defaultValue={query.type}>
            <option value="">Any</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
            <option value="pg">PG</option>
          </select>
        </div>

        <div className="filterGroup">
          <label htmlFor="possession">Possession Status</label>
          <select id="possession" name="possession">
            <option value="">Any</option>
            <option value="ready">Ready to Move</option>
            <option value="underConstruction">Under Construction</option>
          </select>
        </div>

        {/* <button type="button" className="filterSave">
          <FaRegSave className="icon" /> Save Search
        </button> */}
        <button type="button" className="filterSave mt-2" onClick={handleFilter}>
          <FaSearch className="icon" /> Search
        </button>
        {/* <button type="submit" className="Searchbutton ">
          <img
            className=" "
            src="https://cdn-icons-gif.flaticon.com/17489/17489774.gif"
            alt=""
          />
        </button> */}
      </div>
    </div>
  );
}
