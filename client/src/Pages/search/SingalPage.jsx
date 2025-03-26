import "./SingalPage.scss";
import Slider from "../../Components/Slider";
import Map from "./Map";
import { useNavigate, useParams } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import axios from "axios";
import DOMPurify from "dompurify";
import { Bounce, toast } from "react-toastify";
import { Modal } from 'react-bootstrap';

function SinglePage() {
  let smallMap = true;
  const { id } = useParams();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [propertyData, setPropertyData] = useState(null);
  console.log(propertyData)
  const { currentUser, formatPrice } = useContext(AuthContext);
  const navigate = useNavigate();
  const [saved, setSaved] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false); // For Schedule Visit Modal
  const [isContactModalOpen, setIsContactModalOpen] = useState(false); // For Contact Owner Modal
  const [visitDetails, setVisitDetails] = useState({ name: "", email: "", date: "" });
  const [messageDetails, setMessageDetails] = useState({ message: "" });

  const handleSave = async () => {
    // setSaved((prev)=> !prev);
    if (!currentUser) {
      navigate("/")
    }
    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_BASEURL}/api/users/save`, { postId: id }, {
        withCredentials: true, // Include cookies in the request
      });
      // console.log(response.data.message)
      toast.success("" + (response.data.message || "Property saved!"), {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
        transition: Bounce,
      });
      setSaved(!saved)
    } catch (err) {
      // console.log(error)
      toast.error("❌ " + (err.response.data.error || "Something went wrong"), {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
        transition: Bounce,
      });
    }
  }

  // Functions to handle opening modals

  const openScheduleModal = () => {
    setIsModalOpen(true);
  };

  const openContactModal = () => {
    setIsContactModalOpen(true);
  };

  const handleScheduleVisit = () => {
    // Handle scheduling logic here
    toast.success(`Visit scheduled for ${visitDetails.date}`, {
      position: "bottom-right",
      autoClose: 5000,
      theme: "dark",
      transition: Bounce,
    });
    setIsModalOpen(false); // Close the modal after successful scheduling
  };

  const handleContactOwner = () => {
    // Handle contact message logic here
    toast.success(`Message sent: ${messageDetails.message}`, {
      position: "bottom-right",
      autoClose: 5000,
      theme: "dark",
      transition: Bounce,
    });
    setIsContactModalOpen(false); // Close the modal after successful message
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_BASEURL}/api/posts/${id}`, {
          withCredentials: true,
        });
        console.log(response.data)
        if (response.data) {
          setPropertyData(response.data);
          setSaved(response.data.isSaved || false);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);


  if (loading) {
    return (
      <div className="loading-container">
        <div className="loader">
          <div className="spinner"></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (!propertyData) {
    return <div className="error-message">Property not found!</div>;
  }

  const {
    propertyName,
    address,
    price,
    images = [],
    bathroom,
    bedroom,
    user = {},
    description,
    views,
    amenities = [],
    propertyType,
    buildingType,
    listingType,
    size,
    city,
    state,
    parking,
    balcony,
    nearbyPlaces = [],
    nearbyDistances = {},

    latitude,
    longitude,
    agentPhone,
    agentEmail,
  } = propertyData;

  const { username, avatar } = user || {};

  return (
    <div className="singlePageContainer pt-5">
      <div className="singlePage pt-4 container pb-4">
        <div className="details">
          <div className="wrapper">
            {/* <Slider images={images || []} /> */}
            <Slider images={images.length ? images : ["/placeholder.jpg"]} />
            <div className="info">
              <div className="top">
                <div className="post">
                  <h1>{propertyName}</h1>
                  <div className="address">
                    <IoLocationOutline />
                    <span>{address}, {city}, {state}</span>
                  </div>
                  <div className="price">{formatPrice(price)}</div>
                  {/* <div className="views">Views: {views}</div> */}
                </div>
                {/* <div className="user">
                  <img src={avatar} alt="User Avatar" />
                  <span>{username}</span>
                </div> */}
                <div className="user">
                  <img src={user.avatar || "/default-avatar.jpg"} alt="User Avatar" />
                  <span>{user.username || "Unknown"}</span>
                  <div className="contact">
                    <button className="contactBtn" onClick={openContactModal}>
                      Contact Owner
                    </button>
                    {agentPhone && <p>Phone: {agentPhone}</p>}
                    {agentEmail && <p>Email: {agentEmail}</p>}
                  </div>
                </div>
              </div>
              <div
                className="bottom description"
                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description || "No description available.") }}
              ></div>
            </div>
          </div>
        </div>

        <div className="features">
          <div className="wrapper">
            <div className="propertyDetails">
              <div className="propertyType">
                <strong>Property Type:</strong> {propertyType || "N/A"}
              </div>
              <div className="buildingType">
                <strong>Building Type:</strong> {buildingType || "N/A"}
              </div>
              <div className="listingType">
                <strong>Listing Type:</strong> {listingType || "N/A"}
              </div>
              <div className="size">
                <strong>Size:</strong> {size} sqft
              </div>
              <div className="rooms">
                <span>{bedroom} Bedroom</span>
                <span>{bathroom} Bathroom</span>
              </div>
              <div className="parking">
                <strong>Parking:</strong> {parking || "Not specified"}
              </div>
              <div className="balcony">
                <strong>Balcony:</strong> {balcony ? "Yes" : "No"}
              </div>
            </div>

            <p className="title">Property Details</p>
             {/* <div className="listVertical">
//               <div className="feature">
//                 <img
//                   src="https://cdn-icons-png.flaticon.com/128/11670/11670393.png"
//                   alt="Utilities Icon"
//                 />
//                 <div className="featureText">
//                   <span>{utilities}</span>
//                   <p>Renter is responsible</p>
//                 </div>
//               </div>
//               <div className="feature">
//                 <img
//                   src="https://cdn-icons-png.flaticon.com/128/16757/16757980.png"
//                   alt="Pet Policy Icon"
//                 />
//                 <div className="featureText">
//                   <span>Pet Policy</span>
//                   <p>{pet}</p>
//                 </div>
//               </div>
//               <div className="feature">
//                 <img
//                   src="https://cdn-icons-png.flaticon.com/128/1611/1611179.png"
//                   alt="Property Fees Icon"
//                 />
//                 <div className="featureText">
//                   <span>Property Fees</span>
//                   <p>{income}</p>
//                 </div>
//               </div>
             </div> */}
            <div className="listVertical">
              {amenities.length > 0 ? amenities.map((item, index) => (
                <div key={index} className="feature">
                  <span>{item}</span>
                </div>
              )) : <p>No amenities listed.</p>}
            </div>

            <p className="title">Sizes & Rooms</p>
{/* //             <div className="sizes">
//               <div className="size">
//                 <img
//                   src="https://cdn-icons-png.flaticon.com/128/3413/3413667.png"
//                   alt="Size Icon"
//                 />
//                 <span>{size} sqft</span>
//               </div>
//               <div className="size">
//                 <img
//                   src="https://cdn-icons-png.flaticon.com/128/864/864595.png"
//                   alt="Bedroom Icon"
//                 />
//                 <span>{bedroom} bedroom</span>
//               </div>
//               <div className="size">
//                 <img
//                   src="https://cdn-icons-png.flaticon.com/128/259/259973.png"
//                   alt="Bathroom Icon"
//                 />
//                 <span>{bathroom} bathroom</span>
//               </div>
//             </div> */}
            <div className="sizes">
              <span>{size} sqft</span>
              <span>{bedroom} Bedroom</span>
              <span>{bathroom} Bathroom</span>
            </div>

            <p className="title mt-3">Nearby Places</p>
            {/* <div className="listHorizontal">
              <div className="feature">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/158/158234.png"
                  alt="School Icon"
                />
                <div className="featureText">
                  <span>School</span>
                  <p>
                    {school > 999 ? school / 1000 + " km" : school + " m"} away
                  </p>
                </div>
              </div>

              <div className="feature">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/9830/9830523.png"
                  alt="Bus Stop Icon"
                />
                <div className="featureText">
                  <span>Bus Stop</span>
                  <p>{bus > 999 ? bus / 1000 + " km" : bus + " m"} away</p>
                </div>
              </div>
              <div className="feature">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/562/562678.png"
                  alt="Restaurant Icon"
                />
                <div className="featureText">
                  <span>Restaurant</span>
                  <p>
                    {restaurant > 999
                      ? restaurant / 1000 + " km"
                      : restaurant + " m"}{" "}
                    away
                  </p>
                </div>
              </div>
            </div> */}
            <div className="listHorizontal">
              {nearbyPlaces.length > 0 ? nearbyPlaces.map((place, index) => (
                <div key={index} className="feature">
                  <span>{place}</span>
                  <p>{nearbyDistances[place] || "Unknown distance"} away</p>
                </div>
              )) : <p>No nearby places listed.</p>}
            </div>

            <p className="title mt-3 pb-3">Location</p>
            <div className="mapContainer">
              <Map className="map" items={[propertyData]} smallMap={smallMap} />
            </div>

            <div className="buttons">
              <button onClick={openScheduleModal}>
                <img src="/calendar.png" alt="Schedule Visit" />
                Schedule a Visit
              </button>
              <button
                onClick={handleSave}
                style={{
                  backgroundColor: saved ? "#fece51" : "white",
                }}
              >
                <img src="/save.png" alt="Save" />
                {saved ? "Place Saved" : "Save the Place"}
              </button>

            </div>
          </div>
        </div>
      </div>

      {/* Schedule Visit Modal */}
      <Modal show={isModalOpen} onHide={() => setIsModalOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Schedule a Visit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleScheduleVisit}>
            <div className="mb-3">
              <label htmlFor="visitName" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="visitName"
                value={visitDetails.name}
                onChange={(e) => setVisitDetails({ ...visitDetails, name: e.target.value })}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="visitEmail" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="visitEmail"
                value={visitDetails.email}
                onChange={(e) => setVisitDetails({ ...visitDetails, email: e.target.value })}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="visitDate" className="form-label">Preferred Visit Date</label>
              <input
                type="date"
                className="form-control"
                id="visitDate"
                value={visitDetails.date}
                onChange={(e) => setVisitDetails({ ...visitDetails, date: e.target.value })}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">Confirm Visit</button>
          </form>
        </Modal.Body>
      </Modal>

      {/* Contact Owner Modal */}
      <Modal show={isContactModalOpen} onHide={() => setIsContactModalOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Owner</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleContactOwner}>
            <div className="mb-3">
              <label htmlFor="contactMessage" className="form-label">Message</label>
              <textarea
                className="form-control"
                id="contactMessage"
                rows="4"
                value={messageDetails.message}
                onChange={(e) => setMessageDetails({ ...messageDetails, message: e.target.value })}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default SinglePage;

