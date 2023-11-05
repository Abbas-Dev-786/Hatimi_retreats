import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter, Users } from "react-feather";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-join aos" data-aos="fade-up">
          <h2>We Welcome Your Passion And Expertise</h2>
          <p className="sub-title">
            Join our empowering sports community today and grow with us.
          </p>
          <Link href="register.html" className="btn btn-primary">
            <i className="me-2">
              <Users size="18px" />
            </i>
            Login With ITS
          </Link>
        </div>

        <div className="footer-top">
          <div className="row">
            <div className="col-lg-5 col-md-6">
              <img src="/img/logo.png" width="90px" />
              <p className="mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                qui ab illo animi ex, aut quod soluta eveniet. Praesentium
                architecto dolorem doloremque nam amet obcaecati doloribus
                dolorum? Quo, tempore saepe?
              </p>
            </div>

            <div className="col-lg-4 px-md-5 col-md-6">
              <div className="footer-widget footer-menu">
                <h4 className="footer-title">Contact us</h4>
                <div className="footer-address-blk">
                  <div className="footer-call">
                    <span>Toll free Customer Care</span>
                    <p>+017 123 456 78</p>
                  </div>
                  <div className="footer-call">
                    <span>Need Live Support</span>
                    <p>
                      <Link
                        href="https://Hatimi Retreats.dreamguystech.com/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="04607661656977746b76707744617c65697468612a676b69"
                      >
                        [email&#160;protected]
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="social-icon"></div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="footer-widget footer-menu">
                <h4 className="footer-title">Follow us</h4>
                <div className="footer-address-blk"></div>
                <div className="social-icon">
                  <ul>
                    <li>
                      <Link className="facebook">
                        <i>
                          <Facebook size="18px" />
                        </i>
                      </Link>
                    </li>
                    <li>
                      <Link className="twitter">
                        <i>
                          <Twitter size="18px" />
                        </i>
                      </Link>
                    </li>
                    <li>
                      <Link className="instagram">
                        <i>
                          <Instagram size="18px" />
                        </i>
                      </Link>
                    </li>
                    <li>
                      <Link className="linked-in">
                        <i>
                          <Linkedin size="18px" />
                        </i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="copyright">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="copyright-text">
                  <p className="mb-0">
                    &copy; 2023 Hatimi Retreats - All rights reserved.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="dropdown-blk">
                  <ul className="navbar-nav selection-list">
                    <li className="nav-item dropdown">
                      <div className="lang-select"></div>
                    </li>
                    <li className="nav-item dropdown">
                      <div className="lang-select"></div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
