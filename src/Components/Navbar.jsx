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
                                <div className="navlinkWrapper">
                                <NavLink className="navlink" to={"/"}>Home</NavLink>
                                </div>
                                
                            </li>
                        
                            <li className="nav-item mega-dropdown">
                                <div className="navlinkWrapper">
                                <NavLink className="navlink" to={"/for-buyers"}>For Buyers</NavLink>
                                </div>

                                {/* //todo --> Mega Menu Uncomment If Needed */}
                                {/* <div className="mega-dropdown-content">
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
                                </div> */}

                            </li>
                            <li className="nav-item mega-dropdown">
                            <div className="navlinkWrapper">
                            <NavLink className="navlink" to={"/for-tenants"}>For Tenants</NavLink>
                            </div>

                                {/* //todo --> Mega Menu Uncomment If Needed */}
                                {/* <div className="mega-dropdown-content">
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
                                </div> */}

                            </li>
                            <li className="nav-item mega-dropdown">
                            <div className="navlinkWrapper">
                            <NavLink className="navlink" to={"/for-owners"}>For Owners</NavLink>
                            </div>

                                 {/* //todo --> Mega Menu Uncomment If Needed */}
                                {/* <div className="mega-dropdown-content">
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
                                </div> */}

                            </li>
                            <li className="nav-item mega-dropdown">
                            <div className="navlinkWrapper">
                            <NavLink className="navlink" to={"/for-dealers-builders"}>For Dealers / Builders</NavLink>
                            </div>
                            
                                 {/* //todo --> Mega Menu Uncomment If Needed */}
                                {/* <div className="mega-dropdown-content">
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
                                </div> */}

                            </li>
                            <li className="nav-item mega-dropdown">
                            <div className="navlinkWrapper">
                            <NavLink className="navlink" to={"/insights"}>Insights <span className="insightsBadge">New</span></NavLink>
                            </div>
                                
                                 {/* //todo --> Mega Menu Uncomment If Needed */}
                                {/* <div className="mega-dropdown-content">
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
                                </div> */}

                            </li>
                        </ul>
                    </div>

                    <div className="postPropertyWrapper">
                        <button className="btn btn-light px-1 py-1 ">
                        <a className="postProperty text-dark fw-medium" to={"/post-property"}>Post Property </a>
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
                     
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;