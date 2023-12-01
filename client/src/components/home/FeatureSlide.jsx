import PropTypes from "prop-types";
import { Heart, MapPin } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addBookmark, removeBookmark } from "../../state/slices/bookmarkSlice";
import { toast } from "react-toastify";
import { IMAGE_URL } from "../../constants";

const FeatureSlide = ({
  coverImage,
  _id,
  chargePerHour,
  ratingsAverage,
  ratingsQuantity,
  name,
  description,
  address,
}) => {
  const { user } = useSelector((state) => state.user);
  const { bookmarks } = useSelector((state) => state.bookmarks);
  const dipatch = useDispatch();

  const isBookmarked = bookmarks.includes(_id);

  const handleBookmarkClicks = () => {
    if (!user?.firstName) {
      toast.error("Please Login to Access Bookmark Functionality");
      return;
    }

    if (isBookmarked) {
      dipatch(removeBookmark(_id));
    } else {
      dipatch(addBookmark(_id));
    }
  };

  return (
    <div className="featured-venues-item aos h-100" data-aos="fade-up">
      <div className="listing-item mb-0">
        <div className="listing-img" style={{ height: "250px" }}>
          <Link to={`/venues/${_id}`}>
            <img src={`${IMAGE_URL}/${coverImage}`} alt="Venue" />
          </Link>
          <div className="fav-item-venues">
            {ratingsAverage > 4.5 && (
              <span className="tag tag-blue">Top Rated</span>
            )}
            <h5 className="tag tag-primary">
              ₹{chargePerHour}
              <span>/hr</span>
            </h5>
          </div>
        </div>
        <div className="listing-content">
          <div className="list-reviews">
            <div className="d-flex align-items-center">
              <span className="rating-bg">{ratingsAverage}</span>
              <span>{ratingsQuantity} Reviews</span>
            </div>
            <div
              className={`fav-icon ${isBookmarked ? "selected" : ""}`}
              onClick={handleBookmarkClicks}
              style={{ cursor: "pointer" }}
            >
              <Heart size={"18px"} />
            </div>
          </div>
          <h3 className="listing-title text-capitalize">
            <Link to={`/venues/${_id}`}>{name}</Link>
          </h3>
          <div className="listing-details-group">
            <p>{description?.split(" ").slice(0, 10).join(" ")}</p>
            <ul className="listing-details-info">
              <li>
                <span>
                  <MapPin size={"15px"} className="me-1" />
                  {address}
                </span>
              </li>
            </ul>
          </div>
          <div className="listing-button">
            <div className="listing-venue-owner"></div>
            <Link to={`venues/${_id}`} className="user-book-now">
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
  coverImage: PropTypes.string,
  _id: PropTypes.string,
  chargePerHour: PropTypes.number,
  ratingsAverage: PropTypes.number,
  ratingsQuantity: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  address: PropTypes.string,
  isBookmarked: PropTypes.bool,
};
