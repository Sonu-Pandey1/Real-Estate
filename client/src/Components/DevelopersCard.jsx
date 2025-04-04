import "./Developers.scss";
import Slider from "react-slick";

export default function DevelopersCard({ title, image, projects, name, location, price, description, establised, logo }) {

  return (
    <>
      <div className="developersCardContainer ">
        <div className="container">
          <div className="slider-container">

            <div className="cardWrapper pt-4">
              <div className="card ">
                <div className="card-body ">
                  <div className="row px-2 pb-4">

                    <div className="col-12 col-sm-4  p-0  logo ">
                      <div className="imgWrapper ">
                        <img
                          src={logo}
                          alt="logo"
                          className=" object-fit-contain object-fit-sm-fill"
                        />
                      </div>
                    </div>

                    <div className="col-12 col-sm-8 pt-4 pt-sm-0 text-truncate ">
                      <h6 className=" text-truncate text-black">{title}</h6>
                      <div className="cWrapper d-flex justify-content-between">
                        <div>
                          <p className="m-0 fw-bold text-black">{establised}</p>
                          <p className="m-0 muted">Year Estd.</p>
                        </div>
                        <div>
                          <p className="m-0 fw-bold text-black">{projects}</p>
                          <p className="m-0 muted">Projects</p>
                        </div>
                      </div>
                    </div>

                  </div>

                  <p className=" text-black card-text text-truncate-multiline-for-description">{description}</p>
                  {/* <a href="#" className=" text-decoration-none">{name} </a> */}
                </div>

                <div className="imgContainer">
                  <img
                    src={image}
                    className="card-img-bottom"
                    alt="name"
                  />
                  <div className="content pb-2 w-100">

                    <div className="ps-3">
                      <h6 className="m-0 pb-1">{name}</h6>
                      <span className=" m-0 bg-transparent ">{location}</span>
                      <div><span className=" fw-semibold m-0 bg-transparent">{price}</span></div>
                    </div>

                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}


