import { ArrowRightCircle } from "react-feather";
import FeaturedSlider from "./FeaturedSlider";
import { Link } from "react-router-dom";

const FeaturedSection = () => {
  return (
    <section className="section featured-venues">
      <div className="container">
        <div className="section-heading aos" data-aos="fade-up">
          <h2>
            Featured <span>Venues</span>
          </h2>
          <p className="sub-title">
            Advanced sports venues offer the latest facilities, dynamic and
            unique environments for enhanced Box Cricket performance.
          </p>
        </div>
        <div className="row">
          <div className="featured-slider-group">
            <FeaturedSlider />
          </div>
        </div>

        <div className="view-all text-center aos" data-aos="fade-up">
          <Link
            to="/venues"
            className="btn btn-secondary d-inline-flex align-items-center"
          >
            View All Featured
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

export default FeaturedSection;
