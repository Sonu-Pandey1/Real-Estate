 import "./map.scss"
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from 'react-leaflet'
import Pin from "../../Components/Pin";

export default function Map({items}) {
  return (
    // <div>
    <MapContainer center={[28.4797,77.20259]} zoom={10} scrollWheelZoom={false} className="map ">

    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {items.map(item=>(
      <Pin key={item.id} item={item}/>
    ))}
  </MapContainer>
    // </div>
  )
}





