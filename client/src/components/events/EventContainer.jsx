import EventCard from "./EventCard";

const data = [
  {
    image: "/img/venues/venues-01.jpg",
    link: "5645641515",
    date: new Date(),
    address: "152, 1st Street New York",
    eventName: "Flight of the Feathers",
  },
  {
    image: "/img/venues/venues-01.jpg",
    link: "6545456456",
    date: new Date(),
    address: "152, 1st Street New York",
    eventName: "Battle at the Net",
  },
  {
    image: "/img/venues/venues-01.jpg",
    link: "1545645145",
    date: new Date(),
    address: "152, 1st Street New York",
    eventName: "Badminton Fusion",
  },
];

const EventContainer = () => {
  return (
    <div className="content">
      <div className="container">
        <section className="services">
          <div className="row">
            {data.map((item, i) => (
              <EventCard key={i} {...item} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default EventContainer;
