import PropTypes from "prop-types";
import moment from "moment";
import { toast } from "react-toastify";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { editBookingRequest } from "../../state/api";

import { IMAGE_URL } from "../../constants";

const TableItem = ({
  court,
  user,
  startTime,
  endTime,
  totalGuests,
  price,
  _id,
}) => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationKey: ["requests"],
    mutationFn: editBookingRequest,
    onError: (err) => {
      toast.error(err.message);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["bookings-r"] });

      toast.success(`Request Successfully ${data.status}`);
    },
  });

  const handleRequestConfirm = () => {
    mutate({
      id: _id,
      status: "confirmed",
      courtId: court?._id,
      startTime,
      endTime,
    });
  };

  const handleRequestReject = () => {
    mutate({
      id: _id,
      status: "rejected",
    });
  };

  return (
    <tr>
      <td>
        <h2 className="table-avatar">
          <a className="avatar avatar-sm  flex-shrink-0">
            <img
              className="avatar-img"
              src={`${IMAGE_URL}/${court?.coverImage}`}
              alt="User"
            />
          </a>
          <span className="table-head-name flex-grow-1">
            <a data-bs-toggle="modal" data-bs-target="#request-court">
              {court.name}
            </a>
            <span>{court.address}</span>
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
            <a>{`${user?.firstName} ${user?.lastName}`}</a>
          </span>
        </h2>
      </td>
      <td className="pay-dark">{user?.phone}</td>
      <td className="table-date-time">
        <h4>
          {moment(startTime).format("DD MMM YYYY")} <br />
          {moment(startTime).format("hh:mm A")}-{" "}
          {moment(endTime).format("hh:mm A")}
        </h4>
      </td>
      <td className="text-center">{totalGuests}</td>
      <td>
        <span className="pay-dark">₹{price}</span>
      </td>
      <td className="table-accept-btn text-end">
        <button className="btn accept-btn" onClick={handleRequestConfirm}>
          <i className="feather-check-circle" />
          Confirm
        </button>
        <button className="btn cancel-table-btn" onClick={handleRequestReject}>
          <i className="feather-x-circle" />
          Reject
        </button>
      </td>
    </tr>
  );
};

export default TableItem;

TableItem.propTypes = {
  court: PropTypes.object,
  startTime: PropTypes.string,
  status: PropTypes.string,
  endTime: PropTypes.string,
  user: PropTypes.object,
  price: PropTypes.number,
  _id: PropTypes.string,
  totalGuests: PropTypes.number,
  createdAt: PropTypes.string,
};
