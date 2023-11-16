import Amenities from "./Amenities";
// import Includes from "./Includes";
import Location from "./Location";
import OptionsList from "./OptionsList";
import Overview from "./Overview";
import Reviews from "./Reviews";
import Rules from "./Rules";

const InfoContainer = () => {
  return (
    <div className="col-12 col-sm-12 col-md-12 col-lg-8">
      <OptionsList />

      <div className="accordion" id="accordionPanel">
        <Overview />
        {/* <Includes /> */}
        <Rules />
        <Amenities />
        <Reviews />
        <Location />
      </div>
    </div>
  );
};

export default InfoContainer;
