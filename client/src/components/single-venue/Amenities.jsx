const Amenities = () => {
  return (
    <div className="accordion-item mb-4" id="amenities">
      <h4 className="accordion-header" id="panelsStayOpen-amenities">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#panelsStayOpen-collapseFour"
          aria-expanded="false"
          aria-controls="panelsStayOpen-collapseFour"
        >
          Amenities
        </button>
      </h4>
      <div
        id="panelsStayOpen-collapseFour"
        className="accordion-collapse collapse show"
        aria-labelledby="panelsStayOpen-amenities"
      >
        <div className="accordion-body">
          <ul className="d-md-flex justify-content-between align-items-center">
            <li>
              <i className="fa fa-check-circle" aria-hidden="true"></i>
              Parking
            </li>
            <li>
              <i className="fa fa-check-circle" aria-hidden="true"></i>
              Drinking Water
            </li>
            <li>
              <i className="fa fa-check-circle" aria-hidden="true"></i>
              First Aid
            </li>
            <li>
              <i className="fa fa-check-circle" aria-hidden="true"></i>
              Change Room
            </li>
            <li>
              <i className="fa fa-check-circle" aria-hidden="true"></i>
              Shower
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Amenities;
