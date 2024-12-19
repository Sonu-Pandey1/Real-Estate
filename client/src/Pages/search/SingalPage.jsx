import "./SingalPage.scss";
import Slider from "../../Components/Slider";
import Map from "./Map";
import { useParams } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import DOMPurify from "dompurify";

function SinglePage() {
  let smallMap = true;
  const { id } = useParams();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [propertyData, setPropertyData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/posts/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch property data.");
        }
        const data = await response.json();
        if (data?.postDetail) {
          setPropertyData(data);
        } else {
          throw new Error("Invalid property data structure.");
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

  const { username, avatar } = user || {};
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
