import PropTypes from "prop-types";
import { Heart, MapPin } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { addBookmark, removeBookmark } from "../../state/slices/bookmarkSlice";

const VenueList = ({
  image,
  link,
  price,
  rating,
  ratingQuantity,
  title,
  desc,
  address,
}) => {
  const { user } = useSelector((state) => state.user);
  const { bookmarks } = useSelector((state) => state.bookmarks);
  const dipatch = useDispatch();

  const isBookmarked = bookmarks.includes(link);

  const handleBookmarkClicks = () => {
    if (!user?.firstName) {
      toast.error("Please Login to Access Bookmark Functionality");
      return;
    }

    if (isBookmarked) {
      dipatch(removeBookmark(link));
    } else {
      dipatch(addBookmark(link));
    }
  };

  return (
    <div className="col-lg-12 col-md-12">
      <div className="featured-venues-item venue-list-item">
        <div className="listing-item listing-item-grid">
          <div className="listing-img">
            <Link to={`/venues/${link}`}>
              <img src={image} alt="Venue" />
            </Link>
            <div className="fav-item-venues">
              {rating > 4.5 && <span className="tag tag-blue">Top Rated</span>}
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
                onClick={handleBookmarkClicks}
              >
                <Heart size={"18px"} />
              </div>
            </div>
            <h3 className="listing-title">
              <Link to={`/venues/${link}`}>{title}</Link>
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
              <p>{desc}</p>
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
