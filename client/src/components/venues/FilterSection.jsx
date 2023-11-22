import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getCities, getSports } from "../../state/api";

const FilterSection = () => {
  const { totalCounts } = useSelector((state) => state.court);
  const [searchParams, setSearchParams] = useSearchParams();
  const { city, sport } = Object.fromEntries([...searchParams]);

  const [selectedCity, setSelectedCity] = useState(city || "");
  const [selectedSport, setSelectedSport] = useState(sport || "");

  const { data: cityData } = useQuery({
    queryKey: ["cities"],
    queryFn: getCities,
  });

  const { data: sportsData } = useQuery({
    queryKey: ["sports", selectedCity],
    queryFn: getSports,
    enabled: Boolean(selectedCity) || Boolean(city),
  });

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
                    <span>{totalCounts}</span> venues are listed
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
                        {cityData?.map((city, i) => (
                          <option
                            key={i}
                            value={city._id}
                            className="text-capitalize"
                          >
                            {city._id}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="sortbyset">
                    <span className="sortbytitle">Sport</span>
                    <div className="sorting-select">
                      <select
                        className="form-select text-capitalize"
                        onChange={(e) => setSelectedSport(e.target.value)}
                        value={sport}
                      >
                        {sportsData?.map((sport, i) => (
                          <option
                            key={i}
                            value={sport._id}
                            className="text-capitalize"
                          >
                            {sport._id}
                          </option>
                        ))}
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
