/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Modal.scss"
import { NavLink } from "react-router-dom";

export default function Modal({ isPopupOpen, setIsPopupOpen }) {
  const [activeTab, setActiveTab] = useState("login");
  const [profileImage, setProfileImage] = useState("https://cdn-icons-gif.flaticon.com/8797/8797862.gif");

  const handleProfileImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="modalContainer">
      {isPopupOpen && (
        <div
          className="popupOverlay"
          onClick={(e) => {
            if (e.target.className === "popupOverlay") {
              setIsPopupOpen(false);
            }
          }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1050,
          }}
        >
          <div
            className="popupForm pt-2"
            style={{
              background: "#fff",
              padding: "0px 20px",
              borderRadius: "10px",
              width: "90%",
              maxWidth: "400px",
            //   height:"100%",
              maxHeight:"600px",
              position: "relative",
            }}
          >
            <button
              className="closeButton btn-close"
              onClick={() => setIsPopupOpen(false)}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                border: "none",
                color:"red",
                backgroundColor:"red",
                cursor: "pointer",
              }}
            ></button>

            <ul className="nav nav-tabs mb-4" style={{ justifyContent: "center" }}>
              <li className="nav-item">
                <button
                  className={`nav-link ${activeTab === "login" ? "active" : ""}`}
                  onClick={() => setActiveTab("login")}
                  style={{
                    border: "none",
                    borderBottom: activeTab === "login" ? "2px solid #0d6efd" : "none",
                    background: "none",
                    cursor: "pointer",
                  }}
                >
                  Login
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${activeTab === "signup" ? "active" : ""}`}
                  onClick={() => setActiveTab("signup")}
                  style={{
                    border: "none",
                    borderBottom: activeTab === "signup" ? "2px solid #0d6efd" : "none",
                    background: "none",
                    cursor: "pointer",
                  }}
                >
                  Signup
                </button>
              </li>
            </ul>

            {activeTab === "login" && (
              <form>
                {/* <h4 className="text-center mb-3">Login</h4> */}
                <div className="mb-3">
                  <label htmlFor="loginEmail" className="form-label">Email</label>
                  <input
                    type="email"
                    id="loginEmail"
                    className="form-control"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="loginPassword" className="form-label">Password</label>
                  <input
                    type="password"
                    id="loginPassword"
                    className="form-control"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <NavLink className={" text-decoration-none"}><p className=" text-end">Forgot password?</p>
                </NavLink>
                <button type="submit" className="btn btn-primary w-100">Login</button>
                <p className="text-center pt-3">Not a Member? <NavLink onClick={() => setActiveTab("signup")}>Create Account</NavLink></p>
              </form>
            )}

            {activeTab === "signup" && (
              <form>
                {/* <h4 className="text-center mb-3">Signup</h4> */}
                <div className="mb-3 text-center">
                  <label htmlFor="signupPhoto">
                    <img
                      src={profileImage}
                      alt="Profile"
                      className="rounded-circle border border-info "
                      style={{
                        width: "80px",
                        height: "80px",
                        objectFit: "cover",
                        cursor: "pointer",
                      }}
                      title="Upload Profile Image"
                    />
                  </label>
                  <input
                    type="file"
                    id="signupPhoto"
                    className="form-control"
                    onChange={handleProfileImageChange}
                    style={{ display: "none" }}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="signupUsername" className="form-label">Username</label>
                  <input
                    type="text"
                    id="signupUsername"
                    className="form-control"
                    placeholder="Choose a username"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="signupEmail" className="form-label">Email</label>
                  <input
                    type="email"
                    id="signupEmail"
                    className="form-control"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="signupPassword" className="form-label">Password</label>
                  <input
                    type="password"
                    id="signupPassword"
                    className="form-control"
                    placeholder="Choose a password"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-success w-100">Signup</button>
                <p className="text-center pt-3">Already have an account?<NavLink onClick={() => setActiveTab("login")} className={" ps-2"}>Log In</NavLink></p>
              </form>
            )}
          </div>
        </div>
      )}
      </div>
    </>
  );
}
