import { useContext, useState } from "react";
import "./ProfileUpdatePage.scss";
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UploadWidget from "../../Components/UploadWidget";

function ProfileUpdatePage() {
  const { currentUser, updateUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [avatar, setAvatar] = useState([]);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const { username, email, password } = Object.fromEntries(formData);

    try {
      const res = await axios.put(
        `${import.meta.env.VITE_BACKEND_BASEURL}/api/users/${currentUser.id}`,
        {
          username,
          email,
          password,
          avatar: avatar[0],
        },
        {
          withCredentials: true,
        }
      );
      updateUser(res.data);
      navigate("/profile");
    } catch (err) {
      console.log(err);
      setError(err.response?.data?.message || "An error occurred.");
    }
  };

  return (
    <div className="profileUpdatePage">
      <div className="sideContainer ">
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
                // window: "#0018ff", // Background color of the popup
                // sourceBg: "#FFFFFF", // Background color of source buttons
                windowBorder: "#0018ff", // Border color of the popup
                inactiveTabIcon: "#C4C5CC", // Color for inactive tabs
                link: "#0078FF", // Hyperlink color
              }
            },
          }}
          setState={setAvatar}
        />
        {/* Clear Avatar Button */}
        {avatar.length > 0 && (
          <button
            onClick={() => setAvatar([])}
            className="clearAvatarButton "
          >
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
              defaultValue={currentUser.username}
              placeholder="Enter your username"
            />
          </div>
          <div className="item">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              defaultValue={currentUser.email}
              placeholder="Enter your email"
            />
          </div>
          <div className="item">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your new password"
            />
          </div>
          <button className="submitButton">Update</button>
          {error && <span className="errorMessage">{error}</span>}
        </form>
      </div>
    </div>
  );
}

export default ProfileUpdatePage;
