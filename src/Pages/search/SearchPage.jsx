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

import "./SearchPage.scss";
import Filter from "../../Components/Filter.jsx";
import Map from "../../Components/Map.jsx";
import { propertyData } from "../../../lib/propertyData.js";
import ListingCard from "../../Components/ListingCard.jsx";

export default function SearchPage() {
  const data = propertyData;

  return (
    <>
      <div className="searchPageContainer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-8 pe-0">
              <div className="sticky-filter ">
                <Filter />
              </div>
              <div className="listContainer h-100">
                {data.map((item) => (
                  <ListingCard key={item.id} item={item} />
                ))}
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="mapContainer">
                <Map />
              </div>
            </div>
          </div>
          <div className="row">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio facilis, tenetur consectetur excepturi similique veritatis alias optio nisi dicta impedit ipsa! Unde nulla amet corrupti saepe non hic ipsam quisquam aliquid illum officiis harum dolores quae dolore eligendi maiores quaerat natus repellat nam mollitia ducimus, reprehenderit minus. Tenetur delectus magni exercitationem illum totam. Aliquam, placeat aliquid facilis odio quia necessitatibus quae, qui natus sit pariatur voluptates dolore omnis. Assumenda ea voluptatibus nostrum nesciunt ducimus, iure labore id harum officiis a et eveniet laudantium vel nulla reprehenderit ipsum delectus perferendis, ad odio? Molestias cum provident perspiciatis a saepe voluptate animi impedit omnis illum odit obcaecati iste expedita officia fugiat facilis doloribus facere deserunt, veniam optio excepturi repellat consequuntur veritatis dolores at. Magni minima esse saepe eligendi quos ipsa ex delectus nemo autem doloribus pariatur voluptatum cumque tenetur, architecto asperiores molestiae odit cupiditate? Sit veniam consectetur, fugiat ipsam dolorum amet dicta nobis distinctio eius dolore? Totam dolorem laudantium repellat culpa tempora, architecto unde enim mollitia animi ut nam odio ab deserunt natus excepturi cumque quaerat blanditiis voluptatem tenetur, pariatur doloremque praesentium id officia. Repudiandae omnis, sequi sapiente sed reprehenderit magnam suscipit ipsam unde cupiditate soluta, excepturi modi voluptatem esse quas quis iure totam ullam nostrum. Sunt ab harum id quae, doloremque quam eveniet reprehenderit, molestias, cumque at vitae sed quisquam repudiandae veniam neque optio libero est porro tempora iste error tempore velit! Earum maxime excepturi nemo ipsam libero laboriosam modi neque consequatur soluta perferendis sunt, tempore numquam magni recusandae et obcaecati culpa inventore reiciendis officiis blanditiis. Repudiandae praesentium, eligendi, earum unde temporibus commodi repellat voluptate harum maiores deleniti voluptates eveniet sed ipsam ad vitae! Quis cupiditate esse sequi architecto illo consequuntur id similique, vero et corrupti earum quaerat consectetur dolore reprehenderit sit suscipit laborum neque iste maiores libero eum. Sapiente cum neque, quis odio suscipit qui, deleniti voluptate accusantium quisquam fugit laboriosam similique iste a dignissimos, iure dolorem minus. Omnis commodi illo, cumque dicta excepturi delectus deleniti earum cupiditate, dolore eligendi blanditiis vitae doloribus! Reiciendis molestias quia esse, repellat cupiditate neque odio! Doloribus illum dignissimos modi necessitatibus itaque, minima culpa qui facilis dolorum nesciunt corporis molestiae accusamus, omnis quia tempore perferendis debitis dolore suscipit enim autem? Accusamus vero eos sint minus harum autem esse voluptates illo, corrupti officia repudiandae, perspiciatis itaque numquam incidunt magni, qui alias. Et fuga adipisci fugit cum voluptas! Qui numquam perferendis deserunt, eaque minus, animi laudantium id cum nulla soluta asperiores magni ab porro accusantium quae quaerat amet distinctio culpa debitis quod, dignissimos inventore magnam quia ex. Quos molestias soluta nihil ducimus quo commodi officiis veniam atque? Animi maxime quia et, cupiditate dolor iusto debitis numquam fuga odit quos quis quasi fugiat aut incidunt eum nostrum magni expedita, ea aperiam possimus at voluptate accusantium quas? Labore nulla quos ab impedit eligendi, architecto nisi ullam beatae animi eius ea, quod reiciendis, recusandae enim incidunt rerum ipsum illo. Maxime, ullam aspernatur. Id eos quod alias ratione impedit laboriosam officia hic autem, quaerat, nemo tempore sint debitis unde corrupti repudiandae necessitatibus nihil voluptas accusamus illo molestiae molestias. Qui officiis modi adipisci quod molestiae. Aspernatur atque natus expedita voluptates cumque nam voluptate, illum cum consectetur culpa alias. Laudantium magnam nobis assumenda architecto facilis? Mollitia numquam adipisci dolorem architecto similique perferendis provident illo ex eligendi, debitis ipsam ipsa! Expedita architecto voluptates non cupiditate fugit sunt minus quis possimus facilis? Eligendi repellat aperiam esse voluptas incidunt quis error ducimus nam maxime animi, laborum dignissimos iure ut quia velit officia eius, quos maiores natus illum facere excepturi nisi! Aperiam molestiae blanditiis voluptates magni? At iusto dolore deleniti nesciunt, repudiandae quidem architecto est. Dolorum voluptatibus ducimus illum sint non, odit, in nobis consectetur quia, rerum molestias magni provident numquam quisquam quasi. Mollitia adipisci error vero minus quibusdam iste saepe, id laborum laudantium atque, odio suscipit illum corporis dolores dolorem pariatur vitae veniam! Enim dignissimos perferendis iure! Voluptatibus voluptate rem culpa? At doloribus laboriosam aut odio assumenda ipsam alias molestiae tempora molestias sint iure culpa ducimus reiciendis est, quo facilis tenetur! Consectetur quam, maxime, voluptate laudantium nisi reiciendis nam iusto aut veniam saepe reprehenderit, excepturi vero ex! Consequatur officia tempore laudantium iusto exercitationem earum voluptate natus ex nulla ipsum odit quidem nisi at, placeat nam vitae quis inventore! Ipsa harum incidunt voluptates ratione officiis ab eos eius at minus repellendus quisquam odio expedita odit enim corrupti sint, molestias, maxime dolor hic qui nulla maiores. Cupiditate consectetur incidunt veniam dolorum tempore impedit vero ex, earum eveniet praesentium velit obcaecati eos beatae soluta adipisci rerum ut et, deleniti veritatis. Illum, soluta ipsum non exercitationem quisquam itaque architecto, fugit laboriosam perferendis dolores pariatur alias nihil, fugiat quod. Accusamus possimus veritatis odit quam eum, nobis error eos, doloribus dolore nisi repellendus illo nam illum ducimus cupiditate numquam aut totam obcaecati fugit quas! Reprehenderit doloremque repellat odit exercitationem enim totam, repudiandae voluptas rerum nostrum beatae accusantium! Quibusdam eius veritatis eaque fuga, veniam labore similique recusandae velit ab placeat. Beatae aliquam, quam, ipsam ea aliquid doloremque magni possimus quos temporibus, commodi aspernatur quaerat maxime numquam non ex obcaecati hic soluta accusamus est amet quo tenetur laudantium. Consequuntur suscipit aspernatur iusto in, architecto ratione quam voluptatum enim at nam sed maxime voluptatem, repellat fugiat quas quisquam deserunt voluptate doloribus neque saepe soluta illum necessitatibus? Quo quae id natus, commodi recusandae fugit aut eum mollitia quibusdam beatae distinctio quis, porro quos? Porro corporis, ratione illo, in ab ipsa nostrum quo nulla veniam exercitationem fugit deleniti tempora labore, molestias doloremque accusantium repudiandae numquam odio. Expedita amet optio beatae quos. Totam enim fugiat omnis et ex, nostrum dolore. Magnam enim ipsa pariatur unde placeat rem molestias odio quo repellat. Possimus quia ducimus rerum ab enim omnis repudiandae repellendus, necessitatibus sint praesentium maxime exercitationem consectetur est natus! Expedita repellat neque quibusdam doloremque ipsa. Hic asperiores, nam placeat aspernatur qui ab saepe iusto molestias, ipsam dolor nisi quod nobis tempore! At omnis quasi nihil, corporis rem, adipisci est nam nostrum accusamus asperiores id ducimus veritatis? Aliquid ipsum dolorum vero incidunt voluptas laboriosam illum? Sapiente laudantium alias assumenda architecto nostrum.</p>
          </div>
        </div>
      </div>
    </>
  );
}
