import { LiaRupeeSignSolid } from "react-icons/lia";
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
}) {
  return (
    <>
      {owner ? (
        <div className="basicCardForCommercial">
          <NavLink
            to={"/commercialPropertys"}
            className={"card border text-decoration-none flex-row"}
          >
            <div className="row ">
              <div className="col-5 pe-0">
                {/* <div className="imgWrapper bg-info "> */}
                <img
                  className="card-img-top rounded w-100 object-fit-cover h-100  "
                  src={image}
                  alt="Card image cap"
                />
                {/* </div> */}
              </div>
              <div className="col-7 ">
                <div className=" p-0 pt-2 my-2 ">
                  <h6 className=" fw-bold text-dark m-0 ">{title}</h6>
                  <p className=" sm text-dark opacity-75">{owner}</p>
                  <p className=" text-dark m-0">{area}</p>
                  <p className=" sm text-truncate text-dark opacity-75">
                    {address}
                  </p>
                  <h6 className="text-dark">
                    <LiaRupeeSignSolid className="fs-5 pb-1" />
                    {price}
                  </h6>
                </div>
              </div>
            </div>
          </NavLink>
        </div>
      ) : (
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
      )}
    </>
  );
}
