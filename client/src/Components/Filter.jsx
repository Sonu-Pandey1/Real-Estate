
// import { useSearchParams } from "react-router-dom";
// import { useState } from "react";
// import { FaSearch } from "react-icons/fa";
// import "./Filter.scss";

// export default function Filter() {
//   const [searchParams, setSearchParams] = useSearchParams();

//   const initialQuery = {
//     searchTerm: searchParams.get("searchTerm") || "",
//     condition: searchParams.get("condition") || "",
//     type: searchParams.get("type") || "",
//     city: searchParams.get("city") || "",
//     propertyType: searchParams.get("propertyType") || "",
//     minPrice: searchParams.get("minPrice") || "",
//     maxPrice: searchParams.get("maxPrice") || "",
//     sort: searchParams.get("sort") || "newest",
//   };

//   const [query, setQuery] = useState(initialQuery);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setQuery({ ...query, [name]: value });
//   };

//   const handleFilter = () => {
//     const updatedParams = Object.fromEntries(
//       Object.entries(query).filter(([_, value]) => value !== "")
//     );

//     setSearchParams(updatedParams);
//   };

//   return (
//     <div className="filterContainer">
//       <div className="filterOptions">

//         {/* 🔹 SORTING */}
//         <div className="filterGroup">
//           <label htmlFor="sort">Sort By</label>
//           <select id="sort" name="sort" onChange={handleChange} value={query.sort}>
//             <option value="newest">Newest</option>
//             <option value="oldest">Oldest</option>
//             <option value="popular">Popular</option>
//             <option value="trending">Trending</option>
//           </select>
//         </div>

//         {/* 🔹 CITY FILTER */}
//         <div className="filterGroup">
//           <label htmlFor="city">City</label>
//           <select id="city" name="city" onChange={handleChange} value={query.city}>
//             <option value="">Any</option>
//             <option value="noida">Noida</option>
//             <option value="delhi">Delhi</option>
//             <option value="gurgaon">Gurgaon</option>
//           </select>
//         </div>

//         {/* 🔹 PROPERTY TYPE */}
//         <div className="filterGroup">
//           <label htmlFor="propertyType">Property Type</label>
//           <select id="propertyType" name="propertyType" onChange={handleChange} value={query.propertyType}>
//             <option value="">Any</option>
//             <option value="apartment">Apartment</option>
//             <option value="house">House</option>
//             <option value="villa">Villa</option>
//           </select>
//         </div>

//         {/* 🔹 CONDITION */}
//         <div className="filterGroup">
//           <label htmlFor="condition">Condition</label>
//           <select id="condition" name="condition" onChange={handleChange} value={query.condition}>
//             <option value="">Any</option>
//             <option value="row">Row</option>
//             <option value="semi-furnished">Semi-Furnished</option>
//             <option value="furnished">Furnished</option>
//           </select>
//         </div>

//         {/* 🔹 PRICE RANGE */}
//         <div className="filterGroupp">
//           <label htmlFor="price" className="fgp">Price Range</label>
//           <div className="filterGrouppWrapper">
//             <input type="number" placeholder="Min" name="minPrice" value={query.minPrice} onChange={handleChange} className="priceInput" />
//             <input type="number" placeholder="Max" name="maxPrice" value={query.maxPrice} onChange={handleChange} className="priceInput" />
//           </div>
//         </div>

//         {/* 🔹 LISTING TYPE */}
//         <div className="filterGroup">
//           <label htmlFor="type">Type</label>
//           <select id="type" name="type" onChange={handleChange} value={query.type}>
//             <option value="">Any</option>
//             <option value="sell">Sell</option>
//             <option value="rent">Rent</option>
//             <option value="pg">PG</option>
//             <option value="commercial">Commercial</option>
//             <option value="plots">Plots</option>
//           </select>
//         </div>

//         {/* 🔹 SEARCH BUTTON */}
//         <button type="button" className="filterSave" onClick={handleFilter}>
//           <FaSearch className="icon" /> Search
//         </button>
//       </div>
//     </div>
//   );
// }

import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./Filter.scss";

