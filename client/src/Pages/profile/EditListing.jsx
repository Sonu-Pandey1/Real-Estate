import { useState, useEffect } from "react";
import "./NewPostPage.scss";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import UploadWidget from "../../Components/UploadWidget";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Bounce, toast } from "react-toastify";

function EditListing() {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    address: "",
    city: "",
    bedroom: "",
    bathroom: "",
    type: "",
    property: "",
    propertyCondition: "",
    parking: "",
    lat: "",
    long: "",
    utilities: "",
    pet: "",
    income: "",
    size: "",
    school: "",
    bus: "",
    restaurant: "",
  });
  const [value, setValue] = useState("");
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");
  const [hasPreviousImages, setHasPreviousImages] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  // console.log(images);

  // Fetch existing post data
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_BASEURL}/api/posts/${id}`
        );
        const post = response.data;
        // Ensure postDetail exists before accessing properties
        const postDetail = post.postDetail || {};

        // Populate form fields
        setFormData({
          title: post.title || "",
          price: post.price || "",
          address: post.address || "",
          city: post.city || "",
          bedroom: post.bedroom || "",
          bathroom: post.bathroom || "",
          type: post.type || "",
          property: post.property || "",
          propertyCondition: post.propertyCondition || "",
          parking: post.parking || "",
          lat: post.lat || "",
          long: post.long || "",
          utilities: postDetail.utilities || "",
          pet: post.pet || "",
          income: postDetail.income || "",
          size: postDetail.size || "",
          school: postDetail.school || "",
          bus: postDetail.bus || "",
          restaurant: postDetail.restaurant || "",
        });

        setValue(postDetail.desc || "");
        setImages(post.images || []);
        setHasPreviousImages(post.images && post.images.length > 0);
        
      } catch (err) {
    
        setError("Failed to load post data. Please try again.");
      }
    };
    fetchPost();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData from the form and convert it to an object
    const formData = new FormData(e.target);
    const inputs = Object.fromEntries(formData);

    // Sanitize and ensure numeric fields have proper values or fallback to 0
    const sanitizedFormData = {
      title: inputs.title || "",
      price: parseInt(inputs.price, 10) || 0,
      address: inputs.address || "",
      city: inputs.city || "",
      bedroom: parseInt(inputs.bedroom, 10) || 0,
      bathroom: parseInt(inputs.bathroom, 10) || 0,
      type: inputs.type || "",
      property: inputs.property || "",
      propertyCondition: inputs.propertyCondition || "",
      parking: inputs.parking || "",
      lat: inputs.lat || "0.0",
      long: inputs.long || "0.0",
      images,
    };

    const sanitizedPostDetail = {
      desc: value || "",
      utilities: inputs.utilities || "",
      pet: inputs.pet || "",
      income: inputs.income || "",
      size: parseInt(inputs.size, 10) || 0,
      school: parseInt(inputs.school, 10) || 0,
      bus: parseInt(inputs.bus, 10) || 0,
      restaurant: parseInt(inputs.restaurant, 10) || 0,
    };

    try {
      const res = await axios.put(
        `${import.meta.env.VITE_BACKEND_BASEURL}/api/posts/${id}`,
        {
          postData: sanitizedFormData,
          postDetail: sanitizedPostDetail,
        },
        {
          withCredentials: true,
        }
      );

      if (res.status === 200) {
        navigate(`/profile/${id}`);
      } else {
        setError("Unexpected response from the server.");
      }
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
    } catch (err) {
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
      setError(
        err.response?.data?.message ||
          "Error updating the post. Please try again."
      );
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Reset the images to empty
  const handleResetImages = () => {
    setImages([]);
    setHasPreviousImages(false);
  };

  return (
    <div className="newPostPage">
      <div className="container">
        <div className="row">
          <div className="formContainer col-lg-8">
            <h1>Edit Listing</h1>
            <form onSubmit={handleSubmit} className="form">
              <div className="formGrid">
                {/* Map through all input fields */}
                {[
                  { label: "Title", name: "title", type: "text" },
                  { label: "Price", name: "price", type: "number" },
                  { label: "Address", name: "address", type: "text" },
                  { label: "City", name: "city", type: "text" },
                  { label: "Latitude", name: "lat", type: "number" },
                  { label: "Longitude", name: "long", type: "number" },
                  { label: "Bedrooms", name: "bedroom", type: "number" },
                  { label: "Bathrooms", name: "bathroom", type: "number" },
                  { label: "Total Size (sqft)", name: "size", type: "number" },
                  { label: "School Distance", name: "school", type: "number" },
                  { label: "Bus Stop Distance", name: "bus", type: "number" },
                  {
                    label: "Restaurant Distance",
                    name: "restaurant",
                    type: "number",
                  },
                  { label: "Income Policy", name: "income", type: "text" },
                ].map(({ label, name, type }) => (
                  <div className="item" key={name}>
                    <label htmlFor={name}>{label}</label>
                    <input
                      id={name}
                      name={name}
                      type={type}
                      value={formData[name]}
                      onChange={handleChange}
                      placeholder={`Enter ${label}`}
                      required
                    />
                  </div>
                ))}

                {/* Dropdown fields */}
                {[
                  {
                    label: "Listing Type",
                    name: "type",
                    options: [
                      "Rent",
                      "Buy",
                      "Commercial",
                      "Plots",
                      "Pg / Co-living",
                    ],
                  },
                  {
                    label: "Property Type",
                    name: "property",
                    options: ["Apartment", "House", "Vila", "Plot", "Shop"],
                  },
                  {
                    label: "Property Condition",
                    name: "propertyCondition",
                    options: ["Row", "Semi-Furnished", "Furnished"],
                  },
                  {
                    label: "Parking",
                    name: "parking",
                    options: ["None", "Covered", "Open", "Garage"],
                  },
                  {
                    label: "Utilities Policy",
                    name: "utilities",
                    options: [
                      "Owner is responsible",
                      "Tenant is responsible",
                      "Shared",
                    ],
                  },
                  {
                    label: "Pet Policy",
                    name: "pet",
                    options: ["Allowed", "Not Allowed"],
                  },
                ].map(({ label, name, options }) => (
                  <div className="item" key={name}>
                    <label htmlFor={name}>{label}</label>
                    <select
                      name={name}
                      value={formData[name]}
                      onChange={handleChange}
                      required
                    >
                      {options.map((option) => (
                        <option key={option} value={option.toLowerCase()}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                ))}
              </div>

              <div className="item description">
                <label htmlFor="desc">Description</label>
                <ReactQuill
                  theme="snow"
                  value={value}
                  onChange={setValue}
                  placeholder="Edit your description here..."
                />
              </div>

              <div className="submitSection">
                <button className="btn btn-outline-primary">
                  Update Listing
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
                  <p>No images uploaded!</p>
                </div>
              )}
            </div>
            {hasPreviousImages && (
              <button onClick={handleResetImages} className="btn btn-outline-danger me-2">
                Reset Images
              </button>
            )}
            <UploadWidget
              uwConfig={{
                cloudName: `${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}`,
                uploadPreset: `${import.meta.env.VITE_CLOUDNARY_UPLOAD_PRESET}`,
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
  );
}

export default EditListing;
