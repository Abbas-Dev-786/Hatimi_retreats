import { Clock, MapPin } from "react-feather";

const EventBanner = () => {
  return (
    <div className="banner">
      <div className="text-center">
        <img
          src="/img/events/banner-01.jpg"
          className="img-fluid"
          alt="Banner"
        />
      </div>
      <div className="white-bg info d-lg-flex justify-content-between align-items-center">
        <div className="description">
          <h6>
            Quisq commodo simply free ornare tortor. If you are going to use a
            passage. Quisq commodo simply free ornare tortor. If you are going
          </h6>
        </div>
        <div className="d-flex align-items-center time">
          <i className="d-flex justify-content-center align-items-center">
            <Clock size={"15px"} />
          </i>
          <div className="text">
            <h6>20 Sep, 2023</h6>
            <span>08:00 AM</span>
          </div>
        </div>
        <div className="d-flex align-items-center address">
          <i className="d-flex justify-content-center align-items-center">
            <MapPin size={"15px"} />
          </i>
          <div className="text">
            <h6>
              66 Broklyn Golden Street <br />
              New York, USA
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventBanner;
