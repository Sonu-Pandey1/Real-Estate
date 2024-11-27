import "./RegisterToPost.scss"

export default function RegisterToPost() {
  return (
    <>
        <div className="registerToPostContainer ">
            <div className="container p-0 p-4">
                <div className="row">
                    <div className="col position-relative">
                        <p className=" text-muted">SELL OR RENT YOUR PROPERTY</p>
                        <h1>Register to post your property for <span className="registerToPostBadge badge bg-primary px-3 py-1 fs-6 ">Free</span></h1>
                        <p className=" text-muted mt-4 mb-5">Post your residential / commercial property</p>
                        <div className="row">
                            <div className="col">
                                <h1>10L+</h1>
                                <p className=" text-muted">Property Listings</p>
                            </div>
                            <div className="col">
                                <h1>45L+</h1>
                                <p className=" text-muted">Monthly Searches</p>
                            </div>
                            <div className="col">
                                <h1>2L+</h1>
                                <p className=" text-muted">Owners advertise monthly</p>
                            </div>
                        </div>
                        <button className="btn btn-outline-primary mt-3 px-4 ">Post Your Property For Free</button>
                    </div>
                    <div className="col">
                        <div className="imgWrapper">
                            <img  className =" img-fulid img-thumbnail" src="https://static.99acres.com/universalhp/img/d_hp_ppf_xl2.webp" alt="logo" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
