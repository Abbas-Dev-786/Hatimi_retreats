import PropTypes from "prop-types";
import { Heart, MapPin } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addBookmark, removeBookmark } from "../../state/slices/bookmarkSlice";
import { toast } from "react-toastify";

const FeatureSlide = ({
  image,
  link,
  features,
  price,
  rating,
  ratingQuantity,
  title,
  desc,
  address,
  // availabilityDate,
}) => {
  const { user } = useSelector((state) => state.user);
  const { bookmarks } = useSelector((state) => state.bookmarks);
  const dipatch = useDispatch();

  const isBookmarked = bookmarks.includes(link);

  const handleBookmarkClicks = () => {
    if (!user?.firstName) {
      toast.error("Please Login to Access Bookmarks Functionality");
      return;
    }

    if (isBookmarked) {
      dipatch(removeBookmark(link));
    } else {
      dipatch(addBookmark(link));
    }
  };

  return (
    <div className="featured-venues-item aos" data-aos="fade-up">
      <div className="listing-item mb-0">
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
              onClick={handleBookmarkClicks}
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
              {/* <li>
                <span>
                  <Calendar size={"15px"} className="me-1" />
                  Next availablity :
                  <span className="primary-text">
                    {moment(availabilityDate).format("DD MMMM YYYY")}
                  </span>
                </span>
              </li> */}
            </ul>
          </div>
          <div className="listing-button">
            <div className="listing-venue-owner"></div>
            <Link to={`venues/${link}`} className="user-book-now">
              <span>
                <i className="feather-calendar me-2"></i>
              </span>
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSlide;

FeatureSlide.propTypes = {
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
