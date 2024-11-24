

import { LiaRupeeSignSolid } from "react-icons/lia";
import { NavLink } from "react-router-dom";
import "./BasicCard.scss";

export default function BasicCard({ title, image, description, location, size, price }) {
  return (
    <div className="basicCardWrapper">
      <NavLink to="/contact" className="card border-0 text-decoration-none">
        <div className="imgWrapper">
          <img
            className="card-img-top rounded-4"
            src={image}
            alt="Card image cap"
          />
        </div>
        <div className="card-body p-0 pt-2">
          <h6 className="card-title fw-bold text-dark">{title}</h6>
          <p className="m-0 text-dark">
            {description}
            <span className="float-end">{size}</span>
          </p>
          <p className="text-truncate opacity-75 text-dark">{location}</p>
          <h6 className="text-dark">
            <LiaRupeeSignSolid className="fs-5 pb-1" />
            {price}
          </h6>
          
          <button className="btn btn-outline-success px-4 py-1 my-2">
            Contact
          </button>
        </div>
      </NavLink>
    </div>
  );
}
