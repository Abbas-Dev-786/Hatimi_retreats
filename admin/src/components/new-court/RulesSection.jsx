import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { getAllRules } from "../../state/api";
import { setNewCourtData } from "../../state/slices/courtSlice";

const animatedComponents = makeAnimated();

const textCapitalise = (text) => {
  return text
    .split(" ")
    .map((w) => w[0].toUpperCase() + w.slice(1, w.length))
    .join(" ");
};

const RulesSection = () => {
  const [rules, setRules] = useState("");
  const dispatch = useDispatch();

  const { data } = useQuery({
    queryKey: ["rules"],
    queryFn: getAllRules,
  });

  useEffect(() => {
    const data = {
      rules: rules?.value,
    };

    dispatch(setNewCourtData(data));
  }, [rules, dispatch]);

  return (
    <div className="accordion-item mb-4" id="rules">
      <h4 className="accordion-header" id="panelsStayOpen-rules">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#panelsStayOpen-collapseSix"
          aria-expanded="false"
          aria-controls="panelsStayOpen-collapseSix"
        >
          Venue Rules <span className="text-danger">*</span>
        </button>
      </h4>
      <div
        id="panelsStayOpen-collapseSix"
        className="accordion-collapse collapse show"
        aria-labelledby="panelsStayOpen-rules"
      >
        <div className="accordion-body">
          <div className="row">
            <div className="col-12">
              <div className="input-space">
                <Select
                  defaultValue={data?.[0]?.text || ""}
                  name="colors"
                  components={animatedComponents}
                  options={
                    data?.map((item) => ({
                      label: textCapitalise(item.text),
                      value: item._id,
                    })) || []
                  }
                  className="basic-multi-select"
                  placeholder="Select Rule"
                  classNamePrefix="select"
                  value={rules}
                  onChange={(e) => setRules(e)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RulesSection;
