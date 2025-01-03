// import { createContext, useEffect, useState } from "react";

// export const AuthContext = createContext();

// export const AuthContextProvider = ({children})=>{

//     const [currentUser,setCurrentUser] = useState(
//         JSON.parse(localStorage.getItem("user"))||null);

//     const updateUser = (data)=>{
//         setCurrentUser(data);
//     }

//     useEffect(()=>{
//         localStorage.setItem("user",JSON.stringify(currentUser));

//     },[currentUser])
    
//     return <AuthContext.Provider value={{currentUser,updateUser}}>
//         {children}
//     </AuthContext.Provider>
// }

// import { createContext, useEffect, useState } from "react";
// import axios from "axios"
// export const AuthContext = createContext();

// export const AuthContextProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState(
//     JSON.parse(localStorage.getItem("user")) || null
//   );
//   const [listings,setListings] = useState("")

//   const updateUser = (data) => {
//     setCurrentUser(data);
//   };

//   const getSpotlightListings = async ()=>{
//     try {
//       const res = await axios.get("http://localhost:3000/api/posts",{
//         withCredentials:true
//       })
//       setListings(res)
// console.log(res)
//     } catch (error) {
//       console.log(error)
//     }

//   }

//   useEffect(() => {
//     localStorage.setItem("user", JSON.stringify(currentUser));
//   }, [currentUser]);

//   return (
//     <AuthContext.Provider value={{ currentUser, updateUser, listings }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };


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

  const getSpotlightListings = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/posts", {
        withCredentials: true,
      });
      setListings(res.data); // Assuming res.data contains the listing data
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
