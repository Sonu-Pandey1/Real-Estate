import "./ListProperty.scss";

export default function ListProperty() {
  return (
    <div className="listPropertyContainer">
      <div
        className="container-fluid vh-100 d-flex align-items-center pt-5"
        style={{ backgroundColor: " #3c2d91" }}
      >
        <div className="row w-100 text-light">
          {/* Left Section */}
          <div className="col-md-8 d-flex flex-column justify-content-center align-items-start p-5">
            <h2 className="fw-bold">Upload your property in 3 simple steps</h2>
            <ul className="list-unstyled mt-3">
              <li className="mb-2">
                <span className="text-warning fw-bold">✔</span> Add Basic
                Details
              </li>
              <li className="mb-2">
                <span className="text-warning fw-bold">✔</span> Add Property
                Details
              </li>
              <li className="mb-2">
                <span className="text-warning fw-bold">✔</span> Add Photos
              </li>
            </ul>
            <div className="mt-4 ps-5">
              <img
                src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ9XsoE-PAdMXezNH3WpauSX5DI-gQrG-FwGdMFtjLOswxfiTNR"
                className="rounded-5"
                alt="Illustration"
                style={{ width: "80%" }}
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="col-md-4 d-flex justify-content-center align-items-center bg-white rounded-3">
            <div className="p-4" style={{ width: "100%", maxWidth: "400px" }}>
              <h4 className="text-dark fw-bold">
                New to <span className="text-primary">Housing</span>? Let's get
                you started
              </h4>
              <form className="mt-4">
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Enter Phone Number
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">+91</span>
                    <input
                      type="tel"
                      id="phone"
                      className="form-control"
                      placeholder="Enter Phone Number"
                    />
                  </div>
                </div>
                <button
                  type="button"
                  className="btn btn-secondary w-100 mt-2"
                  disabled
                >
                  Continue
                </button>
              </form>
              <div className="text-center my-3">Or Connect with</div>
              <button type="button" className="btn btn-outline-dark w-100">
                <i className="fab fa-google me-2"></i> Google
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col ">
            <h1 className="text-center py-4 py-3">How its Work</h1>
            <div className="d-flex  w-50 ">
              <div>
                <img className=" img-fluid w-75" src="https://cdn-icons-png.flaticon.com/128/18486/18486650.png" alt="icon" />
              </div>
              <div>
                <h2>Upload your property in 3 quick steps</h2>
                <p>
                  Tell us a few basic details about your property,add pricing &
                  upload photos{" "}
                </p>
              </div>
            </div>
            <div className="d-flex gap-4 w-50 py-3">
              <div>
                <img className=" img-fluid" src="https://cdn-icons-png.flaticon.com/128/6497/6497375.png" alt="icon" />
              </div>
              <div>
                <h2>Property reaches to 10 lacs+ tenants & buyers</h2>
                <p>
                  As the largest property search website of India, your property
                  will reach to maximum buyers/tenants online
                </p>
              </div>
            </div>
            <div className="d-flex gap-4 w-50 py-3">
              <div>
                <img className=" img-fluid" src="https://cdn-icons-png.flaticon.com/128/10365/10365179.png" alt="icon" />
              </div>
              <div>
                <h2>Start getting enquiries</h2>
                <p>
                  You will start getting enquiries from interested
                  buyers/tenants as soon as your property goes live on
                  Housing.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-4 w-75">
        <div className="row">
          <div className="col ">
            <h1 className="text-center py-4 py-3 ">
              Frequently asked questions
            </h1>
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    How to post a property on Prasidhi.com?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>Choose your respective profile viz. Broker, Owner, Builder or Flatmate. Follow the steps by filling in the necessary details required regarding your property. In simple three steps your property will go live on Housing.com</p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Can I post a property for free?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>Yes. You can post the property for free on Housing.com. However, there is a limit on the number of properties you can post for free depending on your profile type. Free listings also have limited access to buyer/tenant enquiries</p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    What type of property can I post for selling/renting?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>As an owner, agent, or builder, you can post all types of residential and commercial properties for rent, lease, or sale. Millions of people search for flats, houses, plots, office space, shops, showrooms, warehouses, commercial land, and agricultural land, among others. Housing.com is the best property portal to sell or rent out your property fast!</p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    What are the benefits of posting a property on Housing.com?
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>Housing.com has a strong brand presence and is a leader in the market.As Indias top property site , there is guaranteed visibility for your property at zero cost! You will also benefit from our guidance towards generating quicker leads and making the best of the property site. So why wait? Advertise property free, today and sell faster!</p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    When do I start getting enquiries on my property?
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>After you post your property, it will get activated within an hour and visible on Housing.com. As soon as any interested buyer/tenant shows interest in your property you will receive the notification for the same via SMS/Whatsapp/Email. You can also check the list of all enquiries in the “Leads” section of your homepage after you login.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
