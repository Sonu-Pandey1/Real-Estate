// import "./SearchPage.scss";
// import { useLocation, useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";

// export default function SearchPage() {
//   const location = useLocation();
//   const navigate = useNavigate();

//   // Extract query parameters
//   const queryParams = new URLSearchParams(location.search);
//   const type = queryParams.get("type") || "buy";
//   const city = queryParams.get("city") || "All Cities";
//   const locality = queryParams.get("locality") || "";

//   // State for filters and listings
//   const [filters, setFilters] = useState({
//     budget: "",
//     bedrooms: "",
//     propertyType: type,
//     city: city,
//     locality: locality,
//   });
//   const [listings, setListings] = useState([]);
//   const [filteredResults, setFilteredResults] = useState([]);

//   // Simulated data for listings
//   useEffect(() => {
//     const allListings = [
//       {
//         id: 1,
//         title: "3 BHK Apartment in Sector 84",
//         price: "₹80 Lacs",
//         area: "1,200 sqft",
//         city: "Noida",
//         locality: "Sector 84",
//         image: "https://via.placeholder.com/300",
//         description: "Spacious 3 BHK apartment with modern amenities.",
//       },
//       {
//         id: 2,
//         title: "2 BHK Flat in Cyber City",
//         price: "₹60 Lacs",
//         area: "900 sqft",
//         city: "Gurgaon",
//         locality: "Cyber City",
//         image: "https://via.placeholder.com/300",
//         description: "Affordable 2 BHK flat in a prime location.",
//       },
//       {
//         id: 3,
//         title: "3 BHK Apartment in Sector 84",
//         price: "₹80 Lacs",
//         area: "1,200 sqft",
//         city: "Noida",
//         locality: "Sector 84",
//         image: "https://via.placeholder.com/300",
//         description: "Spacious 3 BHK apartment with modern amenities.",
//       },
//       {
//         id: 4,
//         title: "2 BHK Flat in Cyber City",
//         price: "₹60 Lacs",
//         area: "900 sqft",
//         city: "Gurgaon",
//         locality: "Cyber City",
//         image: "https://via.placeholder.com/300",
//         description: "Affordable 2 BHK flat in a prime location.",
//       },
//       {
//         id: 5,
//         title: "3 BHK Apartment in Sector 84",
//         price: "₹80 Lacs",
//         area: "1,200 sqft",
//         city: "Noida",
//         locality: "Sector 84",
//         image: "https://via.placeholder.com/300",
//         description: "Spacious 3 BHK apartment with modern amenities.",
//       },
//       {
//         id: 2,
//         title: "2 BHK Flat in Cyber City",
//         price: "₹60 Lacs",
//         area: "900 sqft",
//         city: "Gurgaon",
//         locality: "Cyber City",
//         image: "https://via.placeholder.com/300",
//         description: "Affordable 2 BHK flat in a prime location.",
//       },
//       {
//         id: 1,
//         title: "3 BHK Apartment in Sector 84",
//         price: "₹80 Lacs",
//         area: "1,200 sqft",
//         city: "Noida",
//         locality: "Sector 84",
//         image: "https://via.placeholder.com/300",
//         description: "Spacious 3 BHK apartment with modern amenities.",
//       },
//       {
//         id: 2,
//         title: "2 BHK Flat in Cyber City",
//         price: "₹60 Lacs",
//         area: "900 sqft",
//         city: "Gurgaon",
//         locality: "Cyber City",
//         image: "https://via.placeholder.com/300",
//         description: "Affordable 2 BHK flat in a prime location.",
//       },
//       {
//         id: 1,
//         title: "3 BHK Apartment in Sector 84",
//         price: "₹80 Lacs",
//         area: "1,200 sqft",
//         city: "Noida",
//         locality: "Sector 84",
//         image: "https://via.placeholder.com/300",
//         description: "Spacious 3 BHK apartment with modern amenities.",
//       },
//       {
//         id: 2,
//         title: "2 BHK Flat in Cyber City",
//         price: "₹60 Lacs",
//         area: "900 sqft",
//         city: "Gurgaon",
//         locality: "Cyber City",
//         image: "https://via.placeholder.com/300",
//         description: "Affordable 2 BHK flat in a prime location.",
//       },
//       {
//         id: 1,
//         title: "3 BHK Apartment in Sector 84",
//         price: "₹80 Lacs",
//         area: "1,200 sqft",
//         city: "Noida",
//         locality: "Sector 84",
//         image: "https://via.placeholder.com/300",
//         description: "Spacious 3 BHK apartment with modern amenities.",
//       },
//       {
//         id: 2,
//         title: "2 BHK Flat in Cyber City",
//         price: "₹60 Lacs",
//         area: "900 sqft",
//         city: "Gurgaon",
//         locality: "Cyber City",
//         image: "https://via.placeholder.com/300",
//         description: "Affordable 2 BHK flat in a prime location.",
//       },
//       {
//         id: 1,
//         title: "3 BHK Apartment in Sector 84",
//         price: "₹80 Lacs",
//         area: "1,200 sqft",
//         city: "Noida",
//         locality: "Sector 84",
//         image: "https://via.placeholder.com/300",
//         description: "Spacious 3 BHK apartment with modern amenities.",
//       },
//       {
//         id: 2,
//         title: "2 BHK Flat in Cyber City",
//         price: "₹60 Lacs",
//         area: "900 sqft",
//         city: "Gurgaon",
//         locality: "Cyber City",
//         image: "https://via.placeholder.com/300",
//         description: "Affordable 2 BHK flat in a prime location.",
//       },
//       {
//         id: 1,
//         title: "3 BHK Apartment in Sector 84",
//         price: "₹80 Lacs",
//         area: "1,200 sqft",
//         city: "Noida",
//         locality: "Sector 84",
//         image: "https://via.placeholder.com/300",
//         description: "Spacious 3 BHK apartment with modern amenities.",
//       },
//       {
//         id: 2,
//         title: "2 BHK Flat in Cyber City",
//         price: "₹60 Lacs",
//         area: "900 sqft",
//         city: "Gurgaon",
//         locality: "Cyber City",
//         image: "https://via.placeholder.com/300",
//         description: "Affordable 2 BHK flat in a prime location.",
//       },
//       // Add more listings
//     ];

