import "./index.scss";
import HeadLine from "../UI/HeadLine";
import { data } from "../../Data";
import { FaStar, FaRegStarHalfStroke } from "react-icons/fa6";

import { IoStarOutline } from "react-icons/io5";

const Reviews = () => {
  return (
    <section id="Reviews">
      <div className="container">
        <HeadLine head={data[4].head} paragraph={data[4].paragraph} />
        <div className="allReviews">
          <div className="review">
            <p>
              We have worked with appify.As we have grown and evolved, appfiy
              has created all of our profit.What I value most about our
              relationship is that appfiy knows us and our business.
            </p>
            <div>
              <p>Mark Smith</p>
              <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStarHalfStroke />
                <IoStarOutline />
              </div>
            </div>
          </div>
          <div className="review">
            <p>
              We have worked with appify.As we have grown and evolved, appfiy
              has created all of our profit.What I value most about our
              relationship is that appfiy knows us and our business.
            </p>
            <div>
              <p>Mark Smith</p>
              <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStarHalfStroke />
                <IoStarOutline />
              </div>
            </div>
          </div>
          <div className="review">
            <p>
              We have worked with appify.As we have grown and evolved, appfiy
              has created all of our profit.What I value most about our
              relationship is that appfiy knows us and our business.
            </p>
            <div>
              <p>Mark Smith</p>
              <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStarHalfStroke />
                <IoStarOutline />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
