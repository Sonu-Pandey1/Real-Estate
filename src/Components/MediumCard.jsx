import "./MediumCard.scss";
import { RiShieldStarLine } from "react-icons/ri";
import { RiShieldStarFill } from "react-icons/ri";

export default function MediumCard({ title, image, description }) {
  return (
    <div className="mediumCardWrapper p-2 ">
      <div className="expertCard mb-3 rounded-3 p-2 d-flex align-items-center gap-3">
        {/* Profile Image */}
        <div className="profileImageWrapper">
          <img
            src={image}
            alt="Profile"
            className="profileImage rounded-circle"
          />
          <span className="badgeIcon ">
            <RiShieldStarFill className="bi bi-star-fill text-danger" />
          </span>
        </div>

        {/* Profile Details */}
        <div className="profileDetails flex-grow-1">
          <div className=" info d-flex align-items-center justify-content-between gap-2">
            <span className="">Sonu Panday</span>
            <span className="badge ">HOUSING EXPERT PRO</span>
          </div>
          <div className="address">
            <span className="badge bg-danger-subtle text-dark">
              Noida Extension{" "}
            </span>
            <span className="badge bg-danger-subtle text-dark">Sector 152</span>
          </div>
          <div className="details mt-2 text-muted">
            <span className=" fw-medium">0.5 years</span> Experience |
            <span className="fw-medium"> 29</span> Properties
          </div>
        </div>
      </div>
      <div className="expertCard  rounded-3 p-2 d-flex align-items-center gap-3">
        {/* Profile Image */}
        <div className="profileImageWrapper">
          <img
            src={image}
            alt="Profile"
            className="profileImage rounded-circle"
          />
          <span className="badgeIcon ">
            <RiShieldStarFill className="bi bi-star-fill text-danger" />
          </span>
        </div>

        {/* Profile Details */}
        <div className="profileDetails flex-grow-1">
          <div className=" info d-flex align-items-center justify-content-between gap-2">
            <span className="">Sonu Panday</span>
            <span className="badge ">HOUSING EXPERT PRO</span>
          </div>
          <div className="address">
            <span className="badge bg-danger-subtle text-dark">
              Noida Extension{" "}
            </span>
            <span className="badge bg-danger-subtle text-dark">Sector 152</span>
          </div>
          <div className="details mt-2 text-muted">
            <span className=" fw-medium">0.5 years</span> Experience |
            <span className="fw-medium"> 29</span> Properties
          </div>
        </div>
      </div>
    </div>
  );
}
