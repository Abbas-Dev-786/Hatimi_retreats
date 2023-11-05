import { useEffect, useMemo, useState } from "react";
import { Crosshair, Users } from "react-feather";
import { Link, NavLink, useLocation } from "react-router-dom";

const navItems = [
  { text: "Home", link: "/" },
  { text: "Book Venues", link: "/venues" },
  { text: "My Bookings", link: "/bookings" },
  { text: "Events", link: "/events" },
  { text: "About Us", link: "/aboutus" },
  { text: "Contact Us", link: "/contactus" },
];

const Navbar = () => {
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
    <>
      <header
        className={`header header-${pathname === "/" ? "trans" : "sticky"}`}
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
                <a id="menu_close" className="menu-close">
                  <Crosshair />
                  {/* <i className="fas fa-times"></i> */}
                </a>
              </div>
              <ul className="main-nav">
                {navItems.map((item, i) => (
                  <li
                    className={activeLink === item.link ? "active" : ""}
                    key={i}
                  >
                    <NavLink
                      to={item.link}
                      onClick={() => setActiveLink(item.link)}
                    >
                      {item.text}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <ul className="nav header-navbar-rht">
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
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
