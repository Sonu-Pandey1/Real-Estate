
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [listings, setListings] = useState([]);

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

  // const capitalize = (str) => {
  //   return str ? str.charAt(0).toUpperCase() + str.slice(1) : "N/A";
  // };

  const capitalize = (str) => {
    if (!str) return "N/A";
    
    return str
      .split(" ") // Split into words
      .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
      .join(" "); // Join back into a sentence
  };
  
  
  

  const getSpotlightListings = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_BACKEND_BASEURL}/api/posts`, {
        withCredentials: true,
      });
      setListings(res.data);
      console.log(res.data);
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
        capitalize,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
