import "./RegisterToPost.scss";

export default function RegisterToPost() {
  return (
    <div className="registerToPostContainer">
      <div className="container ">

        <div className="row align-items-center">
          <div className="col-12 col-lg-6 position-relative mb-4 mb-lg-0">
            <p className="text-muted">SELL OR RENT YOUR PROPERTY</p>

            <h1>Register to post your property for{" "}
              <span className="registerToPostBadge badge bg-primary px-3 py-1 fs-6">
                Free
              </span>
            </h1>

            <p className="text-muted mt-4 mb-5">
              Post your residential / commercial property
            </p>

            <div className="row text-center text-lg-start">
              <div className="col-4">
                <h1 className="fs-3">10L+</h1>
                <p className="text-muted small">Property Listings</p>
              </div>

              <div className="col-4">
                <h1 className="fs-3">45L+</h1>
                <p className="text-muted small">Monthly Searches</p>
              </div>

              <div className="col-4">
                <h1 className="fs-3">2L+</h1>
                <p className="text-muted small">
                  Owners advertise monthly
                </p>
              </div>

            </div>

            <button className="btn btn-outline-primary mt-3 px-4">
              Post Your Property For Free
            </button>
          </div>

          <div className="col-12 col-lg-6 text-center">
            <div className="imgWrapper">
              <img
                className="img-fluid rounded-3 shadow"
                src="https://static.99acres.com/universalhp/img/d_hp_ppf_xl2.webp"
                alt="logo"
              />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
