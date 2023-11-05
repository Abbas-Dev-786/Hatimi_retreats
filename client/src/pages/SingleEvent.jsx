import Banner from "../components/common/Banner";
import EventBookingForm from "../components/single-event/EventBookingForm";
import EventInfoSection from "../components/single-event/EventInfoSection";

const SingleEvent = () => {
  return (
    <div className="event-details-page">
      <Banner text="Event Details" linkText="Home" link="/" />
      <div className="content">
        <EventInfoSection />
        <EventBookingForm />
      </div>
    </div>
  );
};

export default SingleEvent;
