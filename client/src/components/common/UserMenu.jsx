import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { logout } from "../../state/slices/userSlice";
import { IMAGE_URL } from "../../constants";

const UserMenu = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());

    toast.success("Logout Successfull");

    navigate("/");
  };

  return (
    <div className="dropdown">
      <div
        className="dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img
          src={`${IMAGE_URL}/${user?.profileImg}`}
          alt="user-img"
          style={{ height: "44px", width: "44px", borderRadius: "50%" }}
        />
        {/* <p>
          {user.firstName} {user?.lastName}
        </p> */}
      </div>
      <ul className="dropdown-menu dropdown-menu-end">
        <li>
          <button
            className="dropdown-item"
            type="button"
            onClick={handleLogout}
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default UserMenu;
