import "./Footer.scss";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { SlSocialTwitter } from "react-icons/sl";
import { CiLinkedin } from "react-icons/ci";
import { SiYoutubeshorts } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="footerContainer  text-white py-4">
      <div className=" container-fluid">
        <div className="row">
          {/* Branding and Awards */}
          <div className="col-lg-3 col-md-5 col-sm-5 mb-4 px-5">
            <h5 className="mb-5">
              {" "}
              <img
                className="w-75"
                src="https://c.housingcdn.com/demand/s/client/common/assets/housing.820bbe77.png"
                alt=""
              />
            </h5>
            <div className="imgWrapper d-flex justify-content-between gap-4 align-items-center">
              <img
                src="https://c.housingcdn.com/demand/s/client/common/assets/gptweconomic.9e17a93d.jpg"
                alt="Award1"
                className="img-fluid"
              />
              <img
                src="https://c.housingcdn.com/demand/s/client/common/assets/gptwLogo.685f0e79.png"
                alt="Award2"
                className="img-fluid "
              />
            </div>
            <p className="mb-2 mt-2">Follow</p>
            <div className="socicalIcons d-flex justify-content-between  mb-4 mt-4 ">
              <FaFacebookSquare />
              <IoLogoInstagram />
              <SlSocialTwitter />
              <CiLinkedin />
              <SiYoutubeshorts />
            </div>
            <p className="copyright">©2024-25 Prasidhi Solutions Pvt. Ltd</p>
          </div>

          {/* Company Links */}
          <div className="col-lg-2 col-md-4 col-sm-4 mb-4 ps-5 ">
            <h6 className="text-uppercase mb-3">Company</h6>
            <ul className="list-unstyled list">
              <li>Careers</li>
              <li>About Us</li>
              <li>For Partners</li>
              <li>Terms</li>
              <li>Privacy Policy</li>
              <li>Contact Us</li>
              <li>Unsubscribe</li>
            </ul>
          </div>

          {/* Partner Sites */}
          <div className="col-lg-2 col-md-4 col-sm-3 mb-4 ps-5">
            <h6 className="text-uppercase mb-3">Partner Sites</h6>
            <ul className="list-unstyled list">
              <li>Proptiger</li>
              <li>Makaan</li>
              <li>realtor.com</li>
              <li>99.co</li>
              <li>collinsdictionary.com</li>
            </ul>
          </div>

          {/* Explore Links */}
          <div className="col-lg-2 col-md-6 col-sm-6 col-sm-3 mb-4 ps-md-5 ps-sm-5 ps-5">
            <h6 className="text-uppercase mb-3">Explore</h6>
            <ul className="list-unstyled list">
              <li>News</li>
              <li>Home Loans</li>
              <li>Sitemap</li>
              <li>International</li>
            </ul>
          </div>

          {/* QR Code and Apps */}
          <div className="col-lg-3 col-md-4 mb-4 col-sm-4  text-center app">
            <div className="coming-soon">
              <h6 className="text-uppercase text-warning fw-bold mb-3">
                Coming Soon
              </h6>
              <p className=" mb-4 list">
                Exciting updates are on the way. Stay tuned!
              </p>
            </div>
            <p className="text-uppercase mb-3 list">Experience Housing App</p>
            <div className="d-flex justify-content-center mb-2">
              <img
                src="https://c.housingcdn.com/demand/s/client/common/assets/app-store.10009972.png"
                alt="App Store"
                className="img-fluid me-2 w-50"
              />
              <img
                src="https://c.housingcdn.com/demand/s/client/common/assets/google-play.2c209e8c.png"
                alt="Google Play"
                className="img-fluid w-50 "
              />
            </div>
            <div className="d-flex p-2 justify-content-between mt-4">
              <img
                src="https://c.housingcdn.com/demand/s/client/common/assets/qr-code.f143ed3a.png"
                alt="QR Code"
                className="img-fluid w-25"
              />
              <p className="mt-2 list ">
                Open camera & scan the QR code to Download the App
              </p>
            </div>
          </div>
        </div>

        <hr className="bg-light" />
        <div className="text-center">
          <small className="list">
            © 2024-25 Prasidhi Realty Solutions Pvt. Ltd
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
