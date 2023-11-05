import Banner from "../components/common/Banner";
import Footer from "../components/common/Footer";
import FilterSection from "../components/venues/FilterSection";
import VenuesSection from "../components/venues/VenuesSection";

const Venues = () => {
  return (
    <>
      <Banner text="Venue List" linkText="Home" link="/" />
      <div className="content listing-list-page">
        <div className="container">
          <FilterSection />
          <VenuesSection />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Venues;
