
import { useEffect, useState } from "react";
import "./NewPostPage.scss";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import UploadWidget from "../../Components/UploadWidget";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import addListingSchema from "../../../lib/schemas/AddListing";
import { useFormik } from "formik";
import { Bounce, toast } from "react-toastify";
import Select from "react-select";

const nearbyOptions = [
  { value: "school", label: "School" },
  { value: "bus", label: "Bus Stop" },
  { value: "restaurant", label: "Restaurant" },
  { value: "hospital", label: "Hospital" },
  { value: "mall", label: "Mall" },
];

const amenityOptions = [
  { value: "gym", label: "Gym" },
  { value: "pool", label: "Swimming Pool" },
  { value: "security", label: "24x7 Security" },
  { value: "parking", label: "Parking" },
  { value: "lift", label: "Lift" },
];

const buildingTypes = [
  { value: "residential", label: "Residential" },
  { value: "commercial", label: "Commercial" },
  { value: "plots", label: "Plots & Land" },
  { value: "industrial", label: "Industrial" },
  { value: "pg_coliving", label: "PG & Co-Living" },
  { value: "other", label: "Other" },
];

const propertyTypes = {
  residential: [
    { value: "apartment", label: "Apartment" },
    { value: "villa", label: "Villa" },
    { value: "independent", label: "Independent House" },
    { value: "builder_floor", label: "Builder Floor" },
    { value: "penthouse", label: "Penthouse" },
    { value: "bungalow", label: "Bungalow" },
    { value: "studio_apartment", label: "Studio Apartment" },
    { value: "duplex", label: "Duplex" },
    { value: "row_house", label: "Row House" },
  ],
  commercial: [
    { value: "office", label: "Office Space" },
    { value: "shop", label: "Shop" },
    { value: "warehouse", label: "Warehouse" },
    { value: "commercial_building", label: "Commercial Building" },
    { value: "showroom", label: "Showroom" },
    { value: "coworking_space", label: "Co-Working Space" },
    { value: "business_center", label: "Business Center" },
    { value: "mall_space", label: "Mall Space" },
  ],
  plots: [
    { value: "residential_plot", label: "Residential Plot" },
    { value: "commercial_plot", label: "Commercial Plot" },
    { value: "agricultural_land", label: "Agricultural Land" },
    { value: "industrial_plot", label: "Industrial Plot" },
    { value: "farmhouse_plot", label: "Farmhouse Plot" },
  ],
  pg_coliving: [
    { value: "pg", label: "Paying Guest (PG)" },
    { value: "hostel", label: "Hostel" },
    { value: "coliving", label: "Co-Living Space" },
  ],
  industrial: [
    { value: "factory", label: "Factory" },
    { value: "manufacturing_unit", label: "Manufacturing Unit" },
    { value: "industrial_shed", label: "Industrial Shed" },
    { value: "industrial_warehouse", label: "Industrial Warehouse" },
  ],
};

