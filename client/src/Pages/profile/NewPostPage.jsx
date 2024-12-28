

import { useState } from "react";
import "./NewPostPage.scss";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import UploadWidget from "../../Components/UploadWidget";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function NewPostPage() {
  const [value, setValue] = useState("");
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const inputs = Object.fromEntries(formData);

    // inputs.offer = inputs.offer === "on";
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_BASEURL}/api/posts`,
        {
          postData: {
            title: inputs.title,
            price: parseInt(inputs.price),
            address: inputs.address,
            city: inputs.city,
            bedroom: parseInt(inputs.bedroom),
            bathroom: parseInt(inputs.bathroom),
            type: inputs.type,
            property: inputs.property,
            propertyCondition: inputs.propertyCondition,
            parking: inputs.parking,
            // offer: inputs.offer  , // Convert checkbox value to boolean
            lat: inputs.latitude,
            long: inputs.longitude,
            images: images,
          },
          postDetail: {
            desc: value,
            utilities: inputs.utilities,
            pet: inputs.pet,
            income: inputs.income,
            size: parseInt(inputs.size),
            school: parseInt(inputs.school),
            bus: parseInt(inputs.bus),
            restaurant: parseInt(inputs.restaurant),
          },
        },
        {
          withCredentials: true, // Include cookies in the request
        }
      );
      navigate("/profile/" + res.data.id);
    } catch (err) {
      console.log(err);
      setError("Error while submitting the post. Please try again.");
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  
  //   // Collect form data
  //   const formData = new FormData(e.target);
  //   const inputs = Object.fromEntries(formData);
  
  //   // Convert checkbox and numeric fields to appropriate types
  //   inputs.offer = inputs.offer === "true" || inputs.offer === true; // Convert checkbox value to boolean
  //   inputs.price = parseInt(inputs.price, 10);
  //   inputs.bedroom = parseInt(inputs.bedroom, 10);
  //   inputs.bathroom = parseInt(inputs.bathroom, 10);
  //   inputs.size = parseInt(inputs.size || 0, 10); // Optional field, default to 0 if empty
  //   inputs.school = parseInt(inputs.school || 0, 10); // Optional field, default to 0 if empty
  //   inputs.bus = parseInt(inputs.bus || 0, 10); // Optional field, default to 0 if empty
  //   inputs.restaurant = parseInt(inputs.restaurant || 0, 10); // Optional field, default to 0 if empty
  
  //   // Prepare payload
  //   const payload = {
  //     postData: {
  //       title: inputs.title,
  //       price: inputs.price,
  //       address: inputs.address,
  //       city: inputs.city,
  //       bedroom: inputs.bedroom,
  //       bathroom: inputs.bathroom,
  //       type: inputs.type,
  //       property: inputs.property,
  //       propertyCondition: inputs.propertyCondition,
  //       parking: inputs.parking,
  //       offer: inputs.offer,
  //       lat: inputs.latitude,
  //       long: inputs.longitude,
  //       images: images, // Ensure 'images' is correctly managed in component state
  //     },
  //     postDetail: {
  //       desc: value, // Assuming 'value' is managed by ReactQuill's onChange handler
  //       utilities: inputs.utilities,
  //       pet: inputs.pet,
  //       income: inputs.income,
  //       size: inputs.size,
  //       school: inputs.school,
  //       bus: inputs.bus,
  //       restaurant: inputs.restaurant,
  //     },
  //   };
  
  //   // Send data to the backend
  //   try {
  //     const res = await axios.post(
  //       `${import.meta.env.VITE_BACKEND_BASEURL}/api/posts`,
  //       payload,
  //       { withCredentials: true } // Include credentials for authentication
  //     );
  
  //     // Navigate to the newly created post's profile
  //     navigate("/profile/" + res.data.id);
  //   } catch (err) {
  //     console.error("Error while submitting the post:", err);
  //     setError("Error while submitting the post. Please try again.");
  //   }
  // };
  

  
  return (
    <div className="newPostPage">
      <div className="container">
        <div className="row">
          <div className="formContainer col-lg-8">
            <h1>Create a Listing</h1>
            <form onSubmit={handleSubmit} className="form">
              <div className="formGrid">
                <div className="item">
                  <label htmlFor="title">Title</label>
                  <input
                    id="title"
                    name="title"
                    type="text"
                    placeholder="Enter title"
                    required
                  />
                </div>
                <div className="item">
                  <label htmlFor="price">Price</label>
                  <input
                    min={1}
                    id="price"
                    name="price"
                    type="number"
                    placeholder="Enter price"
                    required
                  />
                </div>
                <div className="item">
                  <label htmlFor="address">Address</label>
                  <input
                    id="address"
                    name="address"
                    type="text"
                    placeholder="Enter address"
                    required
                  />
                </div>
                <div className="item">
                  <label htmlFor="city">City</label>
                  <input
                    id="city"
                    name="city"
                    type="text"
                    placeholder="Enter city"
                    required
                  />
                </div>
                <div className="item">
                  <label htmlFor="size">Total Size (sqft)</label>
                  <input min={0} id="size" name="size" type="number" placeholder="Enter Size" />
                </div>
                <div className="item">
                  <label htmlFor="latitude">Latitude</label>
                  <input
                    id="latitude"
                    name="latitude"
                    type="text"
                    placeholder="Enter latitude"
                    required
                  />
                </div>
                <div className="item">
                  <label htmlFor="longitude">Longitude</label>
                  <input
                    id="longitude"
                    name="longitude"
                    type="text"
                    placeholder="Enter longitude"
                    required
                  />
                </div>
                <div className="item">
                  <label htmlFor="bedroom">Bedrooms</label>
                  <input
                    min={1}
                    id="bedroom"
                    name="bedroom"
                    type="number"
                    placeholder="Enter number of bedrooms"
                    required
                  />
                </div>
                <div className="item">
                  <label htmlFor="bathroom">Bathrooms</label>
                  <input
                    min={1}
                    id="bathroom"
                    name="bathroom"
                    type="number"
                    placeholder="Enter number of bathrooms"
                    required
                  />
                </div>
                <div className="item">
                  <label htmlFor="type">Listing Type</label>
                  <select name="type" className="custom-select" required>
                    <option className="" value="rent">Buy</option>
                    <option value="buy">Rent</option>
                    <option value="buy">Commercial</option>
                    <option value="buy">Plots</option>
                    <option value="buy">Pg / Co-living</option>
                  </select>
                </div>
                <div className="item">
                  <label htmlFor="property">Property Type</label>
                  <select name="property" className="custom-select" required>
                    <option value="apartment">Apartment</option>
                    <option value="house">House</option>
                    <option value="condo">Vila</option>
                    <option value="land">Plot</option>
                    <option value="land">Shop</option>
                  </select>
                </div>
                <div className="item">
                  <label htmlFor="propertyCondition">Property Condition</label>
                  <select name="propertyCondition" className="custom-select" required>
                    <option value="row">Row</option>
                    <option value="semi-furnished">Semi-Furnished</option>
                    <option value="furnished">Furnished</option>
                  </select>
                </div>
                <div className="item">
                  <label htmlFor="parking">Parking</label>
                  <select name="parking" className="custom-select" required>
                    <option value="none">None</option>
                    <option value="street">Covered</option>
                    <option value="street">Open</option>
                    <option value="garage">Garage</option>
                  </select>
                </div>

                <div className="item">
                  <label htmlFor="utilities">Utilities Policy</label>
                  <select name="utilities" className="custom-select">
                    <option value="owner">Owner is responsible</option>
                    <option value="tenant">Tenant is responsible</option>
                    <option value="shared">Shared</option>
                  </select>
                </div>
                <div className="item">
                  <label htmlFor="pet">Pet Policy</label>
                  <select name="pet" className="custom-select">
                    <option value="allowed">Allowed</option>
                    <option value="not-allowed">Not Allowed</option>
                  </select>
                </div>
                <div className="item">
                  <label htmlFor="income">Income Policy</label>
                  <input
                    id="income"
                    name="income"
                    type="text"
                    placeholder="Income Policy"
                  />
                </div>
                <div className="item">
                  <label htmlFor="school">School</label>
                  <input min={0} id="school" name="school" type="number" placeholder="Enter school distance" />
                </div>
                <div className="item">
                  <label htmlFor="bus">Bus</label>
                  <input min={0} id="bus" name="bus" type="number" placeholder="Enter bus-stop distance" />
                </div>
                <div className="item">
                  <label htmlFor="restaurant">Restaurant</label>
                  <input min={0} id="restaurant" name="restaurant" type="number" placeholder="Enter restaurant distance" />
                </div>
                {/* <div className="item">
                  <label htmlFor="offer" className="form-check-label">Offer Available
                  </label>
                    <input
                      type="checkbox"
                      name="offer"
                      id="offer"
                      className="form-check-input ms-0 mt-2"
                    />
                    
                </div> */}
              </div>
              <div className="item description">
                <label htmlFor="desc">Description</label>
                <ReactQuill theme="snow" onChange={setValue} value={value} placeholder="Enter Your Description Here... " />
              </div>
              <div className="submitSection">
                <button className="btn btn-outline-primary">
                  Post Listing
                </button>
                {error && <span className="errorMessage">{error}</span>}
              </div>
            </form>
          </div>
          <div className="sideContainer col-lg-4 text-center">
            <h3>Upload Images</h3>
            <div className="imagesPreview">
              {images.length > 0 ? (
                images.map((image, index) => (
                  <img src={image} key={index} alt="Uploaded" />
                ))
              ) : (
                <div className="defaultIcon">
                  <img
                    src="https://cdn-icons-gif.flaticon.com/17626/17626903.gif"
                    alt="No images uploaded!"
                  />
                  <p>No images uploaded!</p>
                </div>
              )}
            </div>
            <div className="mt-4">
            <UploadWidget
                uwConfig={{
                  cloudName: `${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}`,
                  uploadPreset: `${
                    import.meta.env.VITE_CLOUDNARY_UPLOAD_PRESET
                  }`,
                  multiple: true,
                  maxImageFileSize: 5000000,
                  folder: "posts",
                  styles: {
                    palette: {
                      windowBorder: "#0018ff", 
                      inactiveTabIcon: "#C4C5CC", 
                      link: "#0078FF",
                    },
                  },
                }}
                setState={setImages}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewPostPage;
