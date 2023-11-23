import PropTypes from "prop-types";
import { Calendar, Clock } from "react-feather";

const btnStyle = {
  backgroundColor: "rgb(9 126 82 / 23%)",
  display: "flex",
  alignItems: "center",
  gap: "10px",
  justifyContent: "center",
  height: "inherit",
  cursor: "pointer",
};

const OptionsContainer = ({ active, setActive }) => {
  return (
    <div className="row mb-3">
      <div
        className={`col-12 col-md-6 py-3 ${
          active === 0 ? "active-custom-option" : ""
        }`}
        style={btnStyle}
        onClick={() => setActive(0)}
      >
        <Clock color="black" />
        <h4 style={{ margin: 0 }}>Book For a Hour</h4>
      </div>
      <div
        className={`col-12 col-md-6 py-3 ${
          active === 1 ? "active-custom-option" : ""
        }`}
        style={btnStyle}
        onClick={() => setActive(1)}
      >
        <Calendar color="black" />
        <h4 style={{ margin: 0 }}>Book For a More Than a Hour</h4>
      </div>
    </div>
  );
};

export default OptionsContainer;

OptionsContainer.propTypes = {
  active: PropTypes.number,
  setActive: PropTypes.func,
};
