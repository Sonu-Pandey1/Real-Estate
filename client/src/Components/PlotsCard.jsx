/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import "./BasicCard.scss";

export default function BasicCard({
  title,
  image,
  location,
  size,
  price,
  company,
  id
}) {
  return (
    <div className="basicCardWrapper ">
      <NavLink to={`/search/${id}`}
        className="card border-0 w-100 p-3  text-decoration-none"
      >
        <div className="row g-0 ">
          <div className="col-12 px-0 ">
            <div className="imgWrapper">
              <img
                className={`card-img-top ${company ? "" : "rounded-4"} w-100`}
                src={image}
                alt="Card image cap"
              />
            </div>
          </div>

          <div className="col-12">
            <div className="p-2">
              <h6 className="card-title fw-bold text-dark m-0">{title}</h6>
              <p className="opacity-75 text-dark m-0 mb-2">{company}</p>
              <p className="m-0 text-dark d-flex justify-content-between">
                <span className="">{size}</span>
              </p>
              <p className="text-truncate opacity-75 text-dark">
                {location}
              </p>
              <h6 className="text-dark">
                {price}
              </h6>
              <button className="btn btn-outline-success px-4 py-1 my-2">
                Contact
              </button>
            </div>
          </div>
          
        </div>
      </NavLink>
    </div>
  );
}