//     setListings(allListings);

//     const filtered = allListings.filter(
//       (item) =>
//         (filters.city === "All Cities" || item.city === filters.city) &&
//         (!filters.locality || item.locality.includes(filters.locality))
//     );
//     setFilteredResults(filtered);
//   }, [filters]);

//   // Handle filter updates
//   const handleFilterChange = (key, value) => {
//     setFilters((prev) => ({ ...prev, [key]: value }));
//   };

//   // Handle card click
//   const handleCardClick = (id) => {
//     navigate(`/search/${id}`);
//   };

//   return (
//     <div className="list-page">
//       {/* Filters Section */}
//       <div className="filters-section">
//         <h3>Filters</h3>
//         <div className="filter-group">
//           <label>City</label>
//           <select
//             value={filters.city}
//             onChange={(e) => handleFilterChange("city", e.target.value)}
//           >
//             <option value="All Cities">All Cities</option>
//             <option value="Noida">Noida</option>
//             <option value="Delhi">Delhi</option>
//             <option value="Gurgaon">Gurgaon</option>
//           </select>
//         </div>
//         <div className="filter-group">
//           <label>Locality</label>
//           <input
//             type="text"
//             placeholder="Search Locality"
//             value={filters.locality}
//             onChange={(e) => handleFilterChange("locality", e.target.value)}
//           />
//         </div>
//         <div className="filter-group">
//           <label>Budget</label>
//           <select
//             value={filters.budget}
//             onChange={(e) => handleFilterChange("budget", e.target.value)}
//           >
//             <option value="">All Budgets</option>
//             <option value="20L">Up to 20L</option>
//             <option value="50L">20L - 50L</option>
//             <option value="1Cr">50L - 1Cr</option>
//           </select>
//         </div>
//         <div className="filter-group">
//           <label>Bedrooms</label>
//           <select
//             value={filters.bedrooms}
//             onChange={(e) => handleFilterChange("bedrooms", e.target.value)}
//           >
//             <option value="">Any</option>
//             <option value="1">1 BHK</option>
//             <option value="2">2 BHK</option>
//             <option value="3">3 BHK</option>
//           </select>
//         </div>
//       </div>

//       {/* Listings Section */}
//       <div className="listings-section">
//         <h2>Search Results</h2>
//         <div className="listings-container">
//           {filteredResults.length > 0 ? (
//             filteredResults.map((item) => (
//               <div
//                 className="listing-card"
//                 key={item.id}
//                 onClick={() => handleCardClick(item.id)}
//               >
//                 <img src={item.image} alt={item.title} />
//                 <div className="listing-details">
//                   <h3>{item.title}</h3>
//                   <p>Price: {item.price}</p>
//                   <p>Area: {item.area}</p>
//                   <p>City: {item.city}</p>
//                   <p>Locality: {item.locality}</p>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p>No results found for the selected filters.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }


import "./SearchPage.scss"
import {propertyData} from "../../../lib/propertyData.js"

export default function SearchPage() {
  const data = propertyData
  console.log(data)
  return (
   <>
    <div className="searchPageContainer ">
        <div className=" container-fluid">
          <div className="row ">
            <div className="col-12 col-md-8 bg-danger">
            <div className="listContainer">list</div>
            </div>
            <div className="col-12 col-md-4 bg-info">
            <div className="mapContainer">map</div>
            </div>
          </div>
        </div>
    </div>
   </>
  )
}
