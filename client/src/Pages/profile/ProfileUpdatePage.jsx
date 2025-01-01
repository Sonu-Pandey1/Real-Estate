import { useContext, useState } from "react";
import "./ProfileUpdatePage.scss";
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UploadWidget from "../../Components/UploadWidget";
import { useFormik } from "formik";
import "../../App.scss";
import profileUpdateSchema from "../../../lib/schemas/ProfileUpdateSchema";
import { Bounce, toast } from "react-toastify";

function ProfileUpdatePage() {
  const { currentUser, updateUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [avatar, setAvatar] = useState([]);
  const navigate = useNavigate();

  // Formik hook for handling form state
  const { values, errors, touched, handleBlur, handleChange, handleSubmit,  isSubmitting } = useFormik({
    initialValues: {
      username: currentUser.username,
      email: currentUser.email,
      password: "",
      confirmPassword: "", // Added for confirm password
    },
    validationSchema: profileUpdateSchema,
    onSubmit: async (values) => {
      try {
        // Ensure avatar is sent correctly
        const res = await axios.put(
          `${import.meta.env.VITE_BACKEND_BASEURL}/api/users/${currentUser.id}`,
          {
            username: values.username,
            email: values.email,
            password: values.password,
            avatar: avatar.length > 0 ? avatar[0] : currentUser.avatar,
          },
          {
            withCredentials: true,
          }
        );
        // console.log(res.data.user)
        // console.log(res.data.message)
        updateUser(res.data.user);
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
        // resetForm(); // Reset the form after successful submission
        navigate("/profile");
      } catch (err) {
        console.log(err);
        setError(err.response?.data?.error || "An error occurred.");
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
    },
  });

  return (
    <div className="profileUpdatePage">
      <div className="sideContainer">
        <img
          src={
            avatar[0] ||
            currentUser.avatar ||
            "https://cdn-icons-gif.flaticon.com/17626/17626903.gif"
          }
          alt="avatar"
          className="avatar"
        />
        <UploadWidget
          uwConfig={{
            cloudName: `${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}`,
            uploadPreset: `${import.meta.env.VITE_CLOUDNARY_UPLOAD_PRESET}`,
            multiple: false,
            maxImageFileSize: 5000000,
            folder: "avatars",
            clientAllowedFormats: ["image"],
            styles: {
              palette: {
                windowBorder: "#0018ff", // Border color of the popup
                inactiveTabIcon: "#C4C5CC", // Color for inactive tabs
                link: "#0078FF", // Hyperlink color
              },
            },
          }}
          setState={setAvatar}
        />
        {avatar.length > 0 && (
          <button onClick={() => setAvatar([])} className="clearAvatarButton">
            Clear Avatar
          </button>
        )}
      </div>
      <div className="formContainer shadow-lg">
        <form onSubmit={handleSubmit}>
          <h1 className="formTitle">Update Profile</h1>
          <div className="item">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Enter your username"
              value={values.username}
              onBlur={handleBlur}
              onChange={handleChange}
              className={errors.username && touched.username ? "input-error" : ""}
            />
            {errors.username && touched.username && (
              <p className="error">{errors.username}</p>
            )}
          </div>
          <div className="item">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={values.email}
              placeholder="Enter your email"
              onBlur={handleBlur}
              onChange={handleChange}
              className={errors.email && touched.email ? "input-error" : ""}
            />
            {errors.email && touched.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="item">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              value={values.password}
              placeholder="Enter your new password"
              onBlur={handleBlur}
              onChange={handleChange}
              className={errors.password && touched.password ? "input-error" : ""}
            />
            {errors.password && touched.password && <p className="error  ">{errors.password}</p>}
          </div>
          <div className="item">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={values.confirmPassword}
              placeholder="Confirm your new password"
              onBlur={handleBlur}
              onChange={handleChange}
              className={errors.confirmPassword && touched.confirmPassword ? "input-error" : ""}
            />
            {errors.confirmPassword && touched.confirmPassword && (
              <p className="error">{errors.confirmPassword}</p>
            )}
          </div>
          <button className="submitButton" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Updating..." : "Update"}
          </button>
          {error && <span className="errorMessage">{error}</span>}
        </form>
      </div>
    </div>
  );
}

export default ProfileUpdatePage;
