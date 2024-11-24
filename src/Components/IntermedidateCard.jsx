import "./IntermedidateCard.scss";

export default function IntermedidateCard({ image, title, description }) {
  return (
    <div className="IntermedidateCardWrapper ps-1 my-4">
      <div className="card position-relative overflow-hidden">
        <div className="imgWrapper">
          <img src={image} className="card-img-top" alt="..." />
        </div>
        <div className="cardContain text-center position-absolute">
          <h6 className="m-0">{title}</h6>
          <p className=" bg-transparent">{description}</p>
        </div>
      </div>
    </div>
  );
}
