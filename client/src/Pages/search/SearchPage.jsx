

import { NavLink, useLocation } from "react-router-dom";
import "./SearchPage.scss";
import Filter from "../../Components/Filter.jsx";
import Map from "./Map.jsx";
import ListingCard from "../../Components/ListingCard.jsx";
import { useEffect, useState } from "react";

export default function SearchPage() {
  const { search } = useLocation();
  const queryParams = search.split("?")[1]; 
  //  console.log(queryParams);
  const [propertyData, setPropertyData] = useState([]);
  // console.log(propertyData)
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch the property data based on query params
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_BASEURL}/api/posts?${queryParams}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch property data.");
        }
        const data = await response.json();
        console.log(data);
        setPropertyData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [search]);

  // Show a loading spinner while fetching data
  if (loading) {
    return (
      <div className="loading-container">
        <div className="loader">
          <div className="spinner"></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  // Render the search page content
  return (
    <div className="searchPageContainer">
      <div className="container-fluid">
        <div className="filterHeader pt-2"></div>
        <div className="sticky-filter p-0 pt-1">
          <Filter />
        </div>
        {error ? (
          <div className="error-message mt-5 pt-5 text-danger text-center fs-2 vh-100">
            {error}
          </div>
        ) : propertyData.length === 0 ? (
          <div className="no-results-container mt-5 pt-5 text-center">
            <h2>No Listings Found</h2>
            <p>Try adjusting your search filters or explore other areas.</p>
          </div>
        ) : (
          <div className="row">
            {/* Property Listing Section */}
            <div className="col-12 col-md-8">
              <div className="listContainer h-100">
                {propertyData.map((item) => (
                  <NavLink
                    className="text-decoration-none"
                    to={`/search/${item.id}`}
                    key={item.id}
                  >
                    <ListingCard item={item} />
                  </NavLink>
                ))}
              </div>
            </div>

            {/* Map Section */}
            <div className="col-12 col-md-4">
              <div className="mapContainer mt-3 bg-secondary-subtle pt-sm-0">
                <Map items={propertyData} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
