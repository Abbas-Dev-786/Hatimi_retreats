import { CornerDownLeft, Edit, Eye } from "react-feather";
import { Link } from "react-router-dom";

const BookingTableItem = ({ link, image, courtName, dateTime, amount }) => {
  return (
    <tr>
      <td>
        <h2 className="table-avatar">
          <Link
            to={`/venues/${link}`}
            className="avatar avatar-sm flex-shrink-0"
          >
            <img className="avatar-img" src={image} alt="User" />
          </Link>
          <span className="table-head-name flex-grow-1">
            <Link
              to={`/venues/${link}`}
              // data-bs-toggle="modal"
              // data-bs-target="#profile-court"
            >
              {courtName}
            </Link>
            <span>Address </span>
          </span>
        </h2>
      </td>
      <td className="table-date-time">
        <h4>
          {dateTime}
          {/* Mon, Jul 11<span>06:00 PM - 08:00 PM</span> */}
        </h4>
      </td>
      <td>
        <span className="pay-dark fs-16">₹{amount}</span>
      </td>
      <td>
        <span className="badge bg-success">
          <i className="feather-check-square me-1"></i>
          Accepted
        </span>
      </td>
      <td className="text-pink view-detail-pink">
        <a
          // href="javascript:;"
          data-bs-toggle="modal"
          data-bs-target="#upcoming-court"
        >
          <i>
            <Eye size={"15px"} />
          </i>
          View Details
        </a>
      </td>

      <td className="text-end">
        <div className="dropdown dropdown-action table-drop-action">
          <a
            // href="#"
            className="action-icon dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fas fa-ellipsis-h"></i>
          </a>
          <div className="dropdown-menu dropdown-menu-end">
            <div
              className="dropdown-item"
              // href="javascript:void(0);"
              data-bs-toggle="modal"
              data-bs-target="#cancel-court"
            >
              <i>
                <CornerDownLeft size={"15px"} />
              </i>
              Cancel Booking
            </div>
            <div
              className="dropdown-item"
              // href="javascript:void(0);"
            >
              <i>
                <Edit size={"15px"} />
              </i>
              Edit
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default BookingTableItem;
