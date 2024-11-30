import "./IntermedidateCard.scss";

export default function IntermedidateCard({ image, title, description,company,size,location,price }) {
  return (
    <div className="IntermedidateCardWrapper px-3 px-md-2 my-4">
      <div className="card position-relative overflow-hidden">
        <div className="imgWrapper">
          <img src={image} className="card-img-top" alt={title} />
        </div>
        <div className={`cardContain changeBgC ${company?"":"text-center"} position-absolute px-4`}>
          <div className={`${company?"d-none":"d-block"}`}>
          <h6 className="m-0 mb-1 text-truncate ">{title}</h6>
          <p className=" bg-transparent">{description}</p>
          </div>
          <div className={`${company?"d-block":"d-none"}`}>
        
          <h6 className="m-0 mb-1 text-truncate ">{title}</h6>
          {/* <p className=" bg-transarent text-muted">{company}</p> */}
          <p className=" bg-transparent opacity-75 ">{company}</p>

          <span className="d-flex justify-content-between reduceHeight">
          <p className=" bg-transparent m-0">{size}</p>
          <p className=" bg-transparent fw-bold fs-5">{price}</p>
          </span>
          <p className=" bg-transparent opacity-75  ">{location}</p>
          
          
          </div>
        </div>
      </div>
    </div>
  );
}
