import PropTypes from "prop-types";
import moment from "moment";
import { Clock, MapPin } from "react-feather";
import { Link } from "react-router-dom";

const EventCard = ({ image, link, date, address, eventName }) => {
  const mdate = moment(date);

  return (
    <div className="col-12 col-sm-12 col-md-6 col-lg-4">
      <div className="listing-item">
        <div className="listing-img">
          <Link to={`/events/${link}`}>
            <img src={image} className="img-fluid" alt="Event" />
          </Link>
          <div className="date-info text-center">
            <h2>{mdate.date()}</h2>
            <h6>
              {mdate.format("MMM")}, {mdate.year()}
            </h6>
          </div>
        </div>
        <div className="listing-content">
          <ul className="d-flex justify-content-start align-items-center">
            <li>
              <i>
                <Clock size={"15px"} />
              </i>
              {mdate.format("HH:MM")}
            </li>
            <li>
              <i>
                <MapPin size={"15px"} />
              </i>
              {address}
            </li>
          </ul>
          <h4 className="listing-title">
            <Link to="/events/4378578347">{eventName}</Link>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default EventCard;

EventCard.propTypes = {
  image: PropTypes.string,
  link: PropTypes.string,
  date: PropTypes.any,
  address: PropTypes.string,
  eventName: PropTypes.string,
};
