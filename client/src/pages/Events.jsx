import Banner from "../components/common/Banner";
import EventContainer from "../components/events/EventContainer";

const Events = () => {
  return (
    <div className="events-page innerpagebg">
      <Banner text="Events" linkText="Home" link="/" />
      <EventContainer />
    </div>
  );
};

export default Events;
