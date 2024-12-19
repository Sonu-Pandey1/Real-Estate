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
import { AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import { NavLink } from "react-router-dom";

export default function PropertyCard({ item }) {
  return (
    <NavLink to={`${item.id}`} className={" text-decoration-none"}>
      <div className="listingCardContainer">
        <div className="card custom-card">
          <div className="card-img-container">
            <img src={item.images[0]} className="card-img-top" alt="Property" />
            {/* to={`${item.id}`} */}
          </div>
          <div className="card-body">
            <h5 className="card-title ">{item.title}</h5>
            <p className="card-location">
              <IoLocationOutline className="icon" />
              {item.address}
            </p>
            <p className="card-price">{item.price}</p>
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
              </div>
            </div>
            <p className="card-description">
              <span className="">{item.desc}</span>
            </p>
            <div className="card-actions">
              <AiOutlineHeart className="icon action-icon" />
              <AiOutlineShareAlt className="icon action-icon" />
            </div>
          </div>
        </div>
      </div>
    </NavLink>
  );
}
