import "./IntermedidateCard.scss";

export default function IntermedidateCard({ image, title, description }) {
  return (
    <div className="IntermedidateCardWrapper px-3 px-md-2 my-4">
      <div className="card position-relative overflow-hidden">
        <div className="imgWrapper">
          <img src={image} className="card-img-top" alt={title} />
        </div>
        <div className="cardContain text-center position-absolute">
          <h6 className="m-0 text-truncate">{title}</h6>
          <p className="text-muted small">{description}</p>
        </div>
      </div>
    </div>
  );
}
