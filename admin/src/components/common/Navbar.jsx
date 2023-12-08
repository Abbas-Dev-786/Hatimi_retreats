import { Link } from "react-router-dom";
import { CheckCircle } from "react-feather";
import UserMenu from "./UserMenu";

const Navbar = () => {
  return (
    <>
      <header className="header header-sticky bg-white border-btm-dark">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg header-nav">
            <div className="navbar-header">
              <a id="mobile_btn">
                <span className="bar-icon">
                  <span />
                  <span />
                  <span />
                </span>
              </a>
              <Link to="/dashboard" className="navbar-brand logo">
                <img
                  src="/img/logo-black.png"
                  className="img-fluid"
                  alt="Logo"
                />
              </Link>
            </div>
            <div className="main-menu-wrapper">
              <div className="menu-header">
                <Link to="/dashboard" className="menu-logo">
                  <img
                    src="/img/logo-black.png"
                    className="img-fluid"
                    alt="Logo"
                  />
                </Link>
                <a id="menu_close" className="menu-close">
                  {" "}
                  <i className="fas fa-times" />
                </a>
              </div>
            </div>
            <div className="d-flex flex-row align-items-center justify-content-center gap-5">
              <ul className="nav header-navbar-rht logged-in">
                <li className="nav-item">
                  <Link
                    to="/dashboard/courts/new"
                    className="nav-link btn btn-secondary"
                  >
                    <span>
                      <i>
                        <CheckCircle size={"15px"} />
                      </i>
                    </span>
                    Add New Court
                  </Link>
                </li>
              </ul>

              <UserMenu />
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
