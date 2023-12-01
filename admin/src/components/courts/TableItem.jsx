import PropTypes from "prop-types";
import moment from "moment";
import { useDispatch } from "react-redux";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { Compass, Edit, Image, Trash } from "react-feather";
import { IMAGE_URL } from "../../constants";
import { deleteCourt } from "../../state/api";
import { setEditCourtData } from "../../state/slices/courtSlice";

const TableItem = (data) => {
  const {
    coverImage,
    name,
    type,
    city,
    chargePerHour,
    maxCapacity,
    createdAt,
    _id,
    openingTime,
    closingTime,
  } = data;

  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationKey: ["delete-court"],
    mutationFn: deleteCourt,
    onError: (err) => {
      toast.error(err.message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["courts"] });

      toast.success(`Court Deleted Successfully`);
    },
  });

  const handleDelete = () => {
    mutate(_id);
  };

  const dispatch = useDispatch();
  const handleEdit = () => {
    dispatch(setEditCourtData(data));
  };

  return (
    <tr>
      <td>
        <h2 className="table-avatar">
          <a className="avatar avatar-sm  flex-shrink-0">
            <img
              className="avatar-img"
              src={`${IMAGE_URL}/${coverImage}`}
              alt="User"
            />
          </a>
          <span className="table-head-name flex-grow-1">
            <a className="text-capitalize">{name}</a>
            <span className="text-capitalize">{type}</span>
          </span>
        </h2>
      </td>
      <td className="text-capitalize">{city}</td>
      <td>
        {moment(openingTime).format("hh:mm A")}-{" "}
        {moment(closingTime).format("hh:mm A")}
      </td>
      <td>
        <span className="pay-dark">₹{chargePerHour}</span>
      </td>
      <td>{maxCapacity}</td>
      <td>{moment(createdAt).format("DD MMMM YYYY")}</td>

      <td className="text-end">
        <div className="dropdown dropdown-action table-drop-action">
          <a
            className="action-icon dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fas fa-ellipsis-h" />
          </a>
          <div
            className="dropdown-menu dropdown-menu-end"
            style={{ cursor: "pointer" }}
          >
            <div
              className="dropdown-item"
              data-bs-toggle="modal"
              data-bs-target="#amenityModal"
              onClick={handleEdit}
            >
              <i>
                <Edit size={"15px"} />
              </i>
              Edit
            </div>
            <div
              className="dropdown-item"
              data-bs-toggle="modal"
              data-bs-target="#imageModal"
              onClick={handleEdit}
            >
              <i>
                <Image size={"15px"} />
              </i>
              Change Images
            </div>
            <div
              className="dropdown-item"
              data-bs-toggle="modal"
              data-bs-target="#amenityModal2"
              onClick={handleEdit}
            >
              <i>
                <Compass size={"15px"} />
              </i>
              Change Amenites And Rules
            </div>
            <div className="dropdown-item" onClick={handleDelete}>
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
  coverImage: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  address: PropTypes.string,
  chargePerHour: PropTypes.number,
  maxCapacity: PropTypes.number,
  createdAt: PropTypes.string,
  _id: PropTypes.string,
};
