/* eslint-disable react/prop-types */
import "./ListingCard.scss";
import { IoLocationOutline } from "react-icons/io5";
import { MdBalcony } from "react-icons/md";
import {
  FaBed,
  FaBath,
  FaRulerCombined,
  // FaCar,
  // FaSwimmingPool,
  // FaWindowMaximize,
} from "react-icons/fa";
import { AiFillHeart, AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import axios from "axios";
import { Bounce, toast } from "react-toastify";

export default function PropertyCard({ item, type }) {

  const { currentUser, formatPrice, capitalize } = useContext(AuthContext);
  const navigate = useNavigate();
  const [saved, setSaved] = useState(false);

  const handleSave = async (e) => {
    e.preventDefault();
    if (!currentUser) {
      navigate("/");
      return;
    }
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_BASEURL}/api/users/save`,
        { postId: item.id },
        { withCredentials: true }
      );
      // console.log(response.data.message);
      setSaved(!saved);
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
    } catch (err) {
      // console.log(error);
      toast.error("❌ " + (err.response.data.error || ""), {
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

  const handleShare = async (e) => {
    e.preventDefault();
    const shareData = {
      title: item.title,
      text: `${item.title} - ${item.address}\nCheck out this amazing property listed for ${item.price}!`,
      url: `${window.location.origin}/profile/${item.id}`,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        console.log("Shared successfully!");
      } catch (error) {
        console.log("Error sharing:", error);
      }
    } else {
      navigator.clipboard.writeText(shareData.url);
      alert("Link copied to clipboard! Share it with your friends.");
    }
  };

  const handleEdit = (e) => {
    e.preventDefault();
    navigate(`edit-post/${item.id}`);
  };

  const handleDelete = async (e) => {
    e.preventDefault();

    const confirmation = window.confirm(
      "Are you sure you want to delete your post? This action cannot be undone."
    );
    if (confirmation) {
      try {
        const response = await axios.delete(
          `${import.meta.env.VITE_BACKEND_BASEURL}/api/posts/${item.id}`,
          { withCredentials: true }
        );
        // console.log(response.data.message);
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
        window.location.reload();
      } catch (err) {
        toast.error("❌ " + (err.response.data.error || ""), {
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
      console.log("Listing deletion canceled.");
      toast.error("❌ Listing deletion canceled. ", {
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_BASEURL}/api/posts/${item.id}`,
          { withCredentials: true }
        );
        // console.log(response.data);
        // console.log(response.data.isSaved);
        if (response.data) {
          setSaved(response.data.isSaved || false);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [item.id]);

  return (
    <NavLink to={`${item.id}`} className={"text-decoration-none"}>
      <div className="listingCardContainer">
        <div
          className={`card custom-card ${type === "myListings" || type === "savedListings"
            ? "ProfileCard"
            : ""
            }`}
        >
          <div className="card-img-container ">
            <img src={item.images[0]} className="card-img-top" alt="Property" />
          </div>
          <div className="card-body ">
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="card-title">{item.propertyName}</h5>
              <p>views {item.views}</p>
            </div>
            <p className="card-location">
              <IoLocationOutline className="icon" />
              {item.address}
            </p>
            <p className="card-price">{formatPrice(item.price)} </p>
            <div className="card-amenitiesContainer ">
              <div className="card-details">
                <div className="d-flex justify-content-between gap-4">
                  <div className="detail">
                    <FaRulerCombined className="icon" />
                    <span>{item.size}</span>
                  </div>
                  <div className="detail">
                    <FaBed className="icon" />
                    <span>{item.bedroom}</span>
                  </div>
                  <div className="detail">
                    <FaBath className="icon" />
                    <span>{item.bathroom}</span>
                  </div>
                  <div className="detail">
                    <MdBalcony className="icon" />
                    <span>{item.balcony}</span>
                  </div>

                </div>
              </div>
              <div className="card-amenities">
                <p>
                  <strong>Amenities:</strong>
                </p>
                <div className="d-flex flex-wrap gap-3 align-items-center">
                  {item.amenities.length > 0 ? (
                    item.amenities.slice(0, 5).map((item, index) => {
                      const amenityIcons = {
                        "gym": "https://cdn-icons-png.flaticon.com/128/5582/5582932.png"
                      };

                      const icon = amenityIcons[item] || "https://cdn-icons-png.flaticon.com/128/5582/5582932.png";

                      return (
                        <div key={index} className=" ">
                          <img src={icon} alt={`${item} Icon`} className="me-1" width="20" />
                          <span>{capitalize(item)}</span>
                        </div>

                      );
                    })
                  ) : (
                    <p>No amenities listed.</p>
                  )}
                  <div className="card-actions ms-auto">
                    <button
                      onClick={handleSave}
                      className={`heart-button ${saved ? "liked" : ""}`}
                    >
                      {saved ? (
                        <AiFillHeart className="heart-filled" />
                      ) : (
                        <AiOutlineHeart className="heart-outline" />
                      )}
                    </button>
                    <button
                      onClick={handleShare}
                      className="share-button"
                      title="Share"
                    >
                      <AiOutlineShareAlt className="icon share action-icon" />
                    </button>
                  </div>
                </div>

                {currentUser &&
                  (type === "myListings" || type === "savedListings") && (
                    <div className="card-buttons mt-3">
                      <button
                        onClick={handleEdit}
                        className="btn btn-outline-info "
                      >
                        Edit
                      </button>
                      <button
                        onClick={handleDelete}
                        className="btn btn-outline-danger ms-2"
                      >
                        Delete
                      </button>
                    </div>
                  )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </NavLink>
  );
}
