import "./MediumCard.scss";

import { RiShieldStarFill } from "react-icons/ri";

export default function MediumCard({ name, image, address, experience, properties, pro }) {
  return (
    <div className="mediumCardWrapper m-2">
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

          <div className={`${pro === "PRO" ? "info" : "info2"} d-flex align-items-center justify-content-between gap-2`}>
            <span className="">{name}</span>
            <span className="badge ">HOUSING EXPERT {pro}</span>
          </div>

          <div className="address">
            <span className="badge bg-danger-subtle text-dark">{address}</span>
          </div>

          <div className="details mt-2 text-muted">
            <span className=" fw-medium">{experience}</span> Experience |
            <span className="fw-medium">{properties}</span> Properties
          </div>

        </div>
      </div>

    </div>
  );
}
