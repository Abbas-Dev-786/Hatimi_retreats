import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getCities, getSports } from "../../state/api";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

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
      setSearchParams({
        city: selectedCity?.toLowerCase(),
        sport: selectedSport?.toLowerCase(0),
      });
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
                    <div className="form-group mb-0">
                      <Dropdown
                        options={cityData?.map((obj) => obj._id) || []}
                        placeholder="Search for City"
                        onChange={(e) => setSelectedCity(e.value)}
                        className="text-capitalize"
                        value={city}
                      />
                    </div>
                  </div>

                  <div className="sortbyset">
                    <span className="sortbytitle">Sport</span>
                    <div className="form-group mb-0">
                      <Dropdown
                        options={sportsData?.map((obj) => obj._id) || []}
                        placeholder="Search for Sports"
                        onChange={(e) => setSelectedSport(e.value)}
                        value={sport}
                        className="text-capitalize w-100"
                      />
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
