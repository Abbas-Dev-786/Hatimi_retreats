import { useSelector } from "react-redux";
import { IMAGE_URL } from "../../constants";

const UserMenu = () => {
  const { user } = useSelector((state) => state.user);

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
          <button className="dropdown-item" type="button">
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default UserMenu;
