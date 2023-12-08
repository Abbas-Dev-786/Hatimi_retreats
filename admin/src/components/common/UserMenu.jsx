import { useSelector, useDispatch } from "react-redux";
import { IMAGE_URL } from "../../constants";
import { logout } from "../../state/slices/userSlice";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(logout());

    toast.success("Logout Successfull");
  };

  return (
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav">
        <div className="nav-item dropdown">
          <div
            className="dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src={`${IMAGE_URL}/${user?.profileImg}`}
              alt="user-img"
              style={{ height: "60px", width: "60px", borderRadius: "50%" }}
            />
            {/* <p>
          {user.firstName} {user?.lastName}
        </p> */}
          </div>
          <ul className="dropdown-menu dropdown-menu-end">
            <li>
              <Link
                to="/dashboard/changePassword"
                className="dropdown-item"
                type="button"
              >
                Change Password
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
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
      </ul>
    </div>
  );
};

export default UserMenu;
