/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import "./Modal.scss";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";
import Oauth from "./Oauth";

export default function Modal({ isPopupOpen, setIsPopupOpen }) {
  const [activeTab, setActiveTab] = useState("login");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const { updateUser } = useContext(AuthContext);

  const handleRegister = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_BASEURL}/api/auth/register`,
        {
          username,
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(response.data);
      setIsPopupOpen(false);
      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_BASEURL}/api/auth/login`,
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      updateUser(response.data);
      setIsPopupOpen(false);
      navigate("/");
    } catch (error) {
      //todo t thing i used to respons.data.message for error message.
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage("An unexpected error occurred");
      }
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
                maxHeight: "600px",
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
                  color: "red",
                  backgroundColor: "red",
                  cursor: "pointer",
                }}
              ></button>

              <ul
                className="nav nav-tabs mb-4"
                style={{ justifyContent: "center" }}
              >
                <li className="nav-item">
                  <button
                    className={`nav-link ${
                      activeTab === "login" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("login")}
                    style={{
                      border: "none",
                      borderBottom:
                        activeTab === "login" ? "2px solid #0d6efd" : "none",
                      background: "none",
                      cursor: "pointer",
                    }}
                  >
                    Login
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link ${
                      activeTab === "signup" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("signup")}
                    style={{
                      border: "none",
                      borderBottom:
                        activeTab === "signup" ? "2px solid #0d6efd" : "none",
                      background: "none",
                      cursor: "pointer",
                    }}
                  >
                    Signup
                  </button>
                </li>
              </ul>

              {activeTab === "login" && (
                <form onSubmit={handleLogin}>
                  <div className="mb-3">
                    <label htmlFor="loginEmail" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      id="loginEmail"
                      name="email"
                      className="form-control"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="loginPassword" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="loginPassword"
                      className="form-control"
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                  <NavLink className={" text-decoration-none"}>
                    <p className=" text-end">Forgot password?</p>
                  </NavLink>
                  <button type="submit" className={`btn btn-primary w-100 `}>
                    Login
                  </button>
                  <Oauth
                    isPopupOpen={isPopupOpen}
                    setIsPopupOpen={setIsPopupOpen}
                    ra={"ram"}
                  />
                  <p className="text-center pt-3">
                    Not a Member?{" "}
                    <NavLink onClick={() => setActiveTab("signup")}>
                      Create Account
                    </NavLink>
                    {errorMessage && (
                      <p className="error-message text-danger">
                        {errorMessage}
                      </p>
                    )}
                  </p>
                </form>
              )}

              {activeTab === "signup" && (
                <form onSubmit={handleRegister}>
                  <div className="mb-3">
                    <label htmlFor="signupUsername" className="form-label">
                      Username
                    </label>
                    <input
                      type="text"
                      id="signupUsername"
                      name="username"
                      className="form-control"
                      placeholder="Choose a username"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="signupEmail" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="signupEmail"
                      className="form-control"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="signupPassword" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      id="signupPassword"
                      name="password"
                      className="form-control"
                      placeholder="Choose a password"
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    Signup
                  </button>
                  <Oauth
                    isPopupOpen={isPopupOpen}
                    setIsPopupOpen={setIsPopupOpen}
                    ra={"ram"}
                  />

                  <p className="text-center pt-3">
                    Already have an account?
                    <NavLink
                      onClick={() => setActiveTab("login")}
                      className={" ps-2"}
                    >
                      Log In
                    </NavLink>
                  </p>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
