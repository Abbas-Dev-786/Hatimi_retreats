import moment from "moment";
import PropTypes from "prop-types";
import { Calendar, Heart, MapPin } from "react-feather";
import { Link } from "react-router-dom";

const VenueList = ({
  image,
  link,
  features,
  price,
  rating,
  ratingQuantity,
  title,
  desc,
  address,
  availabilityDate,
  isBookmarked,
}) => {
  const date = moment(availabilityDate);

  return (
    <div className="col-lg-12 col-md-12">
      <div className="featured-venues-item venue-list-item">
        <div className="listing-item listing-item-grid">
          <div className="listing-img">
            <Link to={`/venues/${link}`}>
              <img src={image} alt="Venue" />
            </Link>
            <div className="fav-item-venues">
              {features && <span className="tag tag-blue">{features[0]}</span>}
              <h5 className="tag tag-primary">
                ₹{price}
                <span>/hr</span>
              </h5>
            </div>
          </div>
          <div className="listing-content">
            <div className="list-reviews">
              <div className="d-flex align-items-center">
                <span className="rating-bg">{rating}</span>
                <span>{ratingQuantity} Reviews</span>
              </div>
              <div
                className={`fav-icon ${isBookmarked ? "selected" : ""}`}
                style={{ cursor: "pointer" }}
              >
                <Heart size={"18px"} />
              </div>
            </div>
            <h3 className="listing-title">
              <Link to={`/venues/${link}`}>{title}</Link>
            </h3>
            <div className="listing-details-group">
              <p>{desc}</p>
              <ul className="listing-details-info">
                <li>
                  <span>
                    <MapPin size={"15px"} className="me-1" />
                    {address}
                  </span>
                </li>
                <li>
                  <span>
                    <Calendar size={"15px"} className="me-1" />
                    Next availablity :
                    <span className="primary-text">
                      {date.format("DD MMMM YYYY")}
                    </span>
                  </span>
                </li>
              </ul>
            </div>
            <div className="listing-button">
              <div className="listing-venue-owner"></div>
              <Link to={`/venues/${link}`} className="user-book-now">
                <span>
                  <i className="feather-calendar me-2"></i>
                </span>
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VenueList;

VenueList.propTypes = {
  image: PropTypes.string,
  link: PropTypes.string,
  features: PropTypes.any,
  price: PropTypes.number,
  rating: PropTypes.number,
  ratingQuantity: PropTypes.number,
  title: PropTypes.string,
  desc: PropTypes.string,
  address: PropTypes.string,
  availabilityDate: PropTypes.any,
  isBookmarked: PropTypes.bool,
};
