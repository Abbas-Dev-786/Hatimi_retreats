import { useNavigate } from "react-router-dom";
import { Search } from "react-feather";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { useQuery } from "@tanstack/react-query";
import { getCities, getSports } from "../../state/api";
import { useState } from "react";

const HeroSection = () => {
  const [city, setCity] = useState("");
  const [sport, setSport] = useState("");
  const navigate = useNavigate();

  const { data: cityData } = useQuery({
    queryKey: ["cities"],
    queryFn: getCities,
  });

  const { data: sportsData } = useQuery({
    queryKey: ["sports", city],
    queryFn: getSports,
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!city || !sport) {
      alert("Please Select a City and Sport");
      return;
    }

    navigate(`/venues?city=${city}&sport=${sport}`);
  };

  return (
    <section className="hero-section">
      {/* <div className="banner-cock-one">
        <img
          src="/img/icons/banner-cock1.png"
          alt="Banner"
          width="50px"
          style={{ opacity: 0.3 }}
        />
      </div> */}
      <div className="banner-shapes">
        <div className="banner-dot-one">
          <span></span>
        </div>
        <div className="banner-cock-two">
          <img src="/img/bg/ball.png" alt="Banner" />
          {/* <span></span> */}
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
                        <label>Select City </label>
                        <Dropdown
                          options={cityData?.map((obj) => obj._id) || []}
                          placeholder="Search for City"
                          onChange={(e) => setCity(e.value)}
                          value={cityData?.[0]?._id}
                          controlClassName="select-hero"
                        />
                      </div>
                    </div>
                    <div className="search-input">
                      <div className="form-group mb-0">
                        <label>Select Sport</label>
                        <Dropdown
                          options={sportsData?.map((obj) => obj._id) || []}
                          placeholder="Search for City"
                          onChange={(e) => setSport(e.value)}
                          value={sportsData?.[0]?._id}
                          controlClassName="select-hero"
                        />
                      </div>
                    </div>
                    <div className="search-btn" onClick={handleFormSubmit}>
                      <button className="btn" type="submit">
                        <Search />
                        <span className="search-text">Search</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="banner-imgs text-center aos" data-aos="fade-up">
                <div>
                  <img
                    className="img-fluid"
                    src="/img/bg/banner_img_2.png"
                    alt="Banner"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
