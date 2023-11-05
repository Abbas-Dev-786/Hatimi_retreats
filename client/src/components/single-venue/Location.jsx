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
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2967.8862835683544!2d-73.98256668525309!3d41.93829486962529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89dd0ee3286615b7%3A0x42bfa96cc2ce4381!2s132%20Kingston%20St%2C%20Kingston%2C%20NY%2012401%2C%20USA!5e0!3m2!1sen!2sin!4v1670922579281!5m2!1sen!2sin"
              height="445"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
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
