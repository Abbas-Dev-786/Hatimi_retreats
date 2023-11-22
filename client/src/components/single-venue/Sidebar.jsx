// import AvailabilityForm from "./AvailabilityForm";
import BookingForm from "./BookingForm";
import StickyBox from "react-sticky-box";

const Sidebar = () => {
  return (
    <StickyBox
      offsetTop={20}
      offsetBottom={0}
      style={{ height: "95vh" }}
      className="col-12 col-sm-12 col-md-12 col-lg-4"
    >
      <aside className="">
        <div className="white-bg d-flex justify-content-start align-items-center availability">
          <div>
            <span className="icon-bg">
              <img
                className="img-fluid"
                alt="Icon"
                src="/img/icons/head-calendar.svg"
              />
            </span>
          </div>
          <div>
            <h4>Availability</h4>
            <p className="mb-0">Check availability on your convenient time</p>
          </div>
        </div>

        <BookingForm />

        {/* <AvailabilityForm /> */}

        {/* <div className="white-bg">
        <h4 className="border-bottom">Share Venue</h4>
        <ul className="social-medias d-flex">
          <li className="facebook">
            <a>
              <i className="fa-brands fa-facebook-f"></i>
            </a>
          </li>
          <li className="instagram">
            <a>
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li className="behance">
            <a>
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </li>
        </ul>
      </div> */}
      </aside>
    </StickyBox>
  );
};

export default Sidebar;
