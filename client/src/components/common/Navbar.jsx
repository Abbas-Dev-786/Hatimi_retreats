import { useEffect, useMemo, useState } from "react";
import { Users, X } from "react-feather";
import { useSelector } from "react-redux";
import { Link, NavLink, useLocation } from "react-router-dom";
import UserMenu from "./UserMenu";

const navItems = [
  { text: "Home", link: "/" },
  { text: "Book Venues", link: "/venues" },
  { text: "My Bookings", link: "/bookings", protected: true },
  // { text: "Events", link: "/events" },
  // { text: "About Us", link: "/aboutus" },
  { text: "Contact Us", link: "/contactus" },
];

const Navbar = () => {
  const { user } = useSelector((state) => state.user);
  const location = useLocation();
  const { pathname } = location;

  const [activeLink, setActiveLink] = useState(pathname);
  const [isScrolled, setIsScrolled] = useState(false);
  const [changedColor, setChangedColor] = useState(false);
  const [showNav, setShowNav] = useState(false);

  useMemo(() => {
    setChangedColor(pathname === "/" ? "#177c82" : "#fff");
  }, [pathname]);

  useEffect(() => {
    const changeNavbarColor = () => {
      if (window.scrollY >= 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", changeNavbarColor);
  }, []);

  return (
    <header
      className={`header header-${pathname === "/" ? "trans" : "sticky"} ${
        pathname === "/" ? "" : "fixed-top"
      } ${showNav ? "menu-opened" : ""}`}
      style={{ background: isScrolled ? changedColor : "transparent" }}
    >
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg header-nav">
          <div className="navbar-header">
            <div id="mobile_btn" onClick={() => setShowNav(true)}>
              <span className="bar-icon">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <Link to="/" className="navbar-brand logo">
              <img
                src={`/img/logo${pathname === "/" ? "" : "-black"}.png`}
                className=""
                alt="Logo"
              />
            </Link>
          </div>
          <div className="main-menu-wrapper">
            <div className="menu-header">
              <NavLink to="/" className="menu-logo">
                <img
                  src="/img/logo-black.png"
                  className="img-fluid"
                  alt="Logo"
                />
              </NavLink>
              <a
                id="menu_close"
                className="menu-close"
                onClick={() => setShowNav(false)}
              >
                <X />
              </a>
            </div>
            <ul className="main-nav">
              {navItems.map((item, i) => {
                if (item?.protected && !user?.firstName) {
                  return null;
                } else {
                  return (
                    <li
                      className={activeLink === item.link ? "active" : ""}
                      key={i}
                    >
                      <NavLink
                        to={item.link}
                        onClick={() => {
                          setActiveLink(item.link);
                          setShowNav(false);
                        }}
                      >
                        {item.text}
                      </NavLink>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
          <ul className="nav header-navbar-rht">
            {user?.firstName ? (
              <UserMenu />
            ) : (
              <li className="nav-item">
                <a
                  className="nav-link btn btn-secondary"
                  href="https://www.its52.com/"
                >
                  <span>
                    <Users size="15px" />
                  </span>
                  Login with ITS
                </a>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