function EditListing() {
  const [images, setImages] = useState([]);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [customAmenity, setCustomAmenity] = useState("");
  const { id } = useParams();

  const [formData, setFormData] = useState({
    propertyName: "",
    price: "",
    address: "",
    city: "",
    state: "",
    size: "",
    lat: "",
    long: "",
    bedroom: "",
    bathroom: "",
    balcony: "",
    listingType: "",
    buildingType: "",
    propertyType: "",
    propertyAvailability: "",
    propertyCondition: "",
    parking: "",
    description: "",
    offer: false,
    tac: false,
    nearbyPlaces: [],
    nearbyDistances: {},
    amenities: [],
    images: [],
  });

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_BASEURL}/api/posts/${id}`
        );
        const post = response.data;
        setFormData({
          propertyName: post.propertyName || "",
          price: post.price || "",
          address: post.address || "",
          city: post.city || "",
          state: post.state || "",
          size: post.size || "",
          lat: post.lat || "",
          long: post.long || "",
          bedroom: post.bedroom || "",
          bathroom: post.bathroom || "",
          balcony: post.balcony || "",
          listingType: post.listingType || "",
          buildingType: post.buildingType || "",
          propertyType: post.propertyType || "",
          propertyAvailability: post.propertyAvailability || "",
          propertyCondition: post.propertyCondition || "",
          parking: post.parking || "",
          description: post.description || "",
          offer: post.offer || false,
          tac: post.tac || false,
          nearbyPlaces: post.nearbyPlaces || [],
          nearbyDistances: post.nearbyDistances || {},
          amenities: post.amenities || [],
          images: post.images || [],
        });
        setImages(post.images || []);
      } catch (err) {
        setError("Failed to load post data. Please try again.");
      }
    };
    fetchPost();
  }, [id]);

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
    initialValues: formData,
    validationSchema: addListingSchema,
    enableReinitialize: true,
    onSubmit: async (values) => {
      try {
        const res = await axios.put(
          `${import.meta.env.VITE_BACKEND_BASEURL}/api/posts/${id}`,
          { postData: values, images },
          { withCredentials: true }
        );
        toast.success("Listing updated successfully!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
          transition: Bounce,
        });
        navigate(`/profile/${res.data.id}`);
      } catch (err) {
        toast.error("❌ " + (err.response.data.error || "An error occurred."), {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
          transition: Bounce,
        });
        setError(err.response?.data?.message || "An error occurred.");
      }
    },
  }); 

  const handleResetImages = () => {
    setImages([]);
  };

  return (
    <div className="newPostPage">
      <div className="container">
        <div className="row">

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
                  uploadPreset: `${import.meta.env.VITE_CLOUDNARY_UPLOAD_PRESET
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

              <div className="mt-3">
                <button className="btn btn-outline-danger" onClick={handleResetImages}>
                  Reset Images
                </button>
              </div>
            </div>
          </div>

          <div className="formContainer col-lg-8">
            <h1>Edit Listing</h1>
            <form onSubmit={handleSubmit} className="form">
              <div className="formGrid">

                {/* Listing Type */}
                <div className="item">
                  <label>Listing Type</label>
                  <select
                    name="listingType"
                    value={values.listingType}
                    onChange={handleChange}
                    className={errors.listingType && touched.listingType ? "input-error" : "custom-select"}
                  >
                    <option value="">Select</option>
                    <option value="sell">Sell</option>
                    <option value="rent">Rent/Lease</option>
                    <option value="commercial">Commercial</option>
                    <option value="pg">Pg / Co-living</option>
                    <option value="plots">Plots</option>
                  </select>
                  {errors.listingType && touched.listingType && (
                    <p className="error">{errors.listingType}</p>
                  )}
                </div>

                {/* Building Type */}

                {values.listingType && (
                  <div className="item">
                    <label>Building Type</label>
                    <Select
                      options={buildingTypes}
                      value={buildingTypes.find((b) => b.value === values.buildingType) || null}
                      onChange={(selected) => {
                        setFieldValue("buildingType", selected.value);
                        setFieldValue("propertyType", "");
                      }}
                    />
                    {errors.buildingType && touched.buildingType && (
                      <p className="error">{errors.buildingType}</p>
                    )}
                  </div>
                )}

                {/* Property Type */}

                {values.buildingType && (
                  <div className="item">
                    <label>Property Type</label>
                    <Select
                      options={propertyTypes[values.buildingType] || []}
                      value={propertyTypes[values.buildingType]?.find((p) => p.value === values.propertyType) || null}
                      onChange={(selected) => setFieldValue("propertyType", selected.value)}
                    />
                    {errors.propertyType && touched.propertyType && (
                      <p className="error">{errors.propertyType}</p>
                    )}
                  </div>
                )}

                {/* Property Availability */}

                <div className="item">
                  <label htmlFor="propertyAvailability">Property Availability</label>
                  <select
                    name="propertyAvailability"
                    value={values.propertyAvailability}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className={
                      errors.propertyAvailability && touched.propertyAvailability
                        ? "input-error"
                        : "custom-select"
                    }
                  >
                    <option value="">Select</option>
                    <option value="ready-to-move">Ready to Move</option>
                    <option value="under-construction">Under Construction</option>
                    <option value="in-3-months">In 3 Months</option>
                    <option value="in-6-months">In 6 Months</option>
                    <option value="in-1-year">In 1 Year</option>
                    <option value="in-2-years">In 2 Years</option>
                  </select>
                  {errors.propertyAvailability && touched.propertyAvailability && (
                    <p className="error">{errors.propertyAvailability}</p>
                  )}
                </div>

                {/* Property Condition */}

                <div className="item">
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
                    <option value="">Select</option>
                    <option value="row">Row</option>
                    <option value="semi-furnished">Semi-Furnished</option>
                    <option value="furnished">Furnished</option>
                  </select>
                  {errors.propertyCondition && touched.propertyCondition && (
                    <p className="error">{errors.propertyCondition}</p>
                  )}
                </div>

                {/* address */}

                <div className="item">
                  <label>State</label>
                  <input
                    id="state"
                    name="state"
                    type="text"
                    placeholder="Enter state"
                    value={values.state}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className={
                      errors.state && touched.state ? "input-error" : ""
                    }
                  />
                  {errors.state && touched.state && (
                    <p className="error">{errors.state}</p>
                  )}
                </div>
                {values.state && (
                  <div className="item">
                    <label>City</label>
                    <input
                      id="city"
                      name="city"
                      type="text"
                      placeholder="Enter city"
                      value={values.city}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    {errors.city && touched.city && (
                      <p className="error">{errors.city}</p>
                    )}
                  </div>
                )}

                {values.city && (
                  <div className="item">
                    <label>Address</label>
                    <input
                      id="address"
                      name="address"
                      type="text"
                      placeholder="Enter address"
                      value={values.address}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    {errors.address && touched.address && (
                      <p className="error">{errors.address}</p>
                    )}
                  </div>
                )}

                {/* Property Name */}

                <div className="item">
                  <label htmlFor="propertyName">Property Name</label>
                  <input
                    id="propertyName"
                    name="propertyName"
                    type="text"
                    placeholder="Enter Property Name"
                    value={values.propertyName}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className={
                      errors.propertyName && touched.propertyName ? "input-error" : ""
                    }
                  />
                  {errors.propertyName && touched.propertyName && (
                    <p className="error">{errors.propertyName}</p>
                  )}
                </div>

                {/* Price */}

                <div className="item">
                  <label htmlFor="price">Price</label>
                  <input
                    min={1}
                    id="price"
                    name="price"
                    type="number"
                    placeholder="Enter price"
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

                {/* Total Size */}

                <div className="item">
                  <label htmlFor="size">Total Size</label>
                  <input
                    min={0}
                    id="size"
                    name="size"
                    type="number"
                    placeholder="Enter Size (Sq.Ft/Sq.Yd)"
                    value={values.size}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className={errors.size && touched.size ? "input-error" : ""}
                  />
                  {errors.size && touched.size && (
                    <p className="error">{errors.size}</p>
                  )}
                </div>

                {/* Parking */}

                <div className="item">
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
                    <option value="">Select</option>
                    <option value="none">None</option>
                    <option value="covered">Covered</option>
                    <option value="open">Open</option>
                    <option value="garage">Garage</option>
                  </select>
                  {errors.parking && touched.parking && (
                    <p className="error">{errors.parking}</p>
                  )}
                </div>

                {/* Bedrooms */}

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

                {/* Bathrooms */}

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

                {/* balconys */}

                <div className="item">
                  <label htmlFor="balcony">Balcony</label>
                  <input
                    min={1}
                    id="balcony"
                    name="balcony"
                    type="number"
                    placeholder="Enter number of bathrooms"
                    value={values.balcony}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className={
                      errors.balcony && touched.balcony ? "input-error" : ""
                    }
                  />
                  {errors.balcony && touched.balcony && (
                    <p className="error">{errors.balcony}</p>
                  )}
                </div>

                {/* Latitude */}

                <div className="item">
                  <label htmlFor="latitude">Latitude</label>
                  <input
                    id="latitude"
                    name="lat"
                    type="number"
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

                {/* Longitude */}

                <div className="item">
                  <label htmlFor="longitude">Longitude</label>
                  <input
                    id="longitude"
                    name="long"
                    type="number"
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

                {/* offer avialabe or not  */}

                <div className="item">
                  <label htmlFor="offer" className="form-check-label">Offer Available
                  </label>
                  <input
                    type="checkbox"
                    name="offer"
                    id="offer"
                    checked={values.offer}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.offer && touched.offer ? "input-error form-check-input ms-0 mt-2" : "form-check-input ms-0 mt-2"}
                  />
                  {errors.offer && touched.offer && (
                    <p className="error">{errors.offer}</p>
                  )}
                </div>
              </div>

              {/* Nearby Places */}

              <div className="item">
                <label>Nearby Places</label>
                <Select
                  options={nearbyOptions}
                  isMulti
                  value={nearbyOptions.filter(option => formData.nearbyPlaces.includes(option.value))}
                  onChange={(selected) => {
                    const places = selected.map(s => s.value);
                    setFormData(prevState => ({ ...prevState, nearbyPlaces: places }));
                    setFieldValue("nearbyPlaces", places);
                  }}
                />
                {formData.nearbyPlaces.map((place) => (
                  <div key={place}>
                    <input
                      type="number"
                      className="p-2 my-2"
                      placeholder={`Distance to ${place} (Km)`}
                      value={formData.nearbyDistances[place] || ""}
                      onChange={(e) => {
                        const updatedDistances = {
                          ...formData.nearbyDistances,
                          [place]: e.target.value,
                        };
                        setFormData(prevState => ({ ...prevState, nearbyDistances: updatedDistances }));
                        setFieldValue("nearbyDistances", updatedDistances);
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Amenities */}

              <div className="item">
                <label>Amenities</label>
                <Select
                  options={amenityOptions}
                  isMulti
                  value={amenityOptions.filter(option => formData.amenities.includes(option.value))}
                  onChange={(selected) => {
                    const amenities = selected.map(s => s.value);
                    setFormData(prevState => ({ ...prevState, amenities }));
                    setFieldValue("amenities", amenities);
                  }}
                />
                <input
                  type="text"
                  className="p-2 my-2"
                  placeholder="Add custom amenity"
                  value={customAmenity}
                  onChange={(e) => setCustomAmenity(e.target.value)}
                />
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  onClick={() => {
                    if (customAmenity.trim()) {
                      setFormData(prevState => ({
                        ...prevState,
                        amenities: [...prevState.amenities, customAmenity],
                      }));
                      setCustomAmenity("");
                    }
                  }}
                >
                  Add
                </button>
              </div>

              {/* Description */}

              <div className="item description">
                <label htmlFor="description">Description</label>
                <ReactQuill
                  theme="snow"
                  value={values.description}
                  onChange={(content) => setFieldValue("description", content)}
                  onBlur={() => setFieldTouched("description", true)}
                  placeholder="Enter Your Description Here... "
                  modules={{ toolbar: [['bold', 'italic'], ['link']] }}
                />
                {errors.description && touched.description && (
                  <p className="error">{errors.description}</p>
                )}
              </div>

              {/* Term & Condition  */}

              <div className="item">
                <label htmlFor="tac" className="form-check-label">
                  Term & Condition
                </label>
                <input
                  type="checkbox"
                  name="tac"
                  id="tac"
                  checked={values.tac}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.tac && touched.tac ? "input-error form-check-input ms-0" : "form-check-input ms-0"}
                />
                {errors.tac && touched.tac && <p className="error">{errors.tac}</p>}
              </div>

              {/* Submit Button */}

              <div className="submitSection">
                <button type="submit" disabled={isSubmitting} className="btn btn-outline-primary">
                  {isSubmitting ? "Updating..." : "Update Listing"}
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditListing;