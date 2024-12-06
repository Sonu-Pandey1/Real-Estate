// import "./SingalPage.scss"

// export default function SingalPage() {
//   return (
//     <>
//         <div className="SingalPageContainer">
//             <h1>Singal Page</h1>
//         </div>
//     </>
//   )
// }

import { useParams } from "react-router-dom";
import "./SingalPage.scss";

export default function SingalPage() {
  const { id } = useParams();

  // Simulate property details data
  const propertyDetails = {
    id: 1,
    title: "3 BHK Apartment in Sector 84",
    price: "₹80 Lacs",
    area: "1,200 sqft",
    city: "Noida",
    locality: "Sector 84",
    image: "https://via.placeholder.com/600",
    description: "Spacious 3 BHK apartment with modern amenities.",
  };

  return (
    <div className="single-page">
      <h2>{propertyDetails.title}</h2>
      <img src={propertyDetails.image} alt={propertyDetails.title} />
      <p><strong>Price:</strong> {propertyDetails.price}</p>
      <p><strong>Area:</strong> {propertyDetails.area}</p>
      <p><strong>City:</strong> {propertyDetails.city}</p>
      <p><strong>Locality:</strong> {propertyDetails.locality}</p>
      <p><strong>Description:</strong> {propertyDetails.description}</p>
    </div>
  );
}
