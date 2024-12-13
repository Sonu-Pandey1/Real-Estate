/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./Pin.scss";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix Leaflet marker icon paths for production
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import markerIconRetina from "leaflet/dist/images/marker-icon-2x.png";

// Override default icon settings
const customIcon = new L.Icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIconRetina,
  shadowUrl: markerShadow,
  iconSize: [25, 41], // Default icon size
  iconAnchor: [12, 41], // Anchor point for the icon
  popupAnchor: [1, -34], // Anchor point for the popup
  shadowSize: [41, 41], // Shadow size
});

export default function Pin({ item }) {
  return (
    <div>
      <Marker
        position={[item.lat, item.long]}
        icon={customIcon} // Use the custom icon
      >
        <Popup>
          <div className="popupContainer">
            <img src={item.image} alt="img" />
            <div className="textContainer">
              <Link
                to={`${item.id}`}
                className="text-truncate text-decoration-none"
                title={item.title}
              >
                {item.title.length > 15
                  ? `${item.title.slice(0, 15)}...`
                  : item.title}
              </Link>
              <span className="bed">{item.badrooms} Bedroom</span>
              <b>$ {item.price}</b>
            </div>
          </div>
        </Popup>
      </Marker>
    </div>
  );
}
