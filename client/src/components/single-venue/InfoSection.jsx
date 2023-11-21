import { useSelector } from "react-redux";
import { Mail, MapPin, PhoneCall, Share2, Star } from "react-feather";

const InfoSection = () => {
  const { courtData } = useSelector((state) => state.court);

  return (
    <div className="venue-info white-bg d-block">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-6">
            <h1 className="d-flex align-items-center justify-content-start">
              {courtData?.name}
              <span className="d-flex justify-content-center align-items-center">
                <i className="fas fa-check-double"></i>
              </span>
            </h1>
            <ul className="d-sm-flex justify-content-start align-items-center">
              <li>
                <i>
                  <MapPin size={"15px"} />
                </i>
                {courtData?.address}
              </li>
              <li>
                <i>
                  <PhoneCall size={"15px"} />
                </i>
                +3 80992 31212
              </li>
              <li>
                <i>
                  <Mail size={"15px"} />
                </i>
                <a>
                  <span className="__cf_email__">[email&#160;protected]</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 text-right">
            <ul className="social-options float-lg-end d-sm-flex justify-content-start align-items-center">
              {/* <li>
                <div>
                  <i>
                    <Share2 size={"15px"} />
                  </i>
                  Share
                </div>
              </li> */}
              {/* <li>
                <div className="favour-adds">
                  <i>
                    <Star size={"15px"} />
                  </i>
                  Add to favourite
                </div>
              </li> */}
              <li className="venue-review-info d-flex justify-content-start align-items-center">
                <span className="d-flex justify-content-center align-items-center">
                  {courtData?.ratingsAverage}
                </span>
                <div className="review">
                  <div className="rating">
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                  </div>
                  <p className="mb-0">{courtData?.ratingsQuantity} Reviews</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row bottom-row d-flex align-items-center">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <ul className="d-sm-flex details">
              <li>
                <div className="profile-pic">
                  <div className="venue-type">
                    <img
                      className="img-fluid"
                      src="/img/icons/venue-type.svg"
                      alt="Icon"
                    />
                  </div>
                </div>
                <div className="ms-2">
                  <p>Venue Type</p>
                  <h6 className="mb-0 text-capitalize">{courtData?.type}</h6>
                </div>
              </li>
              <li>
                <div className="profile-pic">
                  <div>
                    <img
                      className="img-fluid"
                      src="/img/profiles/avatar-01.jpg"
                      alt="Icon"
                    />
                  </div>
                </div>
                <div className="ms-2">
                  <p>Added By</p>
                  <h6 className="mb-0">Hatimi Retreats</h6>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <div className="d-flex float-sm-end align-items-center">
              <p className="d-inline-block me-2 mb-0">Starts From :</p>
              <h3 className="primary-text mb-0 d-inline-block">
                ₹{courtData?.chargePerHour}
                <span>/ hr</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
