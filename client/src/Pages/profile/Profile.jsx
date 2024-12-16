import axios from "axios";
import Chat from "../../Components/Chat";
import List from "../../Components/List";
import "./Profile.scss";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";

function Profile() {

  const navigate = useNavigate();
  const {currentUser,updateUser} = useContext(AuthContext);
  console.log(currentUser);
  const handleLogout =async ()=>{
    try {
      const response = await axios.post("http://localhost:3000/api/auth/logout")
      console.log(response.data)
      // localStorage.removeItem("user")
      updateUser(null);
      navigate("/")
      
    } catch (error) {
      console.log(error)
    }


  }

  return (
    <div className="profilePage container">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <button>Update Profile</button>
          </div>
          <div className="info">
            <span>
              Avatar:
              <img
                src={currentUser.avatar||"https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}
                alt="User Avatar"
              />
            </span>
            <span>
              Username: <b>{currentUser.username}</b>
            </span>
            <span>
              Email: <b>{currentUser.email}</b>
            </span>
            <button className="btn btn-outline-danger w-25 mt-4" onClick={handleLogout}>Logout</button>
          </div>
          <div className="title">
            <h1>My List</h1>
            <button>Create New Post</button>
          </div>
  
          <List />
        </div>
      </div>
      
      <div className="chatContainer">
        <div className="wrapper">
          <Chat />
        </div>
      </div>
    </div>
  );
}

export default Profile;
