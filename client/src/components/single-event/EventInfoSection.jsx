import EventBanner from "./EventBanner";
import InfoContainer from "./InfoContainer";

const EventInfoSection = () => {
  return (
    <section className="detail-info">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 offset-md-1 col-md-10 col-lg-10">
            <div className="wrapper">
              <EventBanner />

              <InfoContainer />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventInfoSection;
