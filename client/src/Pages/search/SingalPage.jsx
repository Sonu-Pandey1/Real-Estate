import "./SingalPage.scss";
import Slider from "../../Components/Slider";
import Map from "./Map";
import { useNavigate, useParams } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { useEffect, useState,useContext } from "react";
import {AuthContext} from "..//../Context/AuthContext";
import axios from "axios";
import DOMPurify from "dompurify";
import { Bounce, toast } from "react-toastify";

function SinglePage() {
  let smallMap = true;
  const { id } = useParams();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [propertyData, setPropertyData] = useState(null);
  const {currentUser} = useContext(AuthContext);
  const navigate = useNavigate();
  const [saved,setSaved] = useState(false);
  

  const handleSave =async ()=>{
    // setSaved((prev)=> !prev);
    if(!currentUser){
      navigate("/")
    }
    try {
      const response  = await axios.post(`${import.meta.env.VITE_BACKEND_BASEURL}/api/users/save`,{ postId: id }, {
        withCredentials: true, // Include cookies in the request
      });
      // console.log(response.data.message)
      toast.success("" + (response.data.message || ""), {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true, 
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
        transition:Bounce,
      });
      setSaved(!saved)
    } catch (err) {
      // console.log(error)
      toast.error("❌ "+ (err.response.data.error || ""), {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
        transition:Bounce,
      });
    }
  }


  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_BACKEND_BASEURL}/api/posts/${id}`, {
                withCredentials: true,
            });
            // console.log(response.data)
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
          <div className="spinner"></div> {/* Optional spinner animation */}
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

  const { title, address, price, images, bathroom, bedroom, user, postDetail } =
    propertyData;

  const { username, avatar} = user || {};
  const { desc, utilities, pet, income, size, school, bus, restaurant } =
    postDetail || {};

  return (
    <div className="singlePageContainer pt-5">
      <div className="singlePage pt-4 container pb-4">
        <div className="details">
          <div className="wrapper">
            <Slider images={images || []} />
            <div className="info">
              <div className="top">
                <div className="post">
                  <h1>{title}</h1>
                  <div className="address">
                    <IoLocationOutline />
                    <span>{address}</span>
                  </div>
                  <div className="price">$ {price}</div>
                </div>
                <div className="user">
                  <img src={avatar} alt="User Avatar" />
                  <span>{username}</span>
                </div>
              </div>
              <div
                className="bottom"
                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(desc) }}
              ></div>
            </div>
          </div>
        </div>
        <div className="features">
          <div className="wrapper">
            <p className="title">General</p>
            <div className="listVertical">
              <div className="feature">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/11670/11670393.png"
                  alt="Utilities Icon"
                />
                <div className="featureText">
                  <span>{utilities}</span>
                  <p>Renter is responsible</p>
                </div>
              </div>
              <div className="feature">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/16757/16757980.png"
                  alt="Pet Policy Icon"
                />
                <div className="featureText">
                  <span>Pet Policy</span>
                  <p>{pet}</p>
                </div>
              </div>
              <div className="feature">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/1611/1611179.png"
                  alt="Property Fees Icon"
                />
                <div className="featureText">
                  <span>Property Fees</span>
                  <p>{income}</p>
                </div>
              </div>
            </div>
            <p className="title">Sizes</p>
            <div className="sizes">
              <div className="size">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/3413/3413667.png"
                  alt="Size Icon"
                />
                <span>{size} sqft</span>
              </div>
              <div className="size">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/864/864595.png"
                  alt="Bedroom Icon"
                />
                <span>{bedroom} bedroom</span>
              </div>
              <div className="size">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/259/259973.png"
                  alt="Bathroom Icon"
                />
                <span>{bathroom} bathroom</span>
              </div>
            </div>
            <p className="title mt-3">Nearby Places</p>
            <div className="listHorizontal">
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
            </div>
            <p className="title mt-3 pb-3">Location</p>
            <div className="mapContainer">
              <Map className="map" items={[propertyData]} smallMap={smallMap} />
            </div>
            <div className="buttons">
            <button>
              <img src="/chat.png" alt="" />
              Send a Message
            </button>
            <button
              onClick={handleSave}
              style={{
                backgroundColor: saved ? "#fece51" : "white",
              }}
            >
              <img src="/save.png" alt="" />
              {saved ? "Place Saved" : "Save the Place"}
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;






