import { Calendar, Plus } from "react-feather";
import { Link } from "react-router-dom";

const BookingForm = () => {
  return (
    <div className="white-bg book-court">
      <h4 className="border-bottom">Book A Court</h4>
      <h5 className="d-inline-block">Box Cricket Academy,</h5>
      <p className="d-inline-block">available Now</p>
      <ul className="d-sm-flex align-items-center justify-content-evenly">
        <li>
          <h3 className="d-inline-block primary-text">₹150</h3>
          <span>/hr</span>
          <p>up to 1 guests</p>
        </li>
        <li>
          <span>
            <i>
              <Plus />
            </i>
          </span>
        </li>
        <li>
          <h4 className="d-inline-block primary-text">₹5</h4>
          <span>/hr</span>
          <p>
            each additional guest <br />
            up to 4 guests max
          </p>
        </li>
      </ul>
      <div className="d-grid btn-block mt-3">
        <Link
          to={`/bookings/478573847/new`}
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
