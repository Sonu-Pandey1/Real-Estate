import "./BlogCard.scss";

export default function BlogCard() {
  return (
    <>
      <div className="blogCardContainer">
        <div className="card" style="width: 18rem;">
          <img src="https://housing.com/news/wp-content/uploads/2024/07/Top-areas-in-Noida-Extension-for-investment-f.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Top areas in Noida Extension for investment</h5>
            <p className="card-text">
            With new infrastructure projects and the upcoming Jewar airport in the region, the real estate market in Noida Extension sees significant growth potential.
            </p>
            <div className="writer">
                <p>Sonu Pandey</p>
                <p>Aug 2024</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
