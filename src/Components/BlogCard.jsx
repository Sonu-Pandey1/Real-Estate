import "./BlogCard.scss";
import { FaUserEdit } from "react-icons/fa";
import { MdPublishedWithChanges } from "react-icons/md";

export default function BlogCard({image, title, publishTime, description, writerName,}) {
    // console.log(title,publishTime)
  return (
    <>
      <div className="blogCardContainer">
        <div className="card w-100" >
          <div className="imgWrapper">
          <img src={image} className="card-img-top" alt="logo" />
          </div>
          <div className="card-body pb-0">
            <h5 className="card-title text-truncate-multiline-for-title ">{title}</h5>
            <p className="card-text text-dark text-truncate-multiline-for-description mb-4">{description}</p>
            <div className="writer d-flex justify-content-between align-items-center">
                <p className="badgee m-0"><span><FaUserEdit className="fs-5 p-1 " /></span>{writerName}</p>
                <p className="badgee m-0"><span><MdPublishedWithChanges className="fs-5 p-1"/></span>{publishTime}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
