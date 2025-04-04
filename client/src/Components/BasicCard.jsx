// BasicCard.jsx
/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import "./BasicCard.scss";

export default function BasicCard({
  title,
  image,
  description,
  location,
  size,
  price,
  owner,
  area,
  address,
  company,
  id

}) {
  return (
    <>
      {owner ? (
        <div className="basicCardForCommercial m-2">
          <NavLink
            to={`/search/${id}`}
            className="card border-1 w-100 text-decoration-none flex-row"
          >
            <div className="row g-0">

              <div className="col-12 col-sm-5 pe-0">
                <div className="img-wrapper">
                  <img
                    className="card-img-top rounded w-100 object-fit-cover"
                    src={image}
                    alt="Card"
                  />
                </div>
              </div>

              <div className="col-12 col-sm-7">
                <div className="p-2">
                  <h6 className="fw-bold text-dark m-0">{title}</h6>
                  <p className="small text-dark opacity-75">
                    {company ? company : owner}
                  </p>
                  <p className="text-dark m-0">{area}</p>
                  <p className="small text-truncate text-dark opacity-75">
                    {address}
                  </p>
                  <h6 className="text-dark">{price}</h6>
                </div>
              </div>

            </div>
          </NavLink>
        </div>
      ) : (
        <div className="basicCardWrapper">
          <NavLink to={`/search/${id}`} className="card border-0 w-100 p-3 text-decoration-none">
            <div className="row g-0">

              <div className="col-12 px-0">
                <div className="img-wrapper">
                  <img
                    className={`card-img-top ${company ? "" : "rounded-4"} w-100 object-fit-cover`}
                    src={image}
                    alt="Card"
                  />
                </div>
              </div>

              <div className="col-12">
                <div className="p-2">
                  <h6 className="card-title fw-bold text-dark m-0">{title}</h6>
                  <p className="opacity-75 text-dark m-0 mb-2">{company}</p>
                  <p className="m-0 text-dark d-flex justify-content-between">
                    <span>{description}</span>
                    <span>{size}</span>
                  </p>
                  <p className="text-truncate opacity-75 text-dark">{location}</p>
                  <h6 className="text-dark">{price}</h6>
                  <button className="btn btn-outline-success px-4 py-1 my-2">Contact</button>
                </div>
              </div>

            </div>
          </NavLink>
        </div>
      )}
    </>
  );
}