export default function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();

  const initialQuery = {
    searchTerm: searchParams.get("searchTerm") || "",
    condition: searchParams.get("condition") || "",
    listingType: searchParams.get("listingType") || "", // Updated field name
    city: searchParams.get("city") || "",
    propertyType: searchParams.get("propertyType") || "",
    minPrice: searchParams.get("minPrice") || "",
    maxPrice: searchParams.get("maxPrice") || "",
    sort: searchParams.get("sort") || "newest",
  };

  const [query, setQuery] = useState(initialQuery);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuery({ ...query, [name]: value });
  };

  const handleFilter = () => {
    const updatedParams = Object.fromEntries(
      Object.entries(query).filter(([_, value]) => value !== "")
    );
    setSearchParams(updatedParams);
  };

  return (
    <div className="filterContainer">
      <div className="filterOptions">
        
        {/* 🔹 SORTING */}
        <div className="filterGroup">
          <label htmlFor="sort">Sort By</label>
          <select id="sort" name="sort" onChange={handleChange} value={query.sort}>
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="popular">Popular</option>
            <option value="trending">Trending</option>
          </select>
        </div>

        {/* 🔹 CITY FILTER */}
        <div className="filterGroup">
          <label htmlFor="city">City</label>
          <select id="city" name="city" onChange={handleChange} value={query.city}>
            <option value="">Any</option>
            <option value="noida">Noida</option>
            <option value="delhi">Delhi</option>
            <option value="gurugram">Gurugram</option>
            <option value="bangalore">Bangalore</option>
            <option value="mumbai">Mumbai</option>
          </select>
        </div>

        {/* 🔹 PROPERTY TYPE */}
        <div className="filterGroup">
          <label htmlFor="propertyType">Property Type</label>
          <select id="propertyType" name="propertyType" onChange={handleChange} value={query.propertyType}>
            <option value="">Any</option>
            <option value="apartment">Apartment</option>
            <option value="villa">Villa</option>
            <option value="independent">Independent House</option>
            <option value="builder_floor">Builder Floor</option>
            <option value="penthouse">Penthouse</option>
            <option value="bungalow">Bungalow</option>
            <option value="studio_apartment">Studio Apartment</option>
            <option value="row_house">Row House</option>
            <option value="office">Office Space</option>
            <option value="shop">Shop</option>
            <option value="warehouse">Warehouse</option>
            <option value="commercial_building">Commercial Building</option>
            <option value="showroom">Showroom</option>
            <option value="pg">Paying Guest (PG)</option>
            <option value="hostel">Hostel</option>
            <option value="industrial_shed">Industrial Shed</option>
            <option value="factory">Factory</option>
            <option value="manufacturing_unit">Manufacturing Unit</option>
            <option value="farmhouse">Farmhouse</option>
            <option value="agricultural_land">Agricultural Land</option>
            <option value="residential_plot">Residential Plot</option>
            <option value="commercial_plot">Commercial Plot</option>
          </select>
        </div>

        {/* 🔹 CONDITION */}
        <div className="filterGroup">
          <label htmlFor="condition">Condition</label>
          <select id="condition" name="condition" onChange={handleChange} value={query.condition}>
            <option value="">Any</option>
            <option value="new">New</option>
            <option value="semi-furnished">Semi-Furnished</option>
            <option value="furnished">Furnished</option>
          </select>
        </div>

        {/* 🔹 PRICE RANGE */}
        <div className="filterGroup">
          <label htmlFor="price" className="fgp">Price Range</label>
          <div className="filterGroupWrapper">
            <input type="number" placeholder="Min" name="minPrice" value={query.minPrice} onChange={handleChange} className="priceInput" />
            <input type="number" placeholder="Max" name="maxPrice" value={query.maxPrice} onChange={handleChange} className="priceInput" />
          </div>
        </div>

        {/* 🔹 LISTING TYPE (Buy, Rent, PG, etc.) */}
        <div className="filterGroup">
          <label htmlFor="listingType">Listing Type</label>
          <select id="listingType" name="listingType" onChange={handleChange} value={query.listingType}>
            <option value="">Any</option>
            <option value="sell">Buy/Sell</option>
            <option value="rent">Rent</option>
            <option value="pg">PG/Co-living</option>
            <option value="plots">Plots & Land</option>
            <option value="commercial">Commercial</option>
            <option value="industrial">Industrial</option>
          </select>
        </div>

        {/* 🔹 SEARCH BUTTON */}
        <button type="button" className="filterSave" onClick={handleFilter}>
          <FaSearch className="icon" /> Search
        </button>

      </div>
    </div>
  );
}
