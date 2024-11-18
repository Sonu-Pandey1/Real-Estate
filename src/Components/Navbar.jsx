import { NavLink } from "react-router-dom";
import "../Components/Navbar.scss";
import { RiMenu2Line } from "react-icons/ri";

function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="container-fluid mx-2 ">
    
                    <img className="img img-fluid" src="https://prasidhirealtysolutions.in/wp-content/uploads/2024/05/prasidhi-realty-solutions_LOGO.svg" alt="logo" />
                    <div className="d-none d-md-block ">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 flex-row gap-4 ">
                            <li className="nav-item">
                                <NavLink className="navlink" to={"/"}>Home</NavLink>
                            </li>
                        
                            <li className="nav-item mega-dropdown">
                                <NavLink className="navlink" to={"/for-buyers"}>For Buyers</NavLink>
                                
                                <div className="mega-dropdown-content">
                                    <div className="row">
                                        <div className="col">
                                            <h5>Category 1</h5>
                                            <a href="#">Item 1</a>
                                            <a href="#">Item 2</a>
                                        </div>
                                        <div className="col">
                                            <h5>Category 2</h5>
                                            <a href="#">Item 1</a>
                                            <a href="#">Item 2</a>
                                        </div>
                                        <div className="col">
                                            <h5>Category 3</h5>
                                            <a href="#">Item 1</a>
                                            <a href="#">Item 2</a>
                                        </div>
                                        
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item mega-dropdown">
                                <NavLink className="navlink" to={"/for-tenants"}>For Tenants</NavLink>

                                <div className="mega-dropdown-content">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <h5>Category 1</h5>
                                            <a href="#">Item 1</a>
                                            <a href="#">Item 2</a>
                                        </div>
                                        <div className="col-md-3">
                                            <h5>Category 2</h5>
                                            <a href="#">Item 1</a>
                                            <a href="#">Item 2</a>
                                        </div>
                                       
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item mega-dropdown">
                                <NavLink className="navlink" to={"/for-owners"}>For Owners</NavLink>

                                
                                <div className="mega-dropdown-content">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <h5>Category 1</h5>
                                            <a href="#">Item 1</a>
                                            <a href="#">Item 2</a>
                                        </div>
                                        <div className="col-md-3">
                                            <h5>Category 2</h5>
                                            <a href="#">Item 1</a>
                                            <a href="#">Item 2</a>
                                        </div>
                                        
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item mega-dropdown">
                                <NavLink className="navlink" to={"/for-builders"}>For Dealers / Builders</NavLink>

                                <div className="mega-dropdown-content">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <h5>Category 1</h5>
                                            <a href="#">Item 1</a>
                                            <a href="#">Item 2</a>
                                        </div>
                                        <div className="col-md-3">
                                            <h5>Category 2</h5>
                                            <a href="#">Item 1</a>
                                            <a href="#">Item 2</a>
                                        </div>
                                        
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item mega-dropdown">
                                <NavLink className="navlink" to={"/for-insights"}>Insights <span className="insightsBadge">New</span></NavLink>

                                <div className="mega-dropdown-content">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <h5>Category 1</h5>
                                            <a href="#">Item 1</a>
                                            <a href="#">Item 2</a>
                                        </div>
                                        <div className="col-md-3">
                                            <h5>Category 2</h5>
                                            <a href="#">Item 1</a>
                                            <a href="#">Item 2</a>
                                        </div>
                                       
                                    </div>
                                </div>
                            </li>
                            
                        </ul>
                    </div>

                    <div className="postPropertyWrapper">
                        <button className="btn px-3 py-1 bg-white ">
                        <NavLink className="navlink text-dark fw-medium" to={"/post-property"}>Post Property </NavLink>
                        <span className="postPropertyBadge">FREE</span>
                        </button>

                    </div>

                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                      
                        <span className=" fs-3"><RiMenu2Line/></span>
                    </button>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Link</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                            </ul>
                            {/* <form className="d-flex mt-3" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form> */}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;





// @import "../scss//variables";


// .navbar {
//   background-color: #6b5eae;
//   backdrop-filter: blur(20px);
//   padding: 10px 40px;
//   background-image: linear-gradient(
//     rgba(0, 0, 0, 0.45),
//     rgba(0, 0, 0, 0.25),
//     transparent
//   );

//   .navlink {
//     color: $lightwhite;
//     text-decoration: none;
//   }

//   .mega-dropdown{
//     // position: relative;
//     .insightsBadge{
//         position: absolute;
//         top: 18px;
//         // left: 10px;
//         background-color: #eba612;
//           padding: 5px 5px 5px 5px;
//           font-size: 10px;
//           font-weight: 700;
//           line-height: 6px;
//           border-radius: 3px;
//           color: $white;
//           display: inline-block;
//         //   position: relative;
//           margin-left: 2px;
//           margin-right: 1px;
//       }
//   }
  

//   .postPropertyWrapper {
//     // border-radius: 20px !important;
//     .postPropertyBadge {
//       background-color: #219653;
//       padding: 5px 5px 5px 5px;
//       font-size: 9px;
//       font-weight: 700;
//       line-height: 6px;
//       border-radius: 3px;
//       color: #fff;
//       display: inline-block;
//     //   position: relative;
//       margin-left: 2px;
//       margin-right: 1px;
//     //   margin-bottom: 1px;
//     //   overflow: hidden;
//     }
//   }
// }

// /* Ensure the mega dropdown appears full-width */
// .mega-dropdown {
//   // position: relative;
// }

// .mega-dropdown:hover .mega-dropdown-content {
//   display: block;
//   // background-color: brown;
//   // border-radius: 20px;
// }

// .mega-dropdown-content {
//   display: none;
//   position: absolute;
//   // top: 100%;
//   // top: 46px;
//   left: 0;
//   width: 100vw; /* Full width of the viewport */
//   background-color: #f8f9fa;
//   padding: 20px;
//   z-index: 1000;
// }

// .mega-dropdown-content .row {
//   display: flex;
//   justify-content: space-between;
// }

// .mega-dropdown-content .col-md-3 {
//   padding: 10px;
// }

// .mega-dropdown-content h5 {
//   margin-bottom: 15px;
// }

// .mega-dropdown-content a {
//   display: block;
//   margin: 5px 0;
// }

// /* Style for Navbar when on smaller screens (mobile) */
// @media (max-width: 991px) {
//   .mega-dropdown-content {
//     width: auto; /* Reset width on smaller screens */
//   }
// }
