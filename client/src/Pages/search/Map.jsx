
import "./map.scss";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import Pin from "../../Components/Pin";

export default function Map({ items, smallMap }) {
  if (!items || items.length === 0) {
    return <p>No locations available.</p>;
  }

  // console.log("Map loaded:", items); 


  const mapData = items.map((property) => ({
    id: property.id || "N/A",
    propertyName: property.propertyName || "No Title",
    image: property.images?.[0] || "default-image.jpg",
    price: property.price || "Price not available",
    bedrooms: property.bedroom || 0, 
    lat: property.lat || 0,
    long: property.long || 0,
  }));

  // console.log("Map data:", mapData); 

  return (
    <MapContainer
      center={[mapData[0]?.lat || 0, mapData[0]?.long || 0]}
      zoom={9}
      scrollWheelZoom={false}
      className={`map ${smallMap ? "h-100" : ""}`}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {mapData.map((item) => (
        <Pin key={item.id} item={item} />
      ))}
    </MapContainer>
  );
}
