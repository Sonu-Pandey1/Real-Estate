
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

  const formatSize = (size) => {
    if (!size || isNaN(size)) return "N/A";
    return Number(Math.floor(size / 10) * 10).toLocaleString() + " Sqft";
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
      // console.log(res.data);
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






// import { createContext, useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import axios from "axios";

// export const AuthContext = createContext();

// export const AuthContextProvider = ({ children }) => {
//   const location = useLocation(); 

//   const [currentUser, setCurrentUser] = useState(
//     JSON.parse(localStorage.getItem("user")) || null
//   );
//   const [listings, setListings] = useState([]);
//   const updateUser = (data) => {
//     setCurrentUser(data);
//   };

//   const formatPrice = (price) => {
//     if (price >= 10000000) {
//       return `₹ ${(price / 10000000).toFixed(2)} Cr`;
//     } else if (price >= 100000) {
//       return `₹ ${(price / 100000).toFixed(2)} Lakh`;
//     } else {
//       return `₹ ${price.toLocaleString("en-IN")}`;
//     }
//   };

//   const formatSize = (size) => {
//     if (!size || isNaN(size)) return "N/A";
//     return Number(Math.floor(size / 10) * 10).toLocaleString() + " Sqft";
//   };

//   // const capitalize = (str) => {
//   //   return str ? str.charAt(0).toUpperCase() + str.slice(1) : "N/A";
//   // };

//   const capitalize = (str) => {
//     if (!str) return "N/A";
    
//     return str
//       .split(" ") // Split into words
//       .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
//       .join(" "); // Join back into a sentence
//   };
  
  
  

//   // const getSpotlightListings = async () => {
//   //   try {
//   //     const res = await axios.get(`${import.meta.env.VITE_BACKEND_BASEURL}/api/posts?category=sell`, {
//   //       withCredentials: true,
//   //     });
//   //     setListings(res.data);
//   //     console.log(res.data);
//   //   } catch (error) {
//   //     console.error("Error fetching spotlight listings:", error);
//   //   }
//   // };

//   const getCurrentListingType = (pathname) => {
//     // Example: Extract category from window location or a React state
//     // const path = window.location.pathname; // Example: "/rent" or "/sell"
    
//     if (pathname.includes("rent")) return "rent";
//     if (pathname.includes("sell")) return "sell";
//     if (pathname.includes("buy")) return "buy";
//     if (pathname.includes("commercial")) return "commercial";
//     if (pathname.includes("pg-coliving")) return "pg-coliving";
//     if (pathname.includes("plots")) return "plots";
    
//     return "all"; // Default to all listings
//   };
  
//   const getSpotlightListings = async (listingType) => {
//     try {
//       const listingType = getCurrentListingType(); // Get current page category
//       const apiUrl = `${import.meta.env.VITE_BACKEND_BASEURL}/api/posts?listingType=${listingType}`;
      
//       const res = await axios.get(apiUrl, { withCredentials: true });
      
//       setListings(res.data);
//       console.log(res.data);
//     } catch (error) {
//       console.error("Error fetching spotlight listings:", error);
//     }
//   };

//   useEffect(() => {
//     const listingType = getCurrentListingType(location.pathname); // Get correct category
//     console.log(listingType)
//     getSpotlightListings(listingType); // Fetch listings whenever page changes
//   }, [location.pathname]); // Runs when the URL changes
  
//   useEffect(() => {
//     // Save the user to localStorage whenever it changes
//     localStorage.setItem("user", JSON.stringify(currentUser));
//   }, [currentUser]);

//   useEffect(() => {
//     // Fetch spotlight listings when the component mounts
//     getSpotlightListings();
//   }, []);

//   return (
//     <AuthContext.Provider
//       value={{
//         currentUser,
//         updateUser,
//         listings,
//         formatPrice,
//         formatSize,
//         capitalize,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };
