import "../Components/Navbar.scss";

function Navbar() {
    return (
        <>
            <nav className="navbar bg-danger">
                <div className="container-fluid mx-2">
                    {/* <a className="navbar-brand" href="#">Offcanvas navbar</a> */}
                    <img className="img img-fluid" src="https://prasidhirealtysolutions.in/wp-content/uploads/2024/05/prasidhi-realty-solutions_LOGO.svg" alt="logo" />
                    <div className="d-none d-md-block ">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 flex-row gap-4 ">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                        
                            <li className="nav-item mega-dropdown">
                                <a className="nav-link" href="#">For Buyers</a>
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
                                <a className="nav-link" href="#">For Tenants</a>
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
                                <a className="nav-link" href="#">For Owners</a>
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
                                <a className="nav-link" href="#">For Dealers / Builders</a>
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
                                <a className="nav-link" href="#">Insights</a>
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

                    <div className="btnWrappers">
                        <button className="btn px-4 py-1 btn-outline-warning">Post Property</button>
                    </div>

                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
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



