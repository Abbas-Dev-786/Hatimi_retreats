import PropTypes from "prop-types";
import moment from "moment";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { Trash } from "react-feather";
import { deleteRule } from "../../state/api";

const RulesDataItem = ({ text, createdAt, _id }) => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationKey: ["delete-rule"],
    mutationFn: deleteRule,
    onError: (err) => {
      toast.error(err.message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["rules"] });

      toast.success(`Rule Deleted Successfully`);
    },
  });

  const handleDelete = () => {
    mutate(_id);
  };

  return (
    <tr>
      <td className="table-name-user text-capitalize w-25">{text}</td>
      <td className="table-date-time">
        {moment(createdAt).format("DD MMMM YYYY")}
      </td>

      <td>
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
            {/* <a className="dropdown-item">
              <i>
                <Edit size={"15px"} />
              </i>
              Edit
            </a> */}
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

export default RulesDataItem;

RulesDataItem.propTypes = {
  court: PropTypes.object,
  startTime: PropTypes.string,
  text: PropTypes.string,
  endTime: PropTypes.string,
  user: PropTypes.object,
  price: PropTypes.number,
  _id: PropTypes.string,
  totalGuests: PropTypes.number,
  createdAt: PropTypes.string,
};
