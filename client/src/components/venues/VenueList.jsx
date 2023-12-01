import PropTypes from "prop-types";
import { Heart, MapPin } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { addBookmark, removeBookmark } from "../../state/slices/bookmarkSlice";
import { IMAGE_URL } from "../../constants";

const VenueList = ({
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
    <div className="col-lg-12 col-md-12">
      <div className="featured-venues-item venue-list-item">
        <div className="listing-item listing-item-grid">
          <div className="listing-img">
            <Link to={`/venues/${_id}`}>
              <img
                src={`${IMAGE_URL}/${coverImage}`}
                alt="Venue"
                style={{ width: "500px" }}
              />
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
                style={{ cursor: "pointer" }}
                onClick={handleBookmarkClicks}
              >
                <Heart size={"18px"} />
              </div>
            </div>
            <h3 className="listing-title text-capitalize">
              <Link to={`/venues/${_id}`}>{name}</Link>
            </h3>
            <div className="listing-details-group">
              <ul className="listing-details-info">
                <li>
                  <span>
                    <MapPin size={"15px"} className="me-1" />
                    {address}
                  </span>
                </li>
              </ul>
              <p>{description}</p>
            </div>
            <div className="listing-button">
              <div className="listing-venue-owner"></div>
              <Link to={`/venues/${_id}`} className="user-book-now">
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
