import { useState } from "react";
import { Calendar } from "react-feather";

const AvailabilityForm = () => {
  const [noOfGuests, setNoOfGuests] = useState(2);

  return (
    <div className="white-bg">
      <h4 className="border-bottom">Request for Availability</h4>
      <form>
        <div className="mb-10">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter Name"
          />
        </div>
        <div className="mb-10">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter Email Address"
          />
        </div>
        <div className="mb-10">
          <label htmlFor="name" className="form-label">
            Phone Number
          </label>
          <input
            type="text"
            className="form-control"
            id="phonenumber"
            placeholder="Enter Phone Number"
          />
        </div>
        <div className="mb-10">
          <label htmlFor="date" className="form-label">
            Date
          </label>
          <div className="form-icon">
            <input
              type="text"
              className="form-control datetimepicker"
              placeholder="Select Date"
              id="date"
            />
            <span className="cus-icon">
              <i>
                <Calendar />
              </i>
            </span>
          </div>
        </div>
        <div className="mb-10">
          <label htmlFor="comments" className="form-label">
            Details
          </label>
          <textarea
            className="form-control"
            id="comments"
            rows="3"
            placeholder="Enter Comments"
          ></textarea>
        </div>
        <div>
          <label className="form-label">Number of Guests</label>
          <div className="input-group">
            {[1, 2, 3, 4].map((el) => (
              <input
                key={el}
                type="number"
                className={`form-control ${el === noOfGuests ? "active" : ""}`}
                value={el}
                onClick={(e) => setNoOfGuests(+e.target.value)}
                readOnly
              />
            ))}
          </div>
        </div>
        <div className="form-check d-flex justify-content-start align-items-center policy">
          <div className="d-inline-block">
            <input
              className="form-check-input"
              type="checkbox"
              value
              id="policy"
              defaultChecked
            />
          </div>
          <label className="form-check-label" htmlFor="policy">
            By clicking &apos;Send Request&apos;, I agree to Dreamsport Privacy
            Policy and Terms of Use
          </label>
        </div>
        <div className="d-grid btn-block">
          <a
            href="#"
            className="btn btn-secondary d-inline-flex justify-content-center align-items-center"
          >
            Send Request
            <i className="feather-arrow-right-circle ms-1"></i>
          </a>
        </div>
      </form>
    </div>
  );
};

export default AvailabilityForm;
