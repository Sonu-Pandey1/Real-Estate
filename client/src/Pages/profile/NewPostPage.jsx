import { useState } from "react";
import "./NewPostPage.scss";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import UploadWidget from "../../Components/UploadWidget";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import addListingSchema from "../../../lib/schemas/AddListing";
import { useFormik } from "formik";
import { Bounce, toast } from "react-toastify";

function NewPostPage() {
  // const [value, setValue] = useState("");
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
    setFieldTouched,
    isSubmitting,
  } = useFormik({
    initialValues: {
      title: "",
      price: "",
      address: "",
      city: "",
      size: "",
      lat: "",
      long: "",
      bedroom: "",
      bathroom: "",
      listingType: "buy",
      propertyType: "Apartment",
      // propertyCondition: "row",
      // parking: "none",
      desc: "",
      uPolicy: "owner is responsible",
      petPolicy: "Allowed",
      iPolicy: "",
      school: "",
      bus: "",
      restaurant: "",
    },
    validationSchema: addListingSchema,
    onSubmit: async (values) => {
      try {
        const res = await axios.post(
          `${import.meta.env.VITE_BACKEND_BASEURL}/api/posts`,
          {
            postData: {
              title: values.title,
              price: parseInt(values.price),
              address: values.address,
              city: values.city,
              bedroom: parseInt(values.bedroom),
              bathroom: parseInt(values.bathroom),
              type: values.listingType  ,
              property: values.propertyType.toLowerCase(),
              // propertyCondition: values.propertyCondition,
              // parking: values.parking,
              lat: values.lat,
              long: values.long,
              images: images,
            },
            postDetail: {
              desc: values.desc,
              utilities: values.uPolicy,
              pet: values.petPolicy,
              income: values.iPolicy,
              size: parseInt(values.size),
              school: parseInt(values.school),
              bus: parseInt(values.bus),
              restaurant: parseInt(values.restaurant),
            },
          },
          { withCredentials: true }
        );
        // console.log(res)
        // console.log(res.data)
        toast.success("" + (res.data.message || ""), {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true, 
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
          transition:Bounce,
        });
        navigate(`/profile/${res.data.post.id}`);
      } catch (err) {
        console.log(err)
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
        setError(err.response?.data?.message || "An error occurred.");
      }
    },
  });

  return (
    <div className="newPostPage">
      <div className="container">
        <div className="row">
          <div className="formContainer col-lg-8">
            <h1>Create a Listing</h1>
            <form onSubmit={handleSubmit}  className="form">
              <div className="formGrid">
                <div className="item">
                  <label htmlFor="title">Title</label>
                  <input
                    id="title"
                    name="title"
                    type="text"
                    placeholder="Enter title"
                    value={values.title}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className={
                      errors.title && touched.title ? "input-error" : ""
                    }
                  />
                  {errors.title && touched.title && (
                    <p className="error">{errors.title}</p>
                  )}
                </div>
                <div className="item">
                  <label htmlFor="price">Price</label>
                  <input
                    min={1}
                    id="price"
                    name="price"
                    type="number"
                    placeholder="Enter price ($2000)"
                    value={values.price}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className={
                      errors.price && touched.price ? "input-error" : ""
                    }
                  />
                  {errors.price && touched.price && (
                    <p className="error">{errors.price}</p>
                  )}
                </div>
                <div className="item">
                  <label htmlFor="address">Address</label>
                  <input
                    id="address"
                    name="address"
                    type="text"
                    placeholder="Enter address"
                    value={values.address}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className={
                      errors.address && touched.address ? "input-error" : ""
                    }
                  />
                  {errors.address && touched.address && (
                    <p className="error">{errors.address}</p>
                  )}
                </div>
                <div className="item">
                  <label htmlFor="city">City</label>
                  <input
                    id="city"
                    name="city"
                    type="text"
                    placeholder="Enter city"
                    value={values.city}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className={errors.city && touched.city ? "input-error" : ""}
                  />
                  {errors.city && touched.city && (
                    <p className="error">{errors.city}</p>
                  )}
                </div>

                <div className="item">
                  <label htmlFor="size">Total Size</label>
                  <input
                    min={0}
                    id="size"
                    name="size"
                    type="number"
                    placeholder="Enter Size (sqft)"
                    value={values.size}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className={errors.size && touched.size ? "input-error" : ""}
                  />
                  {errors.size && touched.size && (
                    <p className="error">{errors.size}</p>
                  )}
                </div>

                <div className="item">
                  <label htmlFor="latitude">Latitude</label>
                  <input
                    id="latitude"
                    name="lat"
                    type="text"
                    placeholder="Enter latitude (28.535517)"
                    value={values.lat}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className={errors.lat && touched.lat ? "input-error" : ""}
                  />
                  {errors.lat && touched.lat && (
                    <p className="error">{errors.lat}</p>
                  )}
                </div>

                <div className="item">
                  <label htmlFor="longitude">Longitude</label>
                  <input
                    id="longitude"
                    name="long"
                    type="text"
                    placeholder="Enter longitude (77.391029)"
                    value={values.long}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className={errors.long && touched.long ? "input-error" : ""}
                  />
                  {errors.long && touched.long && (
                    <p className="error">{errors.long}</p>
                  )}
                </div>

                <div className="item">
                  <label htmlFor="bedroom">Bedrooms</label>
                  <input
                    min={1}
                    id="bedroom"
                    name="bedroom"
                    type="number"
                    placeholder="Enter number of bedrooms"
                    value={values.bedroom}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className={
                      errors.bedroom && touched.bedroom ? "input-error" : ""
                    }
                  />
                  {errors.bedroom && touched.bedroom && (
                    <p className="error">{errors.bedroom}</p>
                  )}
                </div>

                <div className="item">
                  <label htmlFor="bathroom">Bathrooms</label>
                  <input
                    min={1}
                    id="bathroom"
                    name="bathroom"
                    type="number"
                    placeholder="Enter number of bathrooms"
                    value={values.bathroom}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className={
                      errors.bathroom && touched.bathroom ? "input-error" : ""
                    }
                  />
                  {errors.bathroom && touched.bathroom && (
                    <p className="error">{errors.bathroom}</p>
                  )}
                </div>

                <div className="item">
                  <label htmlFor="type">Listing Type</label>
                  <select
                    name="listingType"
                    value={values.listingType}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className={
                      errors.listingType && touched.listingType
                        ? "input-error"
                        : "custom-select"
                    }
                  >
                    <option value="buy">Buy</option>
                    <option value="rent">Rent</option>
                    <option value="commercial">Commercial</option>
                    <option value="plots">Plots</option>
                    <option value="pg">Pg / Co-living</option>
                  </select>
                  {errors.listingType && touched.listingType && (
                    <p className="error">{errors.listingType}</p>
                  )}
                </div>

                <div className="item">
                  <label htmlFor="property">Property Type</label>
                  <select
                    name="propertyType"
                    value={values.propertyType}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className={
                      errors.propertyType && touched.propertyType
                        ? "input-error"
                        : "custom-select"
                    }
                  >
                    <option value="apartment">Apartment</option>
                    <option value="house">House</option>
                    <option value="condo">Vila</option>
                    <option value="land">Plot</option>
                    <option value="shop">Shop</option>
                  </select>
                  {errors.propertyType && touched.propertyType && (
                    <p className="error">{errors.propertyType}</p>
                  )}
                </div>
                {/* <div className="item">
                  <label htmlFor="propertyCondition">Property Condition</label>
                  <select
                    name="propertyCondition"
                    value={values.propertyCondition}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className={
                      errors.propertyCondition && touched.propertyCondition
                        ? "input-error"
                        : "custom-select"
                    }
                  >
                    <option value="row">Row</option>
                    <option value="semi-furnished">Semi-Furnished</option>
                    <option value="furnished">Furnished</option>
                  </select>
                  {errors.propertyCondition && touched.propertyCondition && (
                    <p className="error">{errors.propertyCondition}</p>
                  )}
                </div> */}
                {/* <div className="item">
                  <label htmlFor="parking">Parking</label>
                  <select
                    name="parking"
                    value={values.parking}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className={
                      errors.parking && touched.parking ? "input-error" : "custom-select"
                    }
                  >
                    <option value="none">None</option>
                    <option value="street">Covered</option>
                    <option value="street">Open</option>
                    <option value="garage">Garage</option>
                  </select>
                  {errors.parking && touched.parking && (
                    <p className="error">{errors.parking}</p>
                  )}
                </div> */}

                <div className="item">
                  <label htmlFor="utilities">Utilities Policy</label>
                  <select
                    name="uPolicy"
                    value={values.uPolicy}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className={
                      errors.uPolicy && touched.uPolicy ? "input-error" : "custom-select"
                    }
                  >
                    <option value="owner">Owner is responsible</option>
                    <option value="tenant">Tenant is responsible</option>
                    <option value="shared">Shared</option>
                  </select>
                  {errors.uPolicy && touched.uPolicy && (
                    <p className="error">{errors.uPolicy}</p>
                  )}
                </div>
                <div className="item">
                  <label htmlFor="pet">Pet Policy</label>
                  <select
                    name="petPolicy"
                    value={values.petPolicy}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className={
                      errors.petPolicy && touched.petPolicy ? "input-error" : "custom-select"
                    }
                  >
                    <option value="allowed">Allowed</option>
                    <option value="not-allowed">Not Allowed</option>
                  </select>
                  {errors.petPolicy && touched.petPolicy && (
                    <p className="error">{errors.petPolicy}</p>
                  )}
                </div>
                <div className="item">
                  <label htmlFor="income">Income Policy</label>
                  <input
                    id="income"
                    name="iPolicy"
                    type="text"
                    placeholder="Income Policy"
                    value={values.iPolicy}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className={
                      errors.iPolicy && touched.iPolicy ? "input-error" : ""
                    }
                  />
                  {errors.iPolicy && touched.iPolicy && (
                    <p className="error">{errors.iPolicy}</p>
                  )}
                </div>
                <div className="item">
                  <label htmlFor="school">School</label>
                  <input
                    min={0}
                    id="school"
                    name="school"
                    type="number"
                    placeholder="Enter school distance"
                    value={values.school}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className={
                      errors.school && touched.school ? "input-error" : ""
                    }
                  />
                  {errors.school && touched.school && (
                    <p className="error">{errors.school}</p>
                  )}
                </div>
                <div className="item">
                  <label htmlFor="bus">Bus</label>
                  <input
                    min={0}
                    id="bus"
                    name="bus"
                    type="number"
                    placeholder="Enter bus-stop distance"
                    value={values.bus}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className={errors.bus && touched.bus ? "input-error" : ""}
                  />
                  {errors.bus && touched.bus && (
                    <p className="error">{errors.bus}</p>
                  )}
                </div>
                <div className="item">
                  <label htmlFor="restaurant">Restaurant</label>
                  <input
                    min={0}
                    id="restaurant"
                    name="restaurant"
                    type="number"
                    placeholder="Enter restaurant distance"
                    value={values.restaurant}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className={
                      errors.restaurant && touched.restaurant
                        ? "input-error"
                        : ""
                    }
                  />
                  {errors.restaurant && touched.restaurant && (
                    <p className="error">{errors.restaurant}</p>
                  )}
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
                <ReactQuill
                  theme="snow"
                  value={values.desc}
                  onChange={(val) => setFieldValue("desc", val)}
                  onBlur={() => setFieldTouched("desc", true)}
                  placeholder="Enter Your Description Here... "
                />
                {errors.desc && touched.desc && (
                  <p className="error">{errors.desc}</p>
                )}
              </div>
              <div className="submitSection">
                <button
                  type="submit"
                  className="btn btn-outline-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Posting..." : "Post Listing"}
                </button>
                {/* {error && <span className="errorMessage">{error}</span>} */}
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
