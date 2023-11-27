import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setNewCourtData } from "../../state/slices/courtSlice";

const PriceSection = () => {
  const [chargePerHour, setChargePerHour] = useState("");
  const [maxCapacity, setMaxCapacity] = useState("");
  const [extraMemberCharge, setExtraMemberCharge] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    const data = {
      chargePerHour,
      maxCapacity,
      extraMemberCharge,
    };

    dispatch(setNewCourtData(data));
  }, [chargePerHour, extraMemberCharge, maxCapacity, dispatch]);

  return (
    <div className="accordion-item mb-4" id="venue-price">
      <h4 className="accordion-header" id="panelsStayOpen-venue-price">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#panelsStayOpen-collapseTwo"
          aria-expanded="true"
          aria-controls="panelsStayOpen-collapseTwo"
        >
          Venue Price
        </button>
      </h4>
      <div
        id="panelsStayOpen-collapseTwo"
        className="accordion-collapse collapse show"
        aria-labelledby="panelsStayOpen-venue-price"
      >
        <div className="accordion-body">
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <div className="input-space">
                <label htmlFor="starting-price" className="form-label">
                  Charge (Per Hour) <span>*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="starting-price"
                  placeholder="Enter Price"
                  value={chargePerHour}
                  onChange={(e) => setChargePerHour(e.target.value)}
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="input-space">
                <label htmlFor="name" className="form-label">
                  Max Guests Capacity <span>*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="max-guests"
                  placeholder="Enter Max Number of Guests"
                  value={maxCapacity}
                  onChange={(e) => setMaxCapacity(e.target.value)}
                />
              </div>
            </div>

            <div className="col-lg-4 col-md-4">
              <div className="input-space mb-0">
                <label htmlFor="name" className="form-label">
                  Price of Extra Guest (Per Hour) <span>*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter Price of Extra Guests"
                  value={extraMemberCharge}
                  onChange={(e) => setExtraMemberCharge(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceSection;
