import { NavLink } from "react-router-dom";
import { Search } from "react-feather";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const sportOptions = [
  "Box Cricket",
  "Table Tennis",
  "Badminton",
  "Carrom",
  "Chess",
];

const cityOptions = ["Surat"];

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="banner-cock-one">
        <img
          src="/img/icons/banner-cock1.png"
          alt="Banner"
          width="50px"
          style={{ opacity: 0.3 }}
        />
      </div>
      <div className="banner-shapes">
        <div className="banner-dot-one">
          <span></span>
        </div>
        <div className="banner-cock-two">
          <img src="/img/icons/banner-cock2.png" alt="Banner" />
          <span></span>
        </div>
        <div className="banner-dot-two">
          <span></span>
        </div>
      </div>
      <div className="container">
        <div className="home-banner">
          <div className="row align-items-center w-100">
            <div className="col-lg-7 col-md-10 mx-auto">
              <div className="section-search aos" data-aos="fade-up">
                <h4>World Class Box Cricket Turf</h4>
                <h1>
                  Choose Your <span>Turf</span> and Start Your Training
                </h1>
                <p className="sub-info">
                  Unleash Your Athletic Potential with Expert Coaching,
                  State-of-the-Art Facilities, and Personalized Training
                  Programs.
                </p>
                <div className="search-box">
                  <form>
                    <div className="search-input line">
                      <div className="form-group mb-0">
                        <label>Select Sport</label>
                        <Dropdown
                          options={sportOptions}
                          value={sportOptions[0]}
                          controlClassName="select-hero"
                        />
                      </div>
                    </div>
                    <div className="search-input">
                      <div className="form-group mb-0">
                        <label>Where </label>
                        <Dropdown
                          options={cityOptions}
                          value={cityOptions[0]}
                          controlClassName="select-hero"
                        />
                      </div>
                    </div>
                    <div className="search-btn">
                      <NavLink to="/venues" className="btn">
                        <Search />
                        <span className="search-text">Search</span>
                      </NavLink>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="banner-imgs text-center aos" data-aos="fade-up">
                <img
                  className="img-fluid"
                  src="/img/bg/banner-right.png"
                  alt="Banner"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
