

import { Link } from "react-router-dom";
import "./Pin.scss";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix Leaflet marker icon paths for production
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import markerIconRetina from "leaflet/dist/images/marker-icon-2x.png";

// Custom Map Pin Icon
const customIcon = new L.Icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIconRetina,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export default function Pin({ item }) {
  if (!item || !item.lat || !item.long) return null;

  // console.log("Pin loaded:", item);

  return (
    <Marker position={[item.lat, item.long]} icon={customIcon}>
      <Popup>
        <div className="popupContainer">
          {item.image && <img className="img" src={item.image} alt={item.propertyName || "Property"} />}
          <div className="textContainer">
            <Link
              to={`/profile/${item.id}`}
              className="text-truncate text-decoration-none"
              title={item.propertyName}
            >
              {item.propertyName.length > 15 ? `${item.propertyName.slice(0, 15)}...` : item.propertyName || "No Title"}
            </Link>
            <span className="bed">{item.bedrooms} Bedroom</span>
            <b>₹ {item.price}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}
