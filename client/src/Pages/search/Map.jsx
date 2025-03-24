//  import "./map.scss"
// import "leaflet/dist/leaflet.css";
// import { MapContainer, TileLayer } from 'react-leaflet'
// import Pin from "../../Components/Pin";

// export default function Map({items,smallMap}) {

//   const coordinates = items.map((item) => ({
//     lat: item.lat,
//     long: item.long,
//   }));
  
  
//   return (
//     // <div>
//     <MapContainer center={[coordinates[0]?.lat || 0, coordinates[0]?.long || 0]} zoom={10} scrollWheelZoom={false} className={`map ${smallMap?"h-100":""} `}>

//     <TileLayer
//       attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//     />
//     {items.map(item=>(
//       <Pin key={item.id} item={item}/>
//     ))}
//   </MapContainer>
//     // </div>
//   )
// }




import "./map.scss";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import Pin from "../../Components/Pin";

export default function Map({ items, smallMap }) {
  // Handle empty items gracefully
  if (!items || items.length === 0) {
    return <p>No locations available.</p>;
  }

  const coordinates = items.map((item) => ({
    lat: item.lat,
    lng: item.lng, // Fixed incorrect "long" property
  }));

  return (
    <MapContainer
      center={[coordinates[0]?.lat || 0, coordinates[0]?.lng || 0]}
      zoom={10}
      scrollWheelZoom={false}
      className={`map ${smallMap ? "h-100" : ""}`}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {items.map((item) => (
        <Pin key={item.id} item={item} />
      ))}
    </MapContainer>
  );
}

