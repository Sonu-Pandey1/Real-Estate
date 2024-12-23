import "./List.scss";
import ListingCard from "./ListingCard";
import { useState, useEffect } from "react";
import axios from "axios";

function List() {
  const [userPosts, setUserPosts] = useState([]);
  const [savedPost, setSavedPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_BASEURL}/api/users/profilePosts`,
          {
            withCredentials: true, // Include cookies if needed
          }
        );

        const { userPosts, savedPost } = response.data;
        setUserPosts(userPosts || []);
        setSavedPosts(savedPost || []);
      } catch (err) {
        setError(err.message || "Failed to fetch property data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="loading-container ">
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
    (!userPosts || userPosts.length === 0) &&
    (!savedPost || savedPost.length === 0)
  ) {
    return <div className="error-message pt-5 text-center">No posts found!</div>;
  }
  // if(savedPost.length<=0){
  //   return <div>No post found </div>
  // }
  return (
    <div className="list">
      {userPosts && userPosts.length > 0 ? (
        userPosts.map((item) => <ListingCard key={item.id} item={item} />)
      ) : (
        <div className="text-center pt-5">No posts found!</div>
      )}

      <div>
        <div className="title">
          <h1>Saved Posts</h1>
        </div>
        {savedPost && savedPost.length > 0 ? (
          savedPost.map((item) => <ListingCard key={item.id} item={item} />)
        ) : (
          <div className="text-center pt-5">No posts found!</div>
        )}
      </div>
    </div>
  );
}

export default List;
