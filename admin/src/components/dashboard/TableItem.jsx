import PropTypes from "prop-types";
import moment from "moment";
import { toast } from "react-toastify";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IMAGE_URL } from "../../constants";
import { deleteBooking } from "../../state/api";
import { Trash } from "react-feather";

const TableItem = ({
  court,
  user,
  startTime,
  endTime,
  price,
  totalGuests,
  createdAt,
  _id,
}) => {
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
          <a className="avatar avatar-sm flex-shrink-0">
            <img
              className="avatar-img"
              src={`${IMAGE_URL}/${court?.coverImage}`}
              alt="User"
            />
          </a>
          <span className="table-head-name flex-grow-1">
            <a className="text-capitalize">{court?.name}</a>
            <span>
              {court?.address}
              <span className="book-on-date">
                Booked on : {moment(createdAt).format("DD MMMM YYYY")}
              </span>
            </span>
          </span>
        </h2>
      </td>
      <td>
        <h2 className="table-avatar">
          <a className="avatar avatar-sm  flex-shrink-0">
            <img
              className="avatar-img"
              src={`${IMAGE_URL}/${user?.profileImg}`}
              alt="User"
            />
          </a>
          <span className="table-head-name table-name-user flex-grow-1">
            <a>{user?.fullName}</a>
          </span>
        </h2>
      </td>
      <td className="table-date-time">
        <h4>
          {moment(startTime).format("DD MMM YYYY")} <br />
          {moment(startTime).format("hh:mm A")}-{" "}
          {moment(endTime).format("hh:mm A")}
        </h4>
      </td>
      <td>{totalGuests}</td>
      <td>
        <span className="pay-dark">₹{price}</span>
      </td>
      <td className="text-end">
        <div
          className="dropdown dropdown-action table-drop-action"
          style={{ cursor: "pointer" }}
        >
          <a
            className="action-icon dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fas fa-ellipsis-h" />
          </a>
          <div className="dropdown-menu dropdown-menu-end">
            {/* <a className="dropdown-item" href="javascript:void(0);">
              <i className="feather-edit" />
              Edit
            </a> */}
            <div className="dropdown-item" onClick={handleBookingCancel}>
              <i>
                <Trash size={"15px"} />
              </i>
              Delete
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default TableItem;

TableItem.propTypes = {
  court: PropTypes.object,
  startTime: PropTypes.string,
  endTime: PropTypes.string,
  user: PropTypes.object,
  price: PropTypes.number,
  _id: PropTypes.string,
  totalGuests: PropTypes.number,
  createdAt: PropTypes.string,
};
