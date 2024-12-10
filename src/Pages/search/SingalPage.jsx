import "./SingalPage.scss";
import Slider from "../../Components/Slider";
import Map from "./Map";
import { PropertyData } from "../../../lib/propertyData";
import { useParams } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";

function SinglePage() {
  const { id } = useParams(); 
  const parsedId = parseInt(id, 10); 
  console.log("Parsed ID from params:", parsedId);

  const propertyData = PropertyData.find((item) => item.id === parsedId); 
console.log(propertyData)
  if (!propertyData) {
    return <div className="pt-5 mt-5 h-100">Property not found!</div>;
  }
  return (
   <div className="singlePageContainer pt-5">
     <div className="singlePage pt-4 container">
      <div className="details">
        <div className="wrapper">
          <Slider images={propertyData.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{propertyData.title}</h1>
                <div className="address">
                <IoLocationOutline/>
                  <span>{propertyData.address}</span>
                </div>
                <div className="price">$ {propertyData.price}</div>
              </div>
              <div className="user">
                <img src={propertyData.ownerImg} alt="" />
                <span>{propertyData.ownerName}</span>
              </div>
            </div>
            <div className="bottom">{propertyData.description}</div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="listVertical">
            <div className="feature">
              <img src="https://cdn-icons-png.flaticon.com/128/11670/11670393.png" alt="" />
              <div className="featureText">
                <span>Utilities</span>
                <p>Renter is responsible</p>
              </div>
            </div>
            <div className="feature">
              <img src="https://cdn-icons-png.flaticon.com/128/16757/16757980.png" alt="" />
              <div className="featureText">
                <span>Pet Policy</span>
                <p>Pets Allowed</p>
              </div>
            </div>
            <div className="feature">
              <img src="https://cdn-icons-png.flaticon.com/128/1611/1611179.png" alt="" />
              <div className="featureText">
                <span>Property Fees</span>
                <p>Must have 3x the rent in total household income</p>
              </div>
            </div>
          </div>
          <p className="title">Sizes</p>
          <div className="sizes">
            <div className="size">
              <img src="https://cdn-icons-png.flaticon.com/128/3413/3413667.png" alt="" />
              <span>80 sqft</span>
            </div>
            <div className="size">
              <img src="https://cdn-icons-png.flaticon.com/128/864/864595.png" alt="" />
              <span>2 beds</span>
            </div>
            <div className="size">
              <img src="https://cdn-icons-png.flaticon.com/128/259/259973.png" alt="" />
              <span>1 bathroom</span>
            </div>
          </div>
          <p className="title mt-3">Nearby Places</p>
          <div className="listHorizontal">
            <div className="feature">
              <img src="https://cdn-icons-png.flaticon.com/128/158/158234.png" alt="" />
              <div className="featureText">
                <span>School</span>
                <p>250m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="https://cdn-icons-png.flaticon.com/128/9830/9830523.png" alt="" />
              <div className="featureText">
                <span>Bus Stop</span>
                <p>100m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="https://cdn-icons-png.flaticon.com/128/562/562678.png" alt="" />
              <div className="featureText">
                <span>Restaurant</span>
                <p>200m away</p>
              </div>
            </div>
          </div>
          <p className="title mt-3 pb-3">Location</p>
          <div className="mapContainer">
            <Map items={[propertyData]} />
          </div>
          <div className="buttons">
            <button>
              <img src="/chat.png" alt="" />
              Send a Message
            </button>
            <button>
              <img src="/save.png" alt="" />
              Save the Place
            </button>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
}

export default SinglePage;