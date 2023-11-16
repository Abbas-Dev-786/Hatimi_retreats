import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const TestimonialSlide = ({
  rating,
  review,
  comments,
  image,
  name,
  propertyName,
}) => {
  return (
    <div className="testimonial-group">
      <div className="testimonial-review">
        <div className="rating-point">
          <i className="fas fa-star filled"></i>
          <i className="fas fa-star filled"></i>
          <i className="fas fa-star filled"></i>
          <i className="fas fa-star filled"></i>
          <i className="fas fa-star filled"></i>
          <span> {rating}</span>
        </div>
        <h5>{review}</h5>
        <p>{comments}</p>
      </div>
      <div className="listing-venue-owner">
        <img src={image} alt="User" />
        <div className="testimonial-content">
          <h5>{name}</h5>
          <Link to="/venues/7878788" className="btn btn-primary">
            {propertyName}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlide;

TestimonialSlide.propTypes = {
  rating: PropTypes.any,
  review: PropTypes.string,
  comments: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  propertyName: PropTypes.string,
};
