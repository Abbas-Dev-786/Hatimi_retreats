import PropTypes from "prop-types";
import moment from "moment";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { Trash } from "react-feather";
import { IMAGE_URL } from "../../constants";
import { deleteCourt } from "../../state/api";

const TableItem = ({
  coverImage,
  name,
  type,
  address,
  chargePerHour,
  maxCapacity,
  createdAt,
  _id,
}) => {
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
            <a>{name}</a>
            <span className="text-capitalize">{type}</span>
          </span>
        </h2>
      </td>
      <td>{address}</td>
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
          <div className="dropdown-menu dropdown-menu-end">
            {/* <Link
              to={`/dashboard/courts/${_id}/edit`}
              className="dropdown-item"
            >
              <i>
                <Edit size={"15px"} />
              </i>
              Edit
            </Link> */}
            <a className="dropdown-item" onClick={handleDelete}>
              <i>
                <Trash size={"15px"} />
              </i>
              Delete
            </a>
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
