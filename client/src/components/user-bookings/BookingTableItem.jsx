import PropTypes from "prop-types";
import moment from "moment";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { CornerDownLeft, Edit, Eye } from "react-feather";
import { setBookingData } from "../../state/slices/bookingSlice";
import { IMAGE_URL } from "../../constants";
import { deleteBooking } from "../../state/api";

const BookingTableItem = ({
  court,
  startTime,
  endTime,
  status,
  price,
  totalGuests,
  createdAt,
  _id,
}) => {
  const data = {
    court,
    startTime,
    endTime,
    status,
    price,
    totalGuests,
    createdAt,
  };
  const dispatch = useDispatch();

  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: deleteBooking,
    onError: (err) => {
      toast.error(err.message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
      toast.success("Booking Deleted Successfully");
    },
  });

  const handleBookingCancel = () => {
    mutate(_id);
  };

  return (
    <tr>
      <td>
        <h2 className="table-avatar">
          <Link
            to={`/venues/${court?._id}`}
            className="avatar avatar-sm flex-shrink-0"
          >
            <img
              className="avatar-img"
              src={`${IMAGE_URL}/${court?.coverImage}`}
              alt="image"
            />
          </Link>
          <span className="table-head-name flex-grow-1">
            <Link
              to={`/venues/${court?._id}`}
              // data-bs-toggle="modal"
              // data-bs-target="#profile-court"
            >
              {court?.name}
            </Link>
            <span>{court?.address} </span>
          </span>
        </h2>
      </td>
      <td className="table-date-time">
        <h4>
          {/* {dateTime} */}
          {/* Mon, Jul 11<span>06:00 PM - 08:00 PM</span>
           */}
          {moment(startTime).format("DD MMM YYYY")} <br />
          {moment(startTime).format("hh:mm A")}-{" "}
          {moment(endTime).format("hh:mm A")}
        </h4>
      </td>
      <td>
        <span className="pay-dark fs-16">₹{price}</span>
      </td>
      <td>
        <span className="badge bg-success text-capitalize">
          <i className="feather-check-square me-1"></i>
          {status}
        </span>
      </td>
      <td
        className="text-pink view-detail-pink"
        onClick={() => dispatch(setBookingData(data))}
      >
        <a data-bs-toggle="modal" data-bs-target="#upcoming-court">
          <i>
            <Eye size={"15px"} />
          </i>
          View Details
        </a>
      </td>

      <td className="text-end">
        <div className="dropdown dropdown-action table-drop-action">
          <a
            className="action-icon dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fas fa-ellipsis-h"></i>
          </a>
          <div
            className="dropdown-menu dropdown-menu-end"
            style={{ cursor: "pointer" }}
          >
            <div
              className="dropdown-item"
              // data-bs-toggle="modal"
              // data-bs-target="#cancel-court"
              onClick={handleBookingCancel}
            >
              <i>
                <CornerDownLeft size={"15px"} />
              </i>
              Cancel Booking
            </div>
            {/* <div className="dropdown-item">
              <i>
                <Edit size={"15px"} />
              </i>
              Edit
            </div> */}
          </div>
        </div>
      </td>
    </tr>
  );
};

export default BookingTableItem;

BookingTableItem.propTypes = {
  court: PropTypes.object,
  startTime: PropTypes.string,
  endTime: PropTypes.string,
  status: PropTypes.string,
  price: PropTypes.number,
  _id: PropTypes.string,
  totalGuests: PropTypes.number,
  createdAt: PropTypes.string,
};
