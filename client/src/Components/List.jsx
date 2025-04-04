/* eslint-disable react/prop-types */

import "./List.scss";
import ListingCard from "./ListingCard";
import { useState, useEffect } from "react";
import axios from "axios";

function List({ type }) {
  const [userPosts, setUserPosts] = useState([]);
  const [savedPosts, setSavedPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_BASEURL}/api/users/profilePosts`,
          {
            withCredentials: true,
          }
        );

        const { userPosts, savedPost } = response.data;
        setUserPosts(userPosts || []);
        setSavedPosts(savedPost || []);
      } catch (err) {
        setError(err.message || "Failed to fetch posts.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

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

  if (
    type === "myListings" &&
    (!userPosts || userPosts.length === 0)
  ) {
    return <div className="error-message text-center">No My Listings found!</div>;
  }

  if (
    type === "savedListings" &&
    (!savedPosts || savedPosts.length === 0)
  ) {
    return <div className="error-message text-center">No Saved Listings found!</div>;
  }

  return (
    <div className="list">
      {type === "myListings" &&
        userPosts.map((item) => <ListingCard type={type} key={item.id} item={item} />)}

      {type === "savedListings" &&
        savedPosts.map((item) => <ListingCard type={type} key={item.id} item={item} />)}
    </div>
  );
}

export default List;
