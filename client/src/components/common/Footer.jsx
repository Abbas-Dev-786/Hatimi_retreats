import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter, Users } from "react-feather";
import {
  InstagramHandle,
  customerCareNumber,
  email,
  facebookHandle,
  linkedinHandle,
  twitterHandle,
} from "../../constants";
import { useSelector } from "react-redux";

const Footer = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-join aos" data-aos="fade-up">
          <h2>We Welcome Your Passion And Expertise</h2>
          <p className="sub-title">
            Join our empowering sports community today and grow with us.
          </p>
          {!user?.firstName && (
            <Link to="https://www.its52.com/" className="btn btn-primary">
              <i className="me-2">
                <Users size="18px" />
              </i>
              Login With ITS
            </Link>
          )}
        </div>

        <div className="footer-top">
          <div className="row">
            <div className="col-lg-5 col-md-6">
              <img src="/img/logo.png" width="90px" />
              <p className="mt-3">
                Book your sports turf now and experience the thrill of the game
                in our state-of-the-art facilities. We offer a variety of turf
                sizes and amenities to accommodate all levels of play. Our
                convenient online booking system makes it easy to reserve your
                time, and our friendly staff is always available to answer your
                questions.
              </p>
            </div>

            <div className="col-lg-4 px-md-5 col-md-6">
              <div className="footer-widget footer-menu">
                <h4 className="footer-title">Contact us</h4>
                <div className="footer-address-blk">
                  <div className="footer-call">
                    <span>Toll free Customer Care</span>
                    <p>{customerCareNumber}</p>
                  </div>
                  <div className="footer-call">
                    <span>Need Live Support</span>
                    <p>
                      <a href={`mailto:${email}`} className="__cf_email__">
                        {email}
                      </a>
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
                      <Link className="facebook" to={facebookHandle}>
                        <i>
                          <Facebook size="18px" />
                        </i>
                      </Link>
                    </li>
                    <li>
                      <Link className="twitter" to={twitterHandle}>
                        <i>
                          <Twitter size="18px" />
                        </i>
                      </Link>
                    </li>
                    <li>
                      <Link className="instagram" to={InstagramHandle}>
                        <i>
                          <Instagram size="18px" />
                        </i>
                      </Link>
                    </li>
                    <li>
                      <Link className="linked-in" to={linkedinHandle}>
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
              <div className="col-12">
                <div className="copyright-text">
                  <p className="mb-0 text-center">
                    &copy; 2023 Hatimi Retreats - All rights reserved.
                  </p>
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
