/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./Pin.scss";
import { Marker, Popup } from "react-leaflet";

export default function Pin({ item }) {
  return (
    <div>
      <Marker position={[item.lat, item.long]}>
        <Popup>
          <div className="popupContainer">
            <img src={item.image} alt="img" />
            <div className="textContainer">
              <Link to={`${item.id}`} className=" text-truncate text-decoration-none" title={item.title}>
              {item.title.length > 15 ? `${item.title.slice(0, 15)}...` : item.title}
              </Link>
              <span className="bed">{item.badrooms} Badroom</span>
              <b>$ {item.price}</b>
            </div>
          </div>
        </Popup>
      </Marker>
    </div>
  );
}
