import { ArrowRight } from "react-feather";
import { Link } from "react-router-dom";

const cardsData = [
  {
    icon: "/img/icons/work-icon1.svg",
    title: "Login",
    desc: "Quick and Easy login with your its and password",
    btnText: "Login Now",
    link: "/login",
  },
  {
    icon: "/img/icons/work-icon2.svg",
    title: "Select Venues",
    desc: "Book Box cricket venues for expert guidance and premium facilities.",
    btnText: "Go To Venues",
    link: "/venues",
  },
  {
    icon: "/img/icons/work-icon3.svg",
    title: "Booking Process",
    desc: "Easily book and enjoy a seamless experience on our platform.",
    btnText: "Book Now",
    link: "/bookings",
  },
];

const WorkSection = () => {
  return (
    <section className="section work-section">
      <div className="work-cock-img"></div>
      <div className="work-img">
        <div className="work-img-right"></div>
      </div>
      <div className="container">
        <div className="section-heading aos" data-aos="fade-up">
          <h2>
            How It <span>Works</span>
          </h2>
          <p className="sub-title">Simplifying The Booking Process</p>
        </div>
        <div className="row justify-content-center">
          {cardsData.map((item, i) => (
            <div className="col-lg-4 col-md-6 d-flex" key={i}>
              <div className="work-grid w-100 aos" data-aos="fade-up">
                <div className="work-icon">
                  <div className="work-icon-inner">
                    <img src={item.icon} alt="Icon" />
                  </div>
                </div>
                <div className="work-content">
                  <h5>
                    <Link to={item.link} style={{ textDecoration: "none" }}>
                      {item.title}
                    </Link>
                  </h5>
                  <p>{item.desc}</p>
                  <Link className="btn" to={item.link}>
                    {item.btnText}{" "}
                    <i>
                      <ArrowRight size="15px" />
                    </i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
          {/* <div className="col-lg-4 col-md-6 d-flex">
            <div className="work-grid w-100 aos" data-aos="fade-up">
              <div className="work-icon">
                <div className="work-icon-inner">
                  <img src="/img/icons/work-icon1.svg" alt="Icon" />
                </div>
              </div>
              <div className="work-content">
                <h5>
                  <a href="register.html">Login</a>
                </h5>
                <p>Quick and Easy login with your its and password</p>
                <a className="btn" href="https://www.its52.com/">
                  Login Now <i className="feather-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex">
            <div className="work-grid w-100 aos" data-aos="fade-up">
              <div className="work-icon">
                <div className="work-icon-inner">
                  <img src="/img/icons/work-icon2.svg" alt="Icon" />
                </div>
              </div>
              <div className="work-content">
                <h5>
                  <a href="coaches-list.html">Select Venues</a>
                </h5>
                <p>
                  Book Box cricket venues for expert guidance and premium
                  facilities.
                </p>
                <a className="btn" href="listing-list.html">
                  Go To Venues <i className="feather-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex">
            <div className="work-grid w-100 aos" data-aos="fade-up">
              <div className="work-icon">
                <div className="work-icon-inner">
                  <img src="/img/icons/work-icon3.svg" alt="Icon" />
                </div>
              </div>
              <div className="work-content">
                <h5>
                  <a href="coach-details.html">Booking Process</a>
                </h5>
                <p>
                  Easily book and enjoy a seamless experience on our platform.
                </p>
                <a className="btn" href="listing-list.html">
                  Book Now <i className="feather-arrow-right"></i>
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
