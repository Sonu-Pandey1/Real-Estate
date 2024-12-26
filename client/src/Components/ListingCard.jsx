
/* eslint-disable react/prop-types */
import "./ListingCard.scss";
import { IoLocationOutline } from "react-icons/io5";
import {
  FaBed,
  FaBath,
  FaRulerCombined,
  FaCar,
  FaSwimmingPool,
} from "react-icons/fa";
import { AiFillHeart, AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import axios from "axios";

export default function PropertyCard({ item, type }) {
  const { currentUser } = useContext(AuthContext);
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
      console.log(response.data.message);
      setSaved(!saved);
    } catch (error) {
      console.log(error);
    }
  };

  const handleShare = async (e) => {
    e.preventDefault();
    const shareData = {
      title: item.title,
      text: `${item.title} - ${item.address}\nCheck out this amazing property listed for ${item.price}!`,
      url: `${window.location.origin}/${item.id}`, 
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
    navigate(`/edit-listing/${item.id}`);
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_BACKEND_BASEURL}/api/posts/${item.id}`,
        { withCredentials: true }
      );
      console.log(response.data.message);
      window.location.reload(); 
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_BASEURL}/api/posts/${item.id}`,
          { withCredentials: true }
        );
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
        <div className={`card custom-card ${type === "myListings" || type === "savedListings" ? "ProfileCard" : ""}`}>
          <div className="card-img-container">
            <img src={item.images[0]} className="card-img-top" alt="Property" />
          </div>
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-location">
              <IoLocationOutline className="icon" />
              {item.address}
            </p>
            <p className="card-price">{item.price}</p>
            <div className="card-amenitiesContainer">
              <div className="card-details">
                <div className="d-flex justify-content-between gap-4">
                  <div className="detail">
                    <FaBed className="icon" />
                    <span>{item.bedroom}</span>
                  </div>
                  <div className="detail">
                    <FaBath className="icon" />
                    <span>{item.bathroom}</span>
                  </div>
                  <div className="detail">
                    <FaRulerCombined className="icon" />
                    <span>{item.size}</span>
                  </div>
                </div>
              </div>
              <div className="card-amenities">
                <p>
                  <strong>Amenities:</strong>
                </p>
                <div className="d-flex flex-wrap gap-3">
                  <div className="amenity">
                    <FaCar className="icon" />
                    <span>Parking</span>
                  </div>
                  <div className="amenity">
                    <FaSwimmingPool className="icon" />
                    <span>Swimming Pool</span>
                  </div>
                  <div className="amenity">
                    <IoLocationOutline className="icon" />
                    <span>Prime Location</span>
                  </div>
                  <div className="ms-auto">
                    <div className="card-actions">
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
                </div>
                {currentUser && (type === "myListings" || type === "savedListings") && (
                  <div className="card-buttons mt-3">
                    <button onClick={handleEdit} className="btn btn-outline-info ">
                      Edit
                    </button>
                    <button onClick={handleDelete} className="btn btn-outline-danger ms-2">
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
