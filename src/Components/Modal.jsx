/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Modal.scss"

export default function Modal({ isPopupOpen, setIsPopupOpen }) {
  const [activeTab, setActiveTab] = useState("login");
  const [profileImage, setProfileImage] = useState("https://via.placeholder.com/80");

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
            className="popupForm"
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "10px",
              width: "90%",
              maxWidth: "400px",
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
                background: "none",
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
                <h3 className="text-center mb-3">Login</h3>
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
                <button type="submit" className="btn btn-primary w-100">Login</button>
              </form>
            )}

            {activeTab === "signup" && (
              <form>
                <h3 className="text-center mb-3">Signup</h3>
                <div className="mb-3 text-center">
                  <label htmlFor="signupPhoto">
                    <img
                      src={profileImage}
                      alt="Profile"
                      className="rounded-circle mb-3"
                      style={{
                        width: "80px",
                        height: "80px",
                        objectFit: "cover",
                        cursor: "pointer",
                      }}
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
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
