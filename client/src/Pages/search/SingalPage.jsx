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
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { BsEnvelopeArrowUp } from "react-icons/bs";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdAddTask } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";


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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [visitDetails, setVisitDetails] = useState({ name: "", email: "", date: "" });
  const [messageDetails, setMessageDetails] = useState({ message: "" });

  const handleSave = async () => {
    if (!currentUser) {
      navigate("/")
    }
    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_BASEURL}/api/users/save`, { postId: id }, {
        withCredentials: true,
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
    setIsModalOpen(false);
  };

  const handleContactOwner = () => {
    // Handle contact message logic here
    toast.success(`Message sent: ${messageDetails.message}`, {
      position: "bottom-right",
      autoClose: 5000,
      theme: "dark",
      transition: Bounce,
    });
    setIsContactModalOpen(false);
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

    agentPhone = "4545454",
    agentEmail = "@gmail.com",

  } = propertyData;

  return (
    <div className="singlePageContainer pt-5 mt-2">
      <div className="singlePage pt-4 container pb-4">
        <div className="details">
          <div className="wrapper">
            <Slider images={images.length ? images : ["/placeholder.jpg"]} />
            <div className="info">
              <div className="top">
                <div className="post">
                  <h1>{propertyName}</h1>

                  <div className="address d-flex justify-content-between justify-content-center align-items-center">
                    <span><IoLocationOutline className="" />
                      <span className="ps-1">{address}, {city}, {state}</span>
                    </span>
                    <span className="views">Views: {views}</span>
                  </div>
                  <div className="price">{formatPrice(price)}</div>
                </div>

                <div className="user">
                  <img src={user.avatar || "/default-avatar.jpg"} alt="User Avatar" />
                  <span>{user.username || "Unknown"}</span>
                  <div className="contact">
                    <button className="contactBtn btn btn-outline-primary" onClick={openContactModal}>
                      Contact Owner
                    </button>
                  </div>
                </div>
                <div className="features">
                  <div className="wrapper">
                    <p className="title">Property Details</p>
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

                    {/* Dynamic Amenities with Icons */}
                    <p className="title">Property Amenities</p>
                    <div className="listVertical flex flex-wrap flex-row gap-4">
                      {amenities.length > 0 ? (
                        amenities.map((item, index) => {
                          // Map amenity to icon
                          const amenityIcons = {
                            "gym": "https://cdn-icons-png.flaticon.com/128/16496/16496284.png"
                          };

                          // Use mapped icon or default one
                          const icon = amenityIcons[item] || "https://cdn-icons-png.flaticon.com/128/16496/16496284.png";

                          return (
                            <div key={index} className="feature">
                              <img src={icon} alt={`${item} Icon`} />
                              <div className="featureText">
                                <span>{item}</span>
                              </div>
                            </div>
                          );
                        })
                      ) : (
                        <p>No amenities listed.</p>
                      )}
                    </div>

                    {/* Sizes & Rooms */}

                    <p className="title">Sizes & Rooms</p>
                    <div className="sizes d-flex flex-wrap ">
                      <div className="size d-flex align-items-center gap-2">
                        <img src="https://cdn-icons-png.flaticon.com/128/3413/3413667.png" alt="Size Icon" />
                        <span>{size} sqft</span>
                      </div>

                      <div className="size d-flex align-items-center gap-2">
                        <img src="https://cdn-icons-png.flaticon.com/128/864/864595.png" alt="Bedroom Icon" />
                        <span>{bedroom} bedroom</span>
                      </div>

                      <div className="size d-flex align-items-center gap-2">
                        <img src="https://cdn-icons-png.flaticon.com/128/259/259973.png" alt="Bathroom Icon" />
                        <span>{bathroom} bathroom</span>
                      </div>

                      <div className="size d-flex align-items-center gap-2">
                        <img src="https://cdn-icons-png.flaticon.com/128/14431/14431419.png" alt="Balcony Icon" />
                        <span>{balcony} balcony</span>
                      </div>
                    </div>


                    {/* Nearby Places */}

                    <p className="title mt-3">Nearby Places</p>
                    {/* Dynamically Rendered Nearby Places (Column Layout) */}
                    <div className="listVertical d-flex flex-column gap-3">
                      {nearbyPlaces.length > 0 ? (
                        nearbyPlaces.map((place, index) => {
                          const placeIcons = {
                            "school": "https://cdn-icons-png.flaticon.com/128/158/158234.png",
                            "bus Stop": "https://cdn-icons-png.flaticon.com/128/9830/9830523.png",
                            "restaurant": "https://cdn-icons-png.flaticon.com/128/562/562678.png",
                            "hospital": "https://cdn-icons-png.flaticon.com/128/10480/10480839.png",
                            "mall": "https://cdn-icons-png.flaticon.com/128/2334/2334514.png",
                            "park": "https://cdn-icons-png.flaticon.com/128/854/854878.png",
                          };

                          const icon = placeIcons[place] || "https://cdn-icons-png.flaticon.com/128/3061/3061732.png"; // Default icon
                          const distance = nearbyDistances[place] || "Unknown";

                          return (
                            <div key={index} className="feature d-flex align-items-center ">
                              <img src={icon} alt={`${place} Icon`} className="img-fluid" />
                              <div className="featureText">
                                <span>{place}</span>
                                <p>
                                  {distance !== "Unknown"
                                    ? (distance < 1 ? Math.round(distance * 1000) + " m" : distance + " km")
                                    : "Unknown distance"} away
                                </p>
                              </div>
                            </div>
                          );
                        })
                      ) : (
                        <p>No nearby places listed.</p>
                      )}
                    </div>
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
            <p className="title ">Location</p>
            <div className="mapContainer">
              <Map className="map" items={[propertyData]} smallMap={smallMap} />
            </div>

            <div className="buttons pb-5">
              <button onClick={openScheduleModal}>
                {/* <img src= alt="Schedule Visit" /> */}
                <span className="img">{<FaRegCalendarAlt />}</span>
                Schedule a Visit
              </button>
              <button
                onClick={handleSave}
                style={{ backgroundColor: saved ? "#fece51" : "white", }}>
                <span className="img"><MdAddTask /></span>
                {saved ? "Place Saved" : "Save the Place"}
              </button>
            </div>

            {/* contact form  */}

            <form className="contact-form bg-white p-4 rounded shadow mt-4 border border-light mx-auto" style={{ maxWidth: '500px' }}>
              <h4 className="text-center mb-3 fw-lighter">Contact the Owner</h4>


              <div className="User d-flex justify-content-center align-items-center gap-3">
                <img className="" src={user.avatar || "/default-avatar.jpg"} alt="User Avatar" style={{ width: '50px', height: '50px', borderRadius: `100%` }} />
                <h5 className="">{user.username || "Unknown"}</h5>
              </div>

              <div className="mb-3">
                <label htmlFor="name" className="form-label">Full Name</label>
                <div className="input-group">
                  <span className="input-group-text"><FaRegCircleUser /></span>
                  <input type="text" id="name" className="form-control" placeholder="John Doe" required />
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone Number</label>
                <div className="input-group">
                  <span className="input-group-text"><MdOutlineWifiCalling3 /></span>
                  <input type="text" id="phone" className="form-control" placeholder="(123) 456-7890" required />
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email Address</label>
                <div className="input-group">
                  <span className="input-group-text"><BsEnvelopeArrowUp /></span>
                  <input type="email" id="email" className="form-control" placeholder="example@mail.com" required />
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">Your Message</label>
                <textarea id="message" rows="4" className="form-control p-2" placeholder="Write your message here..." required></textarea>
              </div>

              <div className="mb-3">
                <label htmlFor="contactReason" className="form-label">Reason for Contact</label>
                <select id="contactReason" className="form-select" required>
                  <option value="">Select a reason</option>
                  <option value="inquiry">Property Inquiry</option>
                  <option value="visit">Schedule a Visit</option>
                  <option value="offer">Make an Offer</option>
                </select>
              </div>

              <button type="submit" className="btn btn-primary w-100">Send Message</button>
            </form>

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
              <h6>{agentPhone && <p>Phone: {agentPhone}</p>}</h6>
              <h6>{agentEmail && <p>Email: {agentEmail}</p>}</h6>
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

