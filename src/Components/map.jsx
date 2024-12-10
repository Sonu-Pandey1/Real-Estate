import "./map.scss"
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from 'react-leaflet'
import Pin from "./Pin";

 function Map({items}) {
  return (
    // <div>
    <MapContainer center={[52.4797, -1.90269]} zoom={6} scrollWheelZoom={false} className="map ">

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

export default Map;



