import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import MapBox from "../common/MapBox";
import { setNewCourtData } from "../../state/slices/courtSlice";

const LocationSection = () => {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [location, setLocation] = useState("");
  const [address, setAddress] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    const data = {
      country,
      city,
      location:
        location.split(",").filter((l) => l.length != 0).length == 2
          ? location.split(",").map((c) => +c)
          : [],
      address,
    };

    dispatch(setNewCourtData(data));
  }, [country, city, location, address, dispatch]);

  return (
    <div className="accordion-item" id="location">
      <h4 className="accordion-header" id="panelsStayOpen-location">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#panelsStayOpen-collapseNine"
          aria-expanded="false"
          aria-controls="panelsStayOpen-collapseNine"
        >
          Location
        </button>
      </h4>
      <div
        id="panelsStayOpen-collapseNine"
        className="accordion-collapse collapse show"
        aria-labelledby="panelsStayOpen-location"
      >
        <div className="accordion-body">
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <div className="input-space">
                <label htmlFor="country" className="form-label">
                  Country <span>*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="country"
                  placeholder="Enter Country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="input-space">
                <label htmlFor="city" className="form-label">
                  City <span>*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  placeholder="Enter City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="input-space">
                <label htmlFor="coords" className="form-label">
                  Coordinates <span>*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="coords"
                  placeholder="Enter Location Coordinates"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
            </div>
            <div className="col-12">
              <div className="input-space">
                <label htmlFor="street-address" className="form-label">
                  Street Address <span>*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="street-address"
                  placeholder="Enter Street Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="col-12">
            <label htmlFor="name" className="form-label">
              Map
            </label>
            <div className="google-maps">
              <MapBox
                coordinates={
                  location.split(",").filter((l) => l.length != 0).length == 2
                    ? location.split(",").map((c) => +c)
                    : []
                }
                address={address}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationSection;
