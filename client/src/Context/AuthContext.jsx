
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [listings, setListings] = useState([]);
  // console.log(listings)

  const updateUser = (data) => {
    setCurrentUser(data);
  };

  const formatPrice = (price) => {
    if (price >= 10000000) {
      return `₹ ${(price / 10000000).toFixed(2)} Cr`;
    } else if (price >= 100000) {
      return `₹ ${(price / 100000).toFixed(2)} Lakh`;
    } else {
      return `₹ ${price.toLocaleString("en-IN")}`;
    }
  };

  const formatSize = (size) => {
    if (!size || isNaN(size)) return "N/A";
    return Number(Math.floor(size / 10) * 10).toLocaleString() + " Sqft";
  };

  const capitalize = (str) => {
    if (!str) return "N/A";
    return str
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const getSpotlightListings = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_BACKEND_BASEURL}/api/posts`, {
        withCredentials: true,
      });
      setListings(res.data);
      // console.log(res)
    } catch (error) {
      console.error("Error fetching spotlight listings:", error);
    }
  };

  useEffect(() => {
    // Save the user to localStorage whenever it changes
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  useEffect(() => {
    // Fetch spotlight listings when the component mounts
    getSpotlightListings();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        updateUser,
        listings,
        formatPrice,
        formatSize,
        capitalize,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
