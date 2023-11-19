import MapBox from "../common/MapBox";

const Location = () => {
  return (
    <div className="accordion-item" id="location">
      <h4 className="accordion-header" id="panelsStayOpen-location">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#panelsStayOpen-collapseSeven"
          aria-expanded="false"
          aria-controls="panelsStayOpen-collapseSeven"
        >
          Location
        </button>
      </h4>
      <div
        id="panelsStayOpen-collapseSeven"
        className="accordion-collapse collapse show"
        aria-labelledby="panelsStayOpen-location"
      >
        <div className="accordion-body">
          <div className="google-maps">
            <MapBox
              coordinates={[22.7055, 75.812]}
              address="70 Bright St New York, USA"
            />
          </div>
          <div className="dull-bg d-flex justify-content-start align-items-center mt-3">
            <div className="white-bg me-2">
              <i className="fas fa-location-arrow"></i>
            </div>
            <div>
              <h6>Our Venue Location</h6>
              <p>70 Bright St New York, USA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
