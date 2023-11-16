import { ArrowRightCircle } from "react-feather";
import { Link } from "react-router-dom";

const ConvenientSection = () => {
  return (
    <section className="section convenient-section">
      <div className="cock-img">
        <div className="cock-img-one">
          <img src="/img/icons/cock-01.png" alt="Icon" />
        </div>
        <div className="cock-img-two">
          <img src="/img/icons/cock-02.png" alt="Icon" />
        </div>
        <div className="cock-circle">
          <img src="/img/bg/cock-shape.png" alt="Icon" />
        </div>
      </div>
      <div className="container">
        <div className="convenient-content aos" data-aos="fade-up">
          <h2>Convenient & Flexible Scheduling</h2>
          <p>
            Find and book coaches conveniently with our online system that
            matches your schedule and location.
          </p>
        </div>
        <div className="convenient-btns aos" data-aos="fade-up">
          <Link
            to="/venues"
            className="btn btn-primary d-inline-flex align-items-center"
          >
            Book a Venue
            <span className="lh-1">
              <i className="ms-2">
                <ArrowRightCircle size={"15px"} />
              </i>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ConvenientSection;
