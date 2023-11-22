import moment from "moment";
import { useSelector } from "react-redux";
import { Calendar, Clock, UserPlus, Users } from "react-feather";

const BookingDetails = () => {
  const { courtData, bookingData, additionalGuests } = useSelector(
    (state) => state.checkout
  );

  return (
    <div className="col-12 col-sm-12 col-md-12 col-lg-7">
      <div className="card booking-details">
        <h3 className="border-bottom">Order Summary</h3>
        <ul className="list-unstyled">
          <li>
            <i className="fa-regular fa-building me-2"></i>
            {courtData?.name}
            <span className="x-circle"></span>
          </li>
          <li>
            <i className="me-2">
              <Calendar size={"15px"} />
            </i>
            {moment(
              new Date(
                bookingData?.date ? bookingData?.date : bookingData?.startTime
              )
            ).format("DD MMMM YYYY")}
          </li>
          <li>
            <i className="me-2">
              <Clock size={"15px"} />
            </i>
            {moment(new Date(bookingData?.startTime)).format("hh:mm A")} to{" "}
            {moment(new Date(bookingData?.endTime)).format("hh:mm A")}
          </li>
          <li>
            <i className="me-2">
              <Users size={"15px"} />
            </i>
            {bookingData?.guests} Guests
          </li>
          <li>
            <i className="me-2">
              <UserPlus size={"15px"} />
            </i>
            {additionalGuests} Additional Guests
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BookingDetails;
