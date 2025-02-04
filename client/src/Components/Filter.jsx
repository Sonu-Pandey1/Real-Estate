// import { useSearchParams } from "react-router-dom";
// import "./Filter.scss";
// import { useState } from "react";
// import { FaSearch } from "react-icons/fa";

// export default function Filter({ city,type,locality }) {

//   const [searchParams,setSearchParams] = useSearchParams();
//   console.log(searchParams)
//   // console.log(locality)
//   // console.log(city)
//   // console.log(locality)
//   // console.log(type)
//   const [query,setQuery] = useState({
//     serchTerm:"ram",
//     type: searchParams.get("type") || "",
//     parking:false,
//     furnished:false,
//     offer:false,
//     city: searchParams.get("city") || "",
//     property: searchParams.get("property") || "",
//     minPrice: searchParams.get("minPrice") || "",
//     maxPrice: searchParams.get("maxPrice") || "",
//     bedroom: searchParams.get("bedroom") || "",

//   })

//   const handleChange =e =>{
//     setQuery({
//       ...query,
//       [e.target.name]:e.target.value
//     })
//   }

//   const handleFilter = ()=>{
//     setSearchParams(query);

//   }

//   return (
//     <div className="filterContainer">
//       <div className="filterOptions">

//       <div className="filterGroup">
//           <label htmlFor="propertyType">City</label>
//           <select id="propertyType" name="property" onChange={handleChange} defaultValue={query.property}>
//             <option value="">Any</option>
//             <option value="apartment">noida</option>
//             <option value="house">delhi</option>
//             <option value="villa">gurgaon</option>
//           </select>
//         </div>

//         <div className="filterGroup">
//           <label htmlFor="propertyType">Property Type</label>
//           <select id="propertyType" name="property" onChange={handleChange} defaultValue={query.property}>
//             <option value="">Any</option>
//             <option value="apartment">Apartment</option>
//             <option value="house">House</option>
//             <option value="villa">Villa</option>
//           </select>
//         </div>

//         <div className="filterGroup">
//           <label htmlFor="bhk">BHK Type</label>
//           <select id="bhk" name="bhk">
//             <option value="">Any</option>
//             <option value="1">1 BHK</option>
//             <option value="2">2 BHK</option>
//             <option value="3">3 BHK</option>
//           </select>
//         </div>

//         <div className="filterGroup">
//           <label htmlFor="price">Price Range</label>
//           <select id="price" name="price">
//             <option value="">Any</option>
//             <option value="0-50L">0 - 50L</option>
//             <option value="50L-1Cr">50L - 1Cr</option>
//             <option value="1Cr+">1Cr+</option>
//           </select>
//         </div>

//         <div className="filterGroup">
//           <label htmlFor="saleType">Type</label>
//           <select id="saleType" name="type" onChange={handleChange} defaultValue={query.type}>
//             <option value="">Any</option>
//             <option value="buy">Buy</option>
//             <option value="rent">Rent</option>
//             <option value="pg">PG</option>
//           </select>
//         </div>

//         <div className="filterGroup">
//           <label htmlFor="possession">Possession Status</label>
//           <select id="possession" name="possession">
//             <option value="">Any</option>
//             <option value="ready">Ready to Move</option>
//             <option value="underConstruction">Under Construction</option>
//           </select>
//         </div>

//         {/* <button type="button" className="filterSave">
//           <FaRegSave className="icon" /> Save Search
//         </button> */}
//         <button type="button" className="filterSave mt-2" onClick={handleFilter}>
//           <FaSearch className="icon" /> Search
//         </button>
//         {/* <button type="submit" className="Searchbutton ">
//           <img
//             className=" "
//             src="https://cdn-icons-gif.flaticon.com/17489/17489774.gif"
//             alt=""
//           />
//         </button> */}
//       </div>
//     </div>
//   );
// }

