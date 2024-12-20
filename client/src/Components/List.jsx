import './List.scss';
import ListingCard from './ListingCard';
import { useState, useEffect } from 'react';
import axios from 'axios';

function List() {
  const [propertyData, setPropertyData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/users/profilePosts', {
          withCredentials: true, // Include cookies if needed
        });

        setPropertyData(response.data); // Update state with fetched data
      } catch (err) {
        setError(err.message || 'Failed to fetch property data.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Re-run this effect whenever `propertyData` is updated

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

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (!propertyData || propertyData.length === 0) {
    return <div className="error-message mt-5 pt-5">Property not found!</div>;
  }

  console.log(propertyData)
  return (
    <div className="list">
      {propertyData.map((item) => (
        <ListingCard key={item.id} item={item} />
      ))}
    </div>
  );
}

export default List;
