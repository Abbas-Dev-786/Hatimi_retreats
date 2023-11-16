import VenueList from "./VenueList";

const data = [
  {
    image: "/img/venues/venues-01.jpg",
    link: "3457873578",
    price: 450,
    rating: 4.2,
    ratingQuantity: 300,
    title: "Box Cricket Venus",
    desc: "Elevate your athletic journey at Sarah Sports Academy, where excellence meets opportunity.",
    address: "Port Alsworth, AK",
    availabilityDate: new Date(),
    isBookmarked: false,
  },
  {
    image: "/img/venues/venues-01.jpg",
    link: "6875678767",
    price: 200,
    rating: 5.0,
    ratingQuantity: 150,
    title: "Box Cricket Venus",
    desc: "Unleash your Box Cricket potential at our premier Box Cricket Academy, where champions are made.",
    address: "Guysville, OH",
    availabilityDate: new Date(),
    isBookmarked: false,
  },
  {
    image: "/img/venues/venues-01.jpg",
    link: "8475685767",
    price: 350,
    rating: 4.7,
    ratingQuantity: 120,
    title: "Box Cricket Venus",
    desc: "Manchester Academy: Where dreams meet excellence in sports education and training.",
    address: "Little Rock, AR",
    availabilityDate: new Date(),
    isBookmarked: true,
  },
];

const VenuesSection = () => {
  return (
    <div className="row justify-content-center">
      {data.map((item) => (
        <VenueList key={item.link} {...item} />
      ))}

      <div className="col-12 text-center">
        <div className="more-details">
          <a href="#" className="btn btn-load">
            Load More Venues
            <img
              src="/img/icons/u_plus-square.svg"
              className="ms-2"
              alt="Icon"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default VenuesSection;
