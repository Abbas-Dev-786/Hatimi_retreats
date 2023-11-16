import { ArrowRight } from "react-feather";
import { Link } from "react-router-dom";

const cardsData = [
  {
    icon: "/img/icons/work-icon1.svg",
    title: "Login",
    desc: "Quick and Easy login with your its and password",
    btnText: "Login Now",
    link: "https://www.its52.com/",
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
    link: "/venues",
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
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
