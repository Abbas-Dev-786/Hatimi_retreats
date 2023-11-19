import { Calendar, Clock, UserPlus, Users } from "react-feather";

const BookingDetails = () => {
  return (
    <div className="col-12 col-sm-12 col-md-12 col-lg-7">
      <div className="card booking-details">
        <h3 className="border-bottom">Order Summary</h3>
        <ul className="list-unstyled">
          <li>
            <i className="fa-regular fa-building me-2"></i>Standard Synthetic
            Court 1<span className="x-circle"></span>
          </li>
          <li>
            <i className="me-2">
              <Calendar size={"15px"} />
            </i>
            27, April 2023
          </li>
          <li>
            <i className="me-2">
              <Clock size={"15px"} />
            </i>
            01:00 PM to 03:00 PM
          </li>
          <li>
            <i className="me-2">
              <Users size={"15px"} />
            </i>
            15 Guests
          </li>
          <li>
            <i className="me-2">
              <UserPlus size={"15px"} />
            </i>
            5 Additional Guests
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BookingDetails;
