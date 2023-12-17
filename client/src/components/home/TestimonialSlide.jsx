import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import { IMAGE_URL } from "../../constants";

const TestimonialSlide = ({ rating, review, user, court }) => {
  return (
    <div className="testimonial-group">
      <div className="testimonial-review">
        <div className="rating-point">
          <Rating size={20} initialValue={rating} readonly allowFraction />
          <span> {rating}</span>
        </div>
        <h5>{review}</h5>
        {/* <p>{comments}</p> */}
        <div className="listing-venue-owner mt-4">
          <img src={`${IMAGE_URL}/${user?.profileImg}`} alt="User" />
          <div className="testimonial-content text-capitalize">
            <p>{user?.fullName}</p>
            <Link to={`/venues/${court?._id}`} className="btn btn-primary">
              {court?.name}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlide;

TestimonialSlide.propTypes = {
  rating: PropTypes.any,
  review: PropTypes.string,
  user: PropTypes.object,
  court: PropTypes.object,
};
