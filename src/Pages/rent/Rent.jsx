import "./Rent.scss";
import BasicCard from "../../Components/BasicCard"

export default function Rent() {
  return (
    <>
      <div className="rentContainer">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>Recently Added</h1>
              <p>Based on preferences of users like you</p>
            </div>
          </div>
          <div className="row">
            <div className="col">

              <div className="rentCardWrapper d-flex flex-wrap justify-content-between my-2" >
                <BasicCard/>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
