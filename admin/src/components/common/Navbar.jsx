import React from 'react'

const Navbar = () => {
  return (
    <>
<header className="header header-sticky bg-white border-btm-dark">
  <div className="container-fluid">
    <nav className="navbar navbar-expand-lg header-nav">
      <div className="navbar-header">
        <a id="mobile_btn" href="javascript:void(0);">
          <span className="bar-icon">
            <span />
            <span />
            <span />
          </span>
        </a>
        <a href="index.html" className="navbar-brand logo">
          <img
            src="/img/logo-black.png"
            className="img-fluid"
            alt="Logo"
          />
        </a>
      </div>
      <div className="main-menu-wrapper">
        <div className="menu-header">
          <a href="index.html" className="menu-logo">
            <img
              src="/img/logo-black.png"
              className="img-fluid"
              alt="Logo"
            />
          </a>
          <a id="menu_close" className="menu-close" href="javascript:void(0);">
            {" "}
            <i className="fas fa-times" />
          </a>
        </div>
      </div>
      <ul className="nav header-navbar-rht logged-in">
        <li className="nav-item">
          <a className="nav-link btn btn-secondary" href="add-court.html">
            <span>
              <i className="feather-check-circle" />
            </span>
            List Your Court
          </a>
        </li>
      </ul>
    </nav>
  </div>
</header>

    </>
  )
}

export default Navbar
