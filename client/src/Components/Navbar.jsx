import { NavLink, useNavigate } from "react-router-dom";
import "../Components/Navbar.scss";
import { RiMenu2Line } from "react-icons/ri";
import { PiUserCircleCheckDuotone } from "react-icons/pi";
import { useContext, useEffect, useState } from "react";
import Modal from "./Modal";
import { AuthContext } from "../Context/AuthContext";

function Navbar() {
  const { currentUser } = useContext(AuthContext);

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/list-Property");
  };

  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const stickyPoint = window.innerHeight * 0.6;

    if (scrollPosition > stickyPoint) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`navbar fixed-top w-100  ${
          isSticky ? "sticky-topp" : ""
        } px-2 px-md-5`}
      >
        <div className="container-fluid mx-2 align-items-center ">
          <img
            className="img img-fluid"
            src="https://prasidhirealtysolutions.in/wp-content/uploads/2024/05/prasidhi-realty-solutions_LOGO.svg"
            alt="logo"
          />
          <div className="d-none d-md-block ms-auto pe-5 align-items-center">
            <ul className="navbar-nav me-auto mb-lg-0 flex-row gap-4 align-items-center ">
              <li className="nav-item">
                <div className="navlinkWrapper">
                  <NavLink className="navlink" to={"/"}>
                    Home
                  </NavLink>
                </div>
              </li>

              {/* <li className="nav-item mega-dropdown">
                <div className="navlinkWrapper">
                  <NavLink className="navlink" to={"/for-buyers"}>
                    For Buyers
                  </NavLink>
                </div>

                //todo --> Mega Menu Uncomment If Needed get in to github this file prev commits
              </li> */}

              {/* <li className="nav-item mega-dropdown">
                <div className="navlinkWrapper">
                  <NavLink className="navlink" to={"/for-tenants"}>
                    For Tenants
                  </NavLink>
                </div>
              </li> */}

              <li className="nav-item mega-dropdown d-lg-block d-none">
                <div className="navlinkWrapper">
                  <NavLink className="navlink" to={"/for-owners"}>
                    For Owners
                  </NavLink>
                </div>
              </li>

              <li className="nav-item mega-dropdown d-lg-block d-none">
                <div className="navlinkWrapper">
                  <NavLink className="navlink" to={"/for-dealers-builders"}>
                    For Dealers / Builders
                  </NavLink>
                </div>
              </li>

              <li className="nav-item mega-dropdown">
                <div className="navlinkWrapper">
                  <NavLink className="navlink" to={"/insights"}>
                    News
                    {/* <span className="insightsBadge">New</span> */}
                  </NavLink>
                </div>
              </li>

              <li>
                <div className="postPropertyWrapper d-none d-sm-block">
                  <button
                    className="btn btn-light px-1 py-1 "
                    onClick={handleNavigate}
                  >
                    <a
                      className="postProperty text-dark fw-medium"
                      to={"/post-property"}
                    >
                      Post Property{" "}
                    </a>
                    <span className="postPropertyBadge">FREE</span>
                  </button>
                </div>
              </li>
              <li>
                {currentUser ? (
                  <div className="user">
                    <NavLink className=" text-decoration-none text-light" to={"/profile/update"}>
                      <img
                        src={
                          currentUser.avatar ||
                          "https://cdn-icons-gif.flaticon.com/17626/17626903.gif"
                        }
                        alt="userImg"
                      />
                      <span >{currentUser.username}</span>
                    </NavLink>

                    <NavLink to={"/profile"} className={"profile"}>
                      <div className="notification">3</div>
                      <span>Profile</span>
                    </NavLink>
                  </div>
                ) : (
                  <button
                    onClick={() => setIsPopupOpen(true)}
                    className="btn btn-primary"
                  >
                    Login/Signup
                  </button>
                )}
              </li>
              {/* <li className="nav-item">
                <div className="">
                  <button onClick={()=>setIsPopupOpen(!isPopupOpen)} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Login/Signup</button>
                </div>
              </li> */}
            </ul>
          </div>

          <button
            className={`navbar-toggler `}
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className=" fs-3">
              <RiMenu2Line />
            </span>
          </button>

          <div
            className={`offcanvas offcanvas-end `}
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            style={{ transition: "transform .6s ease-in-out" }}
          >
            <div className="offcanvas-header shadow ">
              <p className="offcanvas-title" id="offcanvasNavbarLabel">
                <PiUserCircleCheckDuotone className="fs-2 " />
                <button
                  className="offcanvasNavlinkWrapper border-0 bg-transparent"
                  data-bs-dismiss="offcanvas"
                >
                  <NavLink
                    className={"ps-3 text-decoration-none  fw-semibold "}
                    onClick={() => setIsPopupOpen(true)}
                  >
                    Login / Register
                  </NavLink>
                </button>
              </p>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>

            <div className="offcanvas-body">
              <div className="postPropertyCard d-flex justify-content-center align-items-center mx-3 my-2 px-3  ">
                <img
                  className="img img-fluid w-50 pt-3"
                  src="https://c.housingcdn.com/supply/s/client/common/assets/postProperty.3f9c046b.svg"
                  alt="postimg"
                />
                <div className="d-flex flex-column align-items-center gap-2 ">
                  <p className="m-0">Looking to Sell / Rent Your Property ? </p>
                  {/* <p>Then Why You Wating For List Yor Property Free</p> */}
                  <button className="btn btn-outline-warning text-dark rounded-3">
                    Post Property
                  </button>
                </div>
              </div>

              <ul className="navbar-nav justify-content-end flex-grow-1 ">
                <button
                  className="offcanvasNavlinkWrapper"
                  data-bs-dismiss="offcanvas"
                >
                  <NavLink
                    className="text-decoration-none main-nav "
                    to={"/premium"}
                  >
                    <li className="nav-item d-flex align-items-center rounded-3">
                      <img
                        className=""
                        src="https://cdn-icons-png.flaticon.com/128/636/636600.png"
                        alt="icon"
                      />
                      <span className="ps-4 navlinks">
                        Zero Brokerage Properties
                      </span>
                    </li>
                  </NavLink>
                </button>

                <button
                  className="offcanvasNavlinkWrapper"
                  data-bs-dismiss="offcanvas"
                >
                  <NavLink
                    className="text-decoration-none  "
                    to={"/user-profile/my-transactions"}
                  >
                    <li className="nav-item d-flex align-items-center rounded-3">
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/8231/8231679.png"
                        alt="icon"
                      />
                      <span className="ps-4 navlinks">My Transactions</span>
                    </li>
                  </NavLink>
                </button>

                <button
                  className="offcanvasNavlinkWrapper"
                  data-bs-dismiss="offcanvas"
                >
                  <NavLink
                    className=" text-decoration-none main-nav"
                    to={"user-profile/my-review"}
                  >
                    <li className="nav-item d-flex border-bottom align-items-center rounded-3">
                      <img
                        className=""
                        src="https://cdn-icons-png.flaticon.com/128/2902/2902475.png"
                        alt="icon"
                      />

                      <span className="ps-4 navlinks">My Reviews</span>
                    </li>
                  </NavLink>
                </button>

                <div
                  className="accordion accordion-flush border-0"
                  id="accordionFlushExample"
                >
                  <div className="accordion-item border-0">
                    <h2 className="accordion-header d-flex align-items-center">
                      <button
                        className="accordion-button  px-0 collapsed border-0 shadow-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                      >
                        <img
                          className=""
                          src="https://cdn-icons-png.flaticon.com/128/4423/4423990.png"
                          alt="icon"
                        />
                        <span className="ps-4">Quick Links</span>
                      </button>
                    </h2>
                    <div
                      id="flush-collapseOne"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body p-0 py-2">
                        <div className="bodyWrapper d-flex flex-wrap gap-3">
                          <button
                            className="offcanvasNavlinkWrapper "
                            data-bs-dismiss="offcanvas"
                          >
                            <NavLink className="accordion-nav" to={"/"}>
                              <div className="QlinksWrapper p-2 border  rounded d-flex justify-content-center align-items-center flex-column">
                                <img
                                  src="https://cdn-icons-png.flaticon.com/128/2413/2413074.png"
                                  alt="home"
                                />
                                <div className="Qlinks text-center">Home</div>
                              </div>
                            </NavLink>
                          </button>

                          <button
                            className="offcanvasNavlinkWrapper"
                            data-bs-dismiss="offcanvas"
                          >
                            <NavLink className="accordion-nav" to={"/"}>
                              <div className="QlinksWrapper p-2 fs-6 border d-flex justify-content-center align-items-center flex-column rounded ">
                                <img
                                  src="https://cdn-icons-png.flaticon.com/128/1611/1611179.png"
                                  alt="owner-packages"
                                />
                                <div className="Qlinks text-center">
                                  Owner Packages
                                </div>
                              </div>
                            </NavLink>
                          </button>

                          <button
                            className="offcanvasNavlinkWrapper "
                            data-bs-dismiss="offcanvas"
                          >
                            <NavLink className="accordion-nav" to={"/"}>
                              <div className="QlinksWrapper p-2 border d-flex justify-content-center align-items-center flex-column rounded">
                                <img
                                  src="https://cdn-icons-png.flaticon.com/128/16828/16828036.png"
                                  alt="post-propetys"
                                />
                                <div className="Qlinks text-center">
                                  Post Properties
                                </div>
                              </div>
                            </NavLink>
                          </button>

                          <button
                            className="offcanvasNavlinkWrapper"
                            data-bs-dismiss="offcanvas"
                          >
                            <NavLink className="accordion-nav" to={"/"}>
                              <div className="QlinksWrapper p-2 border d-flex justify-content-center align-items-center flex-column rounded">
                                <img
                                  src="https://cdn-icons-png.flaticon.com/128/81/81460.png"
                                  alt="news-icon"
                                />
                                <div className="Qlinks text-center">News</div>
                              </div>
                            </NavLink>
                          </button>

                          <button
                            className="offcanvasNavlinkWrapper"
                            data-bs-dismiss="offcanvas"
                          >
                            <NavLink className="accordion-nav" to={"/"}>
                              <div className="QlinksWrapper border d-flex justify-content-center align-items-center flex-column rounded">
                                <img
                                  src="https://cdn-icons-png.flaticon.com/128/15178/15178510.png"
                                  alt="research"
                                />
                                <div className="Qlinks text-center">
                                  Research
                                </div>
                              </div>
                            </NavLink>
                          </button>

                          <button
                            className="offcanvasNavlinkWrapper"
                            data-bs-dismiss="offcanvas"
                          >
                            <NavLink className="accordion-nav" to={"/"}>
                              <div className="QlinksWrapper p-2 border d-flex justify-content-center align-items-center flex-column rounded">
                                <img
                                  className=""
                                  src="https://cdn-icons-png.flaticon.com/128/636/636600.png"
                                  alt="icon"
                                />
                                <div className="Qlinks text-center">
                                  Housing Premium
                                </div>
                              </div>
                            </NavLink>
                          </button>

                          <button
                            className="offcanvasNavlinkWrapper"
                            data-bs-dismiss="offcanvas"
                          >
                            <NavLink className="accordion-nav" to={"/"}>
                              <div className="QlinksWrapper p-2 border d-flex justify-content-center align-items-center flex-column rounded">
                                <img
                                  src="https://cdn-icons-png.flaticon.com/128/4393/4393392.png"
                                  alt="pay-on-credit-icon"
                                />
                                <div className="Qlinks text-center">
                                  Pay on Credit
                                </div>
                              </div>
                            </NavLink>
                          </button>

                          <button
                            className="offcanvasNavlinkWrapper"
                            data-bs-dismiss="offcanvas"
                          >
                            <NavLink className="accordion-nav" to={"/"}>
                              <div className="QlinksWrapper p-2 border d-flex justify-content-center align-items-center flex-column rounded ">
                                <img
                                  src="https://cdn-icons-png.flaticon.com/128/10055/10055352.png"
                                  alt="protact-icon"
                                />
                                <div className="Qlinks text-center">
                                  Housing Protect
                                </div>
                              </div>
                            </NavLink>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item border-0">
                    <h2 className="accordion-header d-flex align-items-center">
                      <button
                        className="accordion-button px-0 collapsed border-0 shadow-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo"
                      >
                        <img
                          src="https://cdn-icons-png.flaticon.com/128/16988/16988865.png"
                          alt="icon"
                        />
                        <span className="ps-4">Housing Edge</span>
                      </button>
                    </h2>
                    <div
                      id="flush-collapseTwo"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body p-0 py-2">
                        <div className="bodyWrapper d-flex flex-wrap gap-3">
                          <button
                            className="offcanvasNavlinkWrapper"
                            data-bs-dismiss="offcanvas"
                          >
                            <NavLink className="accordion-nav" to={"/"}>
                              <div className="QlinksWrapper  rounded d-flex justify-content-center align-items-center flex-column">
                                <img
                                  src="https://cdn-icons-png.flaticon.com/128/2413/2413074.png"
                                  alt="home"
                                />
                                <div className="Qlinks text-center">
                                  Pay on Credit{" "}
                                </div>
                              </div>
                            </NavLink>
                          </button>

                          <button
                            className="offcanvasNavlinkWrapper"
                            data-bs-dismiss="offcanvas"
                          >
                            <NavLink className="accordion-nav" to={"/"}>
                              <div className="QlinksWrapper p-2 fs-6 border d-flex justify-content-center align-items-center flex-column rounded ">
                                <img
                                  src="https://cdn-icons-png.flaticon.com/128/1611/1611179.png"
                                  alt="owner-packages"
                                />
                                <div className="Qlinks text-center">
                                  Home Loans
                                </div>
                              </div>
                            </NavLink>
                          </button>

                          <button
                            className="offcanvasNavlinkWrapper"
                            data-bs-dismiss="offcanvas"
                          >
                            <NavLink className="accordion-nav" to={"/"}>
                              <div className="QlinksWrapper p-2 border d-flex justify-content-center align-items-center flex-column rounded">
                                <img
                                  src="https://cdn-icons-png.flaticon.com/128/16828/16828036.png"
                                  alt="post-propetys"
                                />
                                <div className="Qlinks text-center">
                                  Housing Premium
                                </div>
                              </div>
                            </NavLink>
                          </button>

                          <button
                            className="offcanvasNavlinkWrapper"
                            data-bs-dismiss="offcanvas"
                          >
                            <NavLink className="accordion-nav" to={"/"}>
                              <div className="QlinksWrapper p-2 border d-flex justify-content-center align-items-center flex-column rounded">
                                <img
                                  src="https://cdn-icons-png.flaticon.com/128/81/81460.png"
                                  alt="news-icon"
                                />
                                <div className="Qlinks text-center">
                                  Housing Protect
                                </div>
                              </div>
                            </NavLink>
                          </button>

                          <button
                            className="offcanvasNavlinkWrapper"
                            data-bs-dismiss="offcanvas"
                          >
                            <NavLink className="accordion-nav" to={"/"}>
                              <div className="QlinksWrapper border d-flex justify-content-center align-items-center flex-column rounded">
                                <img
                                  src="https://cdn-icons-png.flaticon.com/128/15178/15178510.png"
                                  alt="research"
                                />
                                <div className="Qlinks text-center">
                                  Rent Receipts
                                </div>
                              </div>
                            </NavLink>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item border-0">
                    <h2 className="accordion-header d-flex align-items-center">
                      <button
                        className="accordion-button px-0 collapsed border-0 shadow-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo"
                      >
                        <img
                          src="https://cdn-icons-png.flaticon.com/128/5167/5167002.png"
                          alt="icon"
                        />
                        <span className="ps-4"> Services</span>
                      </button>
                    </h2>
                    <div
                      id="flush-collapseThree"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body p-0 py-2">
                        <div className="bodyWrapper d-flex flex-wrap gap-3">
                          <button
                            className="offcanvasNavlinkWrapper"
                            data-bs-dismiss="offcanvas"
                          >
                            <NavLink className="accordion-nav" to={"/"}>
                              <div className="QlinksWrapper  rounded d-flex justify-content-center align-items-center flex-column">
                                <img
                                  src="https://cdn-icons-png.flaticon.com/128/2413/2413074.png"
                                  alt="home"
                                />
                                <div className="Qlinks text-center">
                                  Buy Properties
                                </div>
                              </div>
                            </NavLink>
                          </button>

                          <button
                            className="offcanvasNavlinkWrapper"
                            data-bs-dismiss="offcanvas"
                          >
                            <NavLink className="accordion-nav" to={"/"}>
                              <div className="QlinksWrapper p-2 fs-6 border d-flex justify-content-center align-items-center flex-column rounded ">
                                <img
                                  src="https://cdn-icons-png.flaticon.com/128/1611/1611179.png"
                                  alt="owner-packages"
                                />
                                <div className="Qlinks text-center">
                                  Rent Properties
                                </div>
                              </div>
                            </NavLink>
                          </button>

                          <button
                            className="offcanvasNavlinkWrapper"
                            data-bs-dismiss="offcanvas"
                          >
                            <NavLink className="accordion-nav" to={"/"}>
                              <div className="QlinksWrapper p-2 border d-flex justify-content-center align-items-center flex-column rounded">
                                <img
                                  src="https://cdn-icons-png.flaticon.com/128/16828/16828036.png"
                                  alt="post-propetys"
                                />
                                <div className="Qlinks text-center">
                                  PG/CO-Living
                                </div>
                              </div>
                            </NavLink>
                          </button>

                          <button
                            className="offcanvasNavlinkWrapper"
                            data-bs-dismiss="offcanvas"
                          >
                            <NavLink className="accordion-nav" to={"/"}>
                              <div className="QlinksWrapper p-2 border d-flex justify-content-center align-items-center flex-column rounded">
                                <img
                                  src="https://cdn-icons-png.flaticon.com/128/81/81460.png"
                                  alt="news-icon"
                                />
                                <div className="Qlinks text-center">
                                  Apply For Home Loan
                                </div>
                              </div>
                            </NavLink>
                          </button>

                          <button
                            className="offcanvasNavlinkWrapper"
                            data-bs-dismiss="offcanvas"
                          >
                            <NavLink className="accordion-nav" to={"/"}>
                              <div className="QlinksWrapper border d-flex justify-content-center align-items-center flex-column rounded">
                                <img
                                  src="https://cdn-icons-png.flaticon.com/128/15178/15178510.png"
                                  alt="research"
                                />
                                <div className="Qlinks text-center">
                                  EMI Calculator
                                </div>
                              </div>
                            </NavLink>
                          </button>

                          <button
                            className="offcanvasNavlinkWrapper"
                            data-bs-dismiss="offcanvas"
                          >
                            <NavLink className="accordion-nav" to={"/"}>
                              <div className="QlinksWrapper p-2 border d-flex justify-content-center align-items-center flex-column rounded">
                                <img
                                  className=""
                                  src="https://cdn-icons-png.flaticon.com/128/636/636600.png"
                                  alt="icon"
                                />
                                <div className="Qlinks text-center">
                                  Property Value
                                </div>
                              </div>
                            </NavLink>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item border-0 ">
                    <h2 className="accordion-header d-flex align-items-center">
                      <button
                        className="accordion-button px-0 collapsed border-0 shadow-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseFour"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo"
                      >
                        <img
                          src="https://cdn-icons-png.flaticon.com/128/2168/2168120.png"
                          alt="icon"
                        />
                        <span className="ps-4"> Top Search</span>
                      </button>
                    </h2>
                    <div
                      id="flush-collapseFour"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body p-0 py-2">
                        <div className="bodyWrapper d-flex flex-wrap gap-3">
                          <button
                            className="offcanvasNavlinkWrapper"
                            data-bs-dismiss="offcanvas"
                          >
                            <NavLink className="accordion-nav" to={"/"}>
                              <div className="QlinksWrapper  rounded d-flex justify-content-center align-items-center flex-column">
                                <img
                                  src="https://cdn-icons-png.flaticon.com/128/2413/2413074.png"
                                  alt="home"
                                />
                                <div className="Qlinks text-center">
                                  All Cities
                                </div>
                              </div>
                            </NavLink>
                          </button>

                          <button
                            className="offcanvasNavlinkWrapper"
                            data-bs-dismiss="offcanvas"
                          >
                            <NavLink className="accordion-nav" to={"/"}>
                              <div className="QlinksWrapper p-2 fs-6 border d-flex justify-content-center align-items-center flex-column rounded ">
                                <img
                                  src="https://cdn-icons-png.flaticon.com/128/1611/1611179.png"
                                  alt="owner-packages"
                                />
                                <div className="Qlinks text-center">
                                  Rent in Top Localities
                                </div>
                              </div>
                            </NavLink>
                          </button>

                          <button
                            className="offcanvasNavlinkWrapper"
                            data-bs-dismiss="offcanvas"
                          >
                            <NavLink className="accordion-nav" to={"/"}>
                              <div className="QlinksWrapper p-2 border d-flex justify-content-center align-items-center flex-column rounded">
                                <img
                                  src="https://cdn-icons-png.flaticon.com/128/16828/16828036.png"
                                  alt="post-propetys"
                                />
                                <div className="Qlinks text-center">
                                  Prise Trends
                                </div>
                              </div>
                            </NavLink>
                          </button>

                          <button
                            className="offcanvasNavlinkWrapper"
                            data-bs-dismiss="offcanvas"
                          >
                            <NavLink className="accordion-nav" to={"/"}>
                              <div className="QlinksWrapper p-2 border d-flex justify-content-center align-items-center flex-column rounded">
                                <img
                                  src="https://cdn-icons-png.flaticon.com/128/81/81460.png"
                                  alt="news-icon"
                                />
                                <div className="Qlinks text-center">
                                  Collections
                                </div>
                              </div>
                            </NavLink>
                          </button>

                          <button
                            className="offcanvasNavlinkWrapper"
                            data-bs-dismiss="offcanvas"
                          >
                            <NavLink className="accordion-nav" to={"/"}>
                              <div className="QlinksWrapper border d-flex justify-content-center align-items-center flex-column rounded">
                                <img
                                  src="https://cdn-icons-png.flaticon.com/128/15178/15178510.png"
                                  alt="research"
                                />
                                <div className="Qlinks text-center">
                                  Rent in Top Socities
                                </div>
                              </div>
                            </NavLink>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item border-0">
                    <h2 className="accordion-header d-flex align-items-center">
                      <button
                        className="accordion-button px-0 collapsed border-0 shadow-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseFive"
                        aria-expanded="false"
                        aria-controls="flush-collapseThree"
                      >
                        <img
                          src="https://cdn-icons-png.flaticon.com/128/3176/3176276.png"
                          alt="icon"
                        />
                        <span className="ps-4">Housing Advice</span>
                      </button>
                    </h2>
                    <div
                      id="flush-collapseFive"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body p-0 py-2">
                        <div className="bodyWrapper d-flex flex-wrap gap-3">
                          <button
                            className="offcanvasNavlinkWrapper"
                            data-bs-dismiss="offcanvas"
                          >
                            <NavLink className="accordion-nav" to={"/"}>
                              <div className="QlinksWrapper p-2 border d-flex justify-content-center align-items-center flex-column rounded ">
                                <img
                                  src="https://cdn-icons-png.flaticon.com/128/10055/10055352.png"
                                  alt="protact-icon"
                                />
                                <div className="Qlinks text-center">
                                  Buying Guide
                                </div>
                              </div>
                            </NavLink>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  className="offcanvasNavlinkWrapper"
                  data-bs-dismiss="offcanvas"
                >
                  <NavLink
                    className="text-decoration-none main-nav "
                    to={"/report-fraud"}
                  >
                    <li className="nav-item d-flex align-items-center rounded-3">
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/8805/8805003.png"
                        alt="icon"
                      />
                      <span className="ps-4 navlinks">Report a Fraud</span>
                    </li>
                  </NavLink>
                </button>

                <button
                  className="offcanvasNavlinkWrapper"
                  data-bs-dismiss="offcanvas"
                >
                  <NavLink
                    className="text-decoration-none main-nav "
                    to={"/unsubscribe"}
                  >
                    <li className="nav-item d-flex align-items-center rounded-3">
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/17445/17445802.png"
                        alt="icon"
                      />
                      <span className="ps-4 navlinks">Unsubscribe Alerts</span>
                    </li>
                  </NavLink>
                </button>

                <button
                  className="offcanvasNavlinkWrapper"
                  data-bs-dismiss="offcanvas"
                >
                  <NavLink
                    className="main-nav text-decoration-none my-2 "
                    to={"/support"}
                  >
                    <li className="nav-item d-flex align-items-center ps-4 border rounded-3">
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/13714/13714831.png"
                        alt="icon"
                      />

                      <span className="ps-4 navlinks">Visit Help Center</span>

                      <img
                        className="ms-auto pe-2"
                        src="https://cdn-icons-png.flaticon.com/128/2989/2989988.png"
                        alt="icon"
                      />
                    </li>
                  </NavLink>
                </button>
              </ul>
            </div>
          </div>
        </div>

        <Modal isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} />
      </nav>
    </>
  );
}

export default Navbar;
