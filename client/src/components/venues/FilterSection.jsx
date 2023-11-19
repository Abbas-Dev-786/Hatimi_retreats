import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const FilterSection = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { city, sport } = Object.fromEntries([...searchParams]);

  const [selectedCity, setSelectedCity] = useState(city || "");
  const [selectedSport, setSelectedSport] = useState(sport || "");

  useEffect(() => {
    if (selectedCity && selectedSport) {
      setSearchParams({ city: selectedCity, sport: selectedSport });
    }
  }, [selectedCity, selectedSport, setSearchParams]);

  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="sortby-section">
          <div className="sorting-info">
            <div className="row d-flex align-items-center">
              <div className="col-xl-4 col-lg-3 col-sm-12 col-12">
                <div className="count-search">
                  <p>
                    <span>400</span> venues are listed
                  </p>
                </div>
              </div>
              <div className="col-xl-8 col-lg-9 col-sm-12 col-12">
                <div
                  className="sortby-filter-group"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                    gap: "20px",
                  }}
                >
                  <div className="sortbyset">
                    <span className="sortbytitle">City</span>
                    <div className="sorting-select">
                      <select
                        className="form-select"
                        onChange={(e) => setSelectedCity(e.target.value)}
                        value={city}
                      >
                        <option value={"city A"}>City A</option>
                        <option value={"city B"}>City B</option>
                      </select>
                    </div>
                  </div>

                  <div className="sortbyset">
                    <span className="sortbytitle">Sport</span>
                    <div className="sorting-select">
                      <select
                        className="form-select"
                        onChange={(e) => setSelectedSport(e.target.value)}
                        // value={sport}
                        defaultValue={sport}
                      >
                        <option value={"sport A"}>Sport A</option>
                        <option value={"sport B"}>Sport B</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
