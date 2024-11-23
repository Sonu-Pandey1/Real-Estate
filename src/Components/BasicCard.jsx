import { LiaRupeeSignSolid } from "react-icons/lia"
import "./BasicCard.scss"

export default function BasicCard() {
  return (
    <div className="basicCardWrapper">
        <div className="card border-0" >
                  <img
                    className="card-img-top rounded-4"
                    src="https://housing-images.n7net.in/01c16c28/e266a84192b405017eed4d26c83a7bf1/v0/medium/1_bhk_apartment-for-rent-sector_76-Noida-bedroom.jpg"
                    alt="Card image cap"
                  />
                  <div className="card-body p-0 pt-2">
                    <h6 className="card-title fw-bold">1 BHK Apartment</h6>
                    <p className="m-0 ">Fully Furnished <span className=" float-end">750 sq.ft</span></p>
                    <p className=" text-truncate opacity-75">
                    Amarpali Silicon City, Sector 76, Noida
                    </p>
                    <h6 className=" "><LiaRupeeSignSolid className="fs-5 pb-1 "/>8,000</h6>
                    <a href="#" className="btn btn-outline-success px-4 py-1 my-2">
                      Contact
                    </a>
                  </div>
                </div>
    </div>
  )
}
