/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { useFormik } from "formik";
import "./Modal.scss";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";
import Oauth from "./Oauth";
import { Bounce, toast } from "react-toastify";
import { loginSchema, signupSchema } from "../../lib/schemas/LoginLogout";

export default function Modal({ isPopupOpen, setIsPopupOpen }) {
  const [activeTab, setActiveTab] = useState("login");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const { updateUser } = useContext(AuthContext);

  const loginFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_BACKEND_BASEURL}/api/auth/login`,
          values,
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        );
        updateUser(response.data);
        setIsPopupOpen(false);
        navigate("/");
        toast.success("🎉 Login successful!"+ (response.data.message || ""), {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
          transition: Bounce,
        });
        loginFormik.resetForm();
      } catch (error) {
        if (error.response && error.response.data) {
          setErrorMessage(error.response.data.message);
        } else {
          setErrorMessage("An unexpected error occurred");
        }
        toast.error("❌ "  + (error.response.data.error || ""), {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
          transition: Bounce,
        });
      }
    },
  });

  const signupFormik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      CPassword: "",
      terms: false,
    },
    validationSchema: signupSchema,
    onSubmit: async (values) => {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_BACKEND_BASEURL}/api/auth/register`,
          values,
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        );
        console.log("Signup Response:", response);
        signupFormik.resetForm();
        // setIsPopupOpen(false);
        // navigate("/");
        setActiveTab("login");
        toast.success("🎉 Signup successful! You can now log in."+ (response.data.message || ""), {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
          transition: Bounce,
        });
      } catch (error) {
        // console.error(error);
        toast.error("❌ " + (error.response.data.error || ""), {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
          transition: Bounce,
        });
      }
    },
  });

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
                overflowY: "scroll",
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
                <form onSubmit={loginFormik.handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="loginEmail" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      id="loginEmail"
                      name="email"
                      placeholder="Enter your email"
                      onBlur={loginFormik.handleBlur}
                      onChange={loginFormik.handleChange}
                      value={loginFormik.values.email}
                      className={
                        loginFormik.errors.email && loginFormik.touched.email
                          ? "input-error form-control"
                          : "form-control "
                      }
                    />
                    {loginFormik.touched.email && loginFormik.errors.email && (
                      <p className="error  pt-2">{loginFormik.errors.email}</p>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="loginPassword" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="loginPassword"
                      placeholder="Enter your password"
                      onChange={loginFormik.handleChange}
                      value={loginFormik.values.password}
                      onBlur={loginFormik.handleBlur}
                      className={
                        loginFormik.errors.password &&
                        loginFormik.touched.password
                          ? "input-error form-control"
                          : "form-control"
                      }
                    />
                    {loginFormik.touched.password &&
                      loginFormik.errors.password && (
                        <p className="error  pt-2">
                          {loginFormik.errors.password}
                        </p>
                      )}
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
                <form onSubmit={signupFormik.handleSubmit} className="">
                  <div className="mb-3">
                    <label htmlFor="signupUsername" className="form-label">
                      Username
                    </label>
                    <input
                      type="text"
                      id="signupUsername"
                      name="username"
                      placeholder="Choose a username"
                      onChange={signupFormik.handleChange}
                      value={signupFormik.values.username}
                      onBlur={signupFormik.handleBlur}
                      className={
                        signupFormik.errors.username &&
                        signupFormik.touched.username
                          ? "input-error form-control"
                          : "form-control"
                      }
                    />
                    {signupFormik.touched.username &&
                      signupFormik.errors.username && (
                        <p className="error pt-2">
                          {signupFormik.errors.username}
                        </p>
                      )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="signupEmail" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="signupEmail"
                      placeholder="Enter your email"
                      onChange={signupFormik.handleChange}
                      value={signupFormik.values.email}
                      onBlur={signupFormik.handleBlur}
                      className={
                        signupFormik.errors.email && signupFormik.touched.email
                          ? "input-error form-control"
                          : "form-control"
                      }
                    />
                    {signupFormik.touched.email &&
                      signupFormik.errors.email && (
                        <p className="error pt-2">
                          {signupFormik.errors.email}
                        </p>
                      )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="signupPassword" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      id="signupPassword"
                      name="password"
                      placeholder="Choose a password"
                      onChange={signupFormik.handleChange}
                      value={signupFormik.values.password}
                      onBlur={signupFormik.handleBlur}
                      className={
                        signupFormik.errors.password &&
                        signupFormik.touched.password
                          ? "input-error form-control"
                          : "form-control"
                      }
                    />
                    {signupFormik.touched.password &&
                      signupFormik.errors.password && (
                        <p className="error pt-2">
                          {signupFormik.errors.password}
                        </p>
                      )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="signupCPassword" className="form-label">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      id="signupCPassword"
                      name="CPassword"
                      placeholder="Confirm your password"
                      onChange={signupFormik.handleChange}
                      value={signupFormik.values.CPassword}
                      onBlur={signupFormik.handleBlur}
                      className={`form-control ${
                        signupFormik.touched.CPassword &&
                        signupFormik.errors.CPassword
                          ? "input-error form-control"
                          : "form-control"
                      }`}
                    />
                    {signupFormik.touched.CPassword &&
                      signupFormik.errors.CPassword && (
                        <p className="error pt-2">
                          {signupFormik.errors.CPassword}
                        </p>
                      )}
                  </div>
                  <div className="mb-3">
                    <input
                      type="checkbox"
                      id="terms"
                      name="terms"
                      onChange={signupFormik.handleChange}
                      value={signupFormik.values.terms}
                      onBlur={signupFormik.handleBlur}
                      className={
                        signupFormik.errors.terms && signupFormik.touched.terms
                          ? "input-error "
                          : ""
                      }
                    />
                    <label htmlFor="terms" className="form-label ps-2">
                      Accept Terms & Conditions
                    </label>
                    {signupFormik.touched.terms &&
                      signupFormik.errors.terms && (
                        <p className="error ">{signupFormik.errors.terms}</p>
                      )}
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
