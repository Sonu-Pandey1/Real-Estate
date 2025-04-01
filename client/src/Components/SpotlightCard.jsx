import "./SpotlightCard.scss";
import { TbLocationCheck } from "react-icons/tb";
import { NavLink } from "react-router-dom";

export default function SpotlightCard({ title, image, description, location, price, id }) {
  return (
    <>
      <div className="sliderWrapper d-flex row  pe-sm-1  pe-3">
        <div className="spotlightCard col-lg-3 col-md-4 col-sm-12 rounded-5">
          <div className="row row-top pt-3 pt-sm-5 px-4">
            <div className="col-3 p-0 ms-3">
              <img
                className="rounded-4 img-fluid"
                src={image}
                alt="Ashiyana Villas Logo"
              />
            </div>
            <div className="col-8 text-center pt-2">
              <h4 className="m-0">{title}</h4>
              <NavLink to={`/profile/${id}`}>View Projects</NavLink>
            </div>
          </div>
          <div className="row flex-column px-0 row-bottom px-4 py-3">
            <div className="col py-2 d-flex">
              <TbLocationCheck className="me-3 mt-3 fs-5" />
              <div>
                <h5 className="m-0">{title}</h5>
                <p>{location}</p>
              </div>
            </div>
            <div className="col py-2 d-flex">
              <div>
                <h5 className="m-0">{price}</h5>
                <p>{description}</p>
              </div>
            </div>
            <div className="col py-1">
              <NavLink className=" text-decoration-none btn btn-outline-primary w-100" to={`/profile/${id}`}>Contact</NavLink>
            </div>
          </div>
        </div>

        <div className="col-lg-9 col-md-8 col-sm-12 pb-md-0 pb-2 pe-0 ">
          <div className="imgw">
            <img
              // width={"10%"}
              src={image}
              alt="Ashiyana Villas"
              className="rounded-4 p-0"
            />
          </div>
        </div>
      </div>
    </>
  );
}
