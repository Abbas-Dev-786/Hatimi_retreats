import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Calendar, Plus } from "react-feather";

const BookingForm = () => {
  const { courtData } = useSelector((state) => state.court);

  return (
    <div className="white-bg book-court">
      <h4 className="border-bottom">Book A Court</h4>
      <h5 className="d-inline-block">{courtData?.name}, &nbsp;</h5>
      <p className="d-inline-block">available Now</p>
      <ul className="d-sm-flex align-items-center justify-content-evenly">
        <li>
          <h3 className="d-inline-block primary-text">
            ₹{courtData?.chargePerHour}
          </h3>
          <span>/hr</span>
          <p>up to {courtData?.maxCapacity} guests</p>
        </li>
        <li>
          <span>
            <i>
              <Plus />
            </i>
          </span>
        </li>
        <li>
          <h4 className="d-inline-block primary-text">
            ₹{courtData?.extraMemberCharge}
          </h4>
          <span>/hr</span>
          <p>each additional guest</p>
        </li>
      </ul>
      <div className="d-grid btn-block mt-3">
        <Link
          to={`/bookings/${courtData?._id}/new`}
          className="btn btn-secondary d-inline-flex justify-content-center align-items-center"
        >
          <i>
            <Calendar size={"18px"} />
          </i>
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default BookingForm;
