import axios from "axios";
// import Chat from "../../Components/Chat";
import List from "../../Components/List";
import "./Profile.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { Bounce, toast } from "react-toastify";

function Profile() {
  const navigate = useNavigate();
  const { currentUser, updateUser } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState("myListings");

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_BASEURL}/api/auth/logout`
      );
      updateUser(null);
      navigate("/");
      toast.success("" + (response.data.message || ""), {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
        transition: Bounce,
      });
    } catch (error) {
      console.log(error);
      toast.error("❌ Logout failed: " + (error.response.data.error || ""), {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
        transition: Bounce,
      });
    }
  };

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
        updateUser(null);
        navigate("/");
        toast.success("" + (response.data.message || ""), {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
          transition: Bounce,
        });
      } catch (error) {
        console.log(error);
        toast.error("❌" + (error.response.data.error || ""), {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
          transition: Bounce,
        });
      }
    } else {
      console.log("Account deletion canceled.");
      toast.error("❌ Account deletion canceled. ", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
        transition: Bounce,
      });
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
                <button className="btn btn-outline-success">
                  Update Profile
                </button>
              </NavLink>
            </div>

            <div className="info">
              <span>
                Avatar:
                <NavLink to={"/profile/update"}>
                  <img src={currentUser.avatar || "https://cdn-icons-gif.flaticon.com/17626/17626903.gif"} alt="User Avatar" />
                </NavLink>
              </span>

              <span>
                Username: <b>{currentUser.username}</b>
              </span>

              <span>
                Email: <b>{currentUser.email}</b>
              </span>

              <div className="d-flex flex-column flex-sm-row justify-content-between gap-3 gap-sm-5">
                <button
                  className="btn btn-outline-warning w-100 w-sm-25 mt-2 mt-sm-4"
                  onClick={handleLogout}>Logout
                </button>

                <button
                  className="btn btn-outline-danger w-100 w-sm-25 mt-0 mt-sm-4"
                  onClick={handleDelete}>Delete Account
                </button>
              </div>
            </div>

            <div className="title">
              <h1>My List</h1>
              <NavLink to={"/profile/add-listing"}>
                <button className="btn btn-outline-info">
                  Create New Post
                </button>
              </NavLink>
            </div>

            {/* Buttons to switch between tabs */}
            <div className="list-tabs">
              <button
                className={`btn ${activeTab === "myListings" ? "btn-primary" : "btn-outline-primary"}`}
                onClick={() => setActiveTab("myListings")}>
                My Listings
              </button>

              <button
                className={`btn  ms-2 ${activeTab === "savedListings" ? "btn-primary" : "btn-outline-primary"}`}
                onClick={() => setActiveTab("savedListings")}>
                Saved Listings
              </button>
            </div>

            {/* Conditional rendering based on activeTab */}
            {activeTab === "myListings" && <List type="myListings" />}
            {activeTab === "savedListings" && <List type="savedListings" />}
          </div>
        </div>

        {/* //* we are not now using chet fnctionality also its is not complited yet */}

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