import { useSearchParams } from "react-router-dom";
import "./Filter.scss";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);

  const initialQuery = {
    searchTerm: searchParams.get("searchTerm") || "",
    condition: searchParams.get("condition") || "",
    parking: searchParams.get("parking") === "true",
    offer: searchParams.get("offer") === "true",

    // bedroom: searchParams.get("bedroom") || "",
    // bathroom: searchParams.get("bathroom") || "",

    type: searchParams.get("type") || "",
    city: searchParams.get("city") || "",
    property: searchParams.get("property") || "",
    minPrice: searchParams.get("minPrice") || "",
    maxPrice: searchParams.get("maxPrice") || "",
    sort: searchParams.get("sort") || "newest", // Default to 'newest'
  };

  const [query, setQuery] = useState(initialQuery);
  console.log(query);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setQuery({
      ...query,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleFilter = () => {
    const updatedParams = Object.entries(query).reduce((acc, [key, value]) => {
      if (value !== "" && value !== false) acc[key] = value; // Only include non-empty values
      return acc;
    }, {});
    setSearchParams(updatedParams);
  };

  return (
    <div className="filterContainer ">
      <div className="filterOptions">

        {/* <div className="filterGroup">
          <label>
            <input
              type="checkbox"
              name="newest"
              checked={query.newest}
              onChange={handleChange}
            />
            Newest
          </label>
        </div>
        <div className="filterGroup">
          <label>
            <input
              type="checkbox"
              name="oldest"
              checked={query.oldest}
              onChange={handleChange}
            />
            Oldest
          </label>
        </div>
        <div className="filterGroup">
          <label>
            <input
              type="checkbox"
              name="popular"
              checked={query.popular}
              onChange={handleChange}
            />
            Popular
          </label>
        </div>
        <div className="filterGroup">
          <label>
            <input
              type="checkbox"
              name="trending"
              checked={query.trending}
              onChange={handleChange}
            />
            Trending
          </label>
        </div> */}
        <div className="filterGroup">
          <label htmlFor="sort">Sort By</label>
          <select
            id="sort"
            name="sort"
            onChange={handleChange}
            value={query.sort}
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="popular">Popular</option>
            <option value="trending">Trending</option>
          </select>
        </div>


        <div className="filterGroup">
          <label htmlFor="city">City</label>
          <select
            id="city"
            name="city"
            onChange={handleChange}
            value={query.city}
          >
            <option value="">Any</option>
            <option value="noida">Noida</option>
            <option value="delhi">Delhi</option>
            <option value="gurgaon">Gurgaon</option>
          </select>
        </div>

        <div className="filterGroup">
          <label htmlFor="property">Property Type</label>
          <select
            id="property"
            name="property"
            onChange={handleChange}
            value={query.property}
          >
            <option value="">Any</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="villa">Villa</option>
          </select>
        </div>

        {/* <div className="filterGroup">
          <label htmlFor="bedroom">Bedrooms</label>
          <select
            id="bedroom"
            name="bedroom"
            onChange={handleChange}
            value={query.bedroom}
          >
            <option value="">Any</option>
            <option value="1">1 BHK</option>
            <option value="2">2 BHK</option>
            <option value="3">3 BHK</option>
          </select>
        </div> */}

        <div className="filterGroup">
          <label htmlFor="bathroom">Condition</label>
          <select
            id="condition"
            name="condition"
            onChange={handleChange}
            value={query.condition}
          >
            <option value="">Any</option>
            <option value="row">row</option>
            <option value="semi-furnished">semi-furnished</option>
            <option value="furnished">furnished</option>
          </select>
        </div>

        <div className="filterGroupp">
          <label htmlFor="price" className="fgp">
            Price Range
          </label>
          <div className="filterGrouppWrapper">
            <input
              type="number"
              placeholder="Min"
              name="minPrice"
              value={query.minPrice}
              onChange={handleChange}
              className="priceInput"
            />
            <input
              type="number"
              placeholder="Max"
              name="maxPrice"
              value={query.maxPrice}
              onChange={handleChange}
              className="priceInput"
            />
          </div>
        </div>

        <div className="filterGroup">
          <label htmlFor="type">Type</label>
          <select
            id="type"
            name="type"
            onChange={handleChange}
            value={query.type}
          >
            <option value="">Any</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
            <option value="pg">PG</option>
          </select>
        </div>

        {/* <div className="filterGroup">
          <label>
            <input
              type="checkbox"
              name="parking"
              checked={query.parking}
              onChange={handleChange}
            />
            Parking
          </label>
        </div>

        <div className="filterGroup">
          <label>
            <input
              type="checkbox"
              name="offer"
              checked={query.offer}
              onChange={handleChange}
            />
            Offer
          </label>
        </div> */}

        <button type="button" className="filterSave" onClick={handleFilter}>
          <FaSearch className="icon" /> Search
        </button>
      </div>
    </div>
  );
}
