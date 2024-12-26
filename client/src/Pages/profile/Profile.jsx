import axios from "axios";
import Chat from "../../Components/Chat";
import List from "../../Components/List";
import "./Profile.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";

function Profile() {
  const navigate = useNavigate();
  const { currentUser, updateUser } = useContext(AuthContext);

  const [activeTab, setActiveTab] = useState("myListings"); // Default to "My Listings"

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_BASEURL}/api/auth/logout`
      );
      console.log(response.data);
      // localStorage.removeItem("user")
      updateUser(null);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  // todo -- user deleted successfully but when the user have some saved post or creates listings the throughing error handle it later.

 
  const handleDelete = async () => {
    const confirmation = window.confirm(
      "Are you sure you want to delete your account and all your posts? This action cannot be undone."
    );

    if (confirmation) {
      try {
        const response = await axios.delete(
          `${import.meta.env.VITE_BACKEND_BASEURL}/api/users/${currentUser.id}`,
          {
            withCredentials: true,
          }
        );

        console.log(response.data);
        updateUser(null);
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Account deletion canceled.");
    }
  };

  if (!currentUser) {
    return (
      <div className="my-5 pt-5 text-center">
        current user not found please login{" "}
      </div>
    );
  }

  return (
    currentUser && (
      <div className="profilePage container">
        <div className="details">
          <div className="wrapper">
            <div className="title">
              <h1>User Information</h1>
              <NavLink to={"/profile/update"}>
                <button>Update Profile</button>
              </NavLink>
            </div>
            <div className="info">
              <span>
                Avatar:
                <NavLink to={"/profile/update"}>
                  <img
                    src={
                      currentUser.avatar ||
                      "https://cdn-icons-gif.flaticon.com/17626/17626903.gif"
                    }
                    alt="User Avatar"
                  />
                </NavLink>
              </span>
              <span>
                Username: <b>{currentUser.username}</b>
              </span>
              <span>
                Email: <b>{currentUser.email}</b>
              </span>
              <button
                className="btn btn-outline-info w-25 mt-4"
                onClick={handleLogout}
              >
                Logout
              </button>

              <button
                className="btn btn-outline-danger w-25 "
                onClick={handleDelete}
              >
                Delete Account
              </button>
            </div>
            <div className="title">
              <h1>My List</h1>
              <NavLink to={"/profile/addPost"}>
                <button>Create New Post</button>
              </NavLink>
            </div>

            {/* Buttons to switch between tabs */}
            <div className="list-tabs">
              <button
                className={`btn ${
                  activeTab === "myListings"
                    ? "btn-primary"
                    : "btn-outline-primary"
                }`}
                onClick={() => setActiveTab("myListings")}
              >
                My Listings
              </button>
              <button
                className={`btn  ms-2 ${
                  activeTab === "savedListings"
                    ? "btn-primary"
                    : "btn-outline-primary"
                }`}
                onClick={() => setActiveTab("savedListings")}
              >
                Saved Listings
              </button>
            </div>

            {/* Conditional rendering based on activeTab */}
            {activeTab === "myListings" && <List type="myListings" />}
            {activeTab === "savedListings" && <List type="savedListings" />}
          </div>
        </div>
        {/* //? we are not now using chet fnctionality also its is not complited yet */}
        {/* <div className="chatContainer">
          <div className="wrapper">
            <Chat />
          </div>
        </div> */}
      </div>
    )
  );
}

export default Profile;



