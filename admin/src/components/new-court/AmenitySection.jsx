import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { getAllAmenities } from "../../state/api";
import { setNewCourtData } from "../../state/slices/courtSlice";

const animatedComponents = makeAnimated();

const textCapitalise = (text) => {
  return text
    .split(" ")
    .map((w) => w[0].toUpperCase() + w.slice(1, w.length))
    .join(" ");
};

const AmenitySection = () => {
  const [amenities, setAmenities] = useState([]);
  const dispatch = useDispatch();

  const { data } = useQuery({
    queryKey: ["amenities"],
    queryFn: getAllAmenities,
  });

  useEffect(() => {
    const data = {
      amenities: amenities?.map((amenity) => amenity?.value),
    };

    dispatch(setNewCourtData(data));
  }, [amenities, dispatch]);

  return (
    <div className="accordion-item mb-4" id="amenities">
      <h4 className="accordion-header" id="panelsStayOpen-amenities">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#panelsStayOpen-collapseSeven"
          aria-expanded="false"
          aria-controls="panelsStayOpen-collapseSeven"
        >
          Amenities <span className="text-danger">*</span>
        </button>
      </h4>
      <div
        id="panelsStayOpen-collapseSeven"
        className="accordion-collapse collapse show"
        aria-labelledby="panelsStayOpen-amenities"
      >
        <div className="accordion-body">
          <div className="row">
            <div className="col-12">
              <div className="input-space">
                <Select
                  defaultValue={data?.[0]?.name || ""}
                  isMulti
                  name="colors"
                  components={animatedComponents}
                  options={
                    data?.map((item) => ({
                      label: textCapitalise(item.name),
                      value: item._id,
                    })) || []
                  }
                  className="basic-multi-select"
                  placeholder="Select Amenities"
                  classNamePrefix="select"
                  value={amenities}
                  onChange={(e) => setAmenities(e)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmenitySection;
