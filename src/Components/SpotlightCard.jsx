import "./SpotlightCard.scss";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { TbLocationCheck } from "react-icons/tb";
import { NavLink } from "react-router-dom";

export default function SpotlightCard({title,image,description,location,price}) {
  return (
    <>
      <div className="sliderWrapper  d-flex row ps-4 pe-sm-1   pe-3">
        <div className="spotlightCard col-lg-3 col-md-4 col-sm-12 rounded-5">
          <div className="row row-top pt-5 ps-0">
            <div className="col-3 p-0 ms-3">
              <img
                className="rounded-4 img-fluid"
                src={image}
                alt="Ashiyana Villas Logo"
              />
            </div>
            <div className="col-8 text-center pt-2">
              <h6 className="m-0">{title}</h6>
              <NavLink to="/">View Projects</NavLink>
            </div>
          </div>
          <div className="row flex-column py-4 px-0 row-bottom">
            <div className="col py-2 d-flex">
              <TbLocationCheck className="me-3 mt-3 fs-5" />
              <div>
                <h5 className="m-0">{title}</h5>
                <p>{location}</p>
              </div>
            </div>
            <div className="col py-2 d-flex">
              <LiaRupeeSignSolid className="fs-4 me-2" />
              <div>
                <h5 className="m-0">{price}</h5>
                <p>{description}</p>
              </div>
            </div>
            <div className="col py-4">
              <button className="btn btn-outline-primary w-100 py-2">
                Contact
              </button>
            </div>
          </div>
        </div>

        <div className="col-lg-9 col-md-8 col-sm-12 p-0 m-0  pt-3 pb-md-0 pb-2">
          <img
            // width={"10%"}
            src={image}
            alt="Ashiyana Villas"
            className="rounded-4 p-0"
          />
        </div>
      </div>
    </>
  );
}
