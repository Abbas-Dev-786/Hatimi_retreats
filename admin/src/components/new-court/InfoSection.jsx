import { useEffect, useState } from "react";
import { setHours, setMinutes } from "date-fns";
import CreatableSelect from "react-select/creatable";
import { useDispatch } from "react-redux";
import makeAnimated from "react-select/animated";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Calendar } from "react-feather";
import { setNewCourtData } from "../../state/slices/courtSlice";

const animatedComponents = makeAnimated();

const typeOptions = [
  { value: "box cricket", label: "Box Cricket" },
  { value: "badminton", label: "Badminton" },
  { value: "table tennis", label: "Table Tennis" },
];

const customStyles = {
  valueContainer: (base) => ({
    ...base,
    maxHeight: 20,
    lineHeight: 1.5,
  }),
  multiValue: (base, state) => {
    return state.data.isFixed ? { ...base, backgroundColor: "gray" } : base;
  },
  multiValueLabel: (base, state) => {
    return state.data.isFixed
      ? { ...base, fontWeight: "bold", color: "white", paddingRight: 6 }
      : base;
  },
  multiValueRemove: (base, state) => {
    return state.data.isFixed ? { ...base, display: "none" } : base;
  },
};

const InfoSection = () => {
  const [name, setName] = useState("");
  const [size, setSize] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [openingTime, setOpeningTime] = useState();
  const [closingTime, setClosingTime] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    const data = {
      name,
      size,
      description,
      openingTime: String(openingTime),
      closingTime: String(closingTime),
      type: type?.value?.toLowerCase(),
    };

    dispatch(setNewCourtData(data));
  }, [name, size, type, description, openingTime, closingTime, dispatch]);

  return (
    <div className="accordion-item mb-4" id="basic-info">
      <h4 className="accordion-header" id="panelsStayOpen-basic-info">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#panelsStayOpen-collapseOne"
          aria-expanded="true"
          aria-controls="panelsStayOpen-collapseOne"
        >
          Basic Info
        </button>
      </h4>
      <div
        id="panelsStayOpen-collapseOne"
        className="accordion-collapse collapse show"
        aria-labelledby="panelsStayOpen-basic-info"
      >
        <div className="accordion-body">
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <div className="input-space mb-0">
                <label htmlFor="court-name" className="form-label">
                  Court Name <span>*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="court-name"
                  placeholder="Enter Court Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="input-space mb-0">
                <label htmlFor="court-name" className="form-label">
                  Court Size <span>*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="court-name"
                  placeholder="Enter Court Size"
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="input-space mb-0">
                <label className="form-label">
                  Court Type <span>*</span>
                </label>
                <CreatableSelect
                  components={animatedComponents}
                  styles={customStyles}
                  classNamePrefix="select"
                  placeholder="Select Type"
                  options={typeOptions}
                  value={type}
                  onChange={(e) => setType(e)}
                />
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-6 col-md-6">
              <div className="input-space mb-0">
                <label htmlFor="court-name" className="form-label">
                  Opening Time <span>*</span>
                </label>
                <div className="form-icon customDatePickerWidth">
                  <DatePicker
                    className="form-control timepicker w-100"
                    placeholderText="Enter Date"
                    selected={openingTime}
                    onChange={(newDate) => setOpeningTime(newDate)}
                    dateFormat="h:mm aa"
                    timeFormat="HH:mm"
                    showTimeSelectOnly
                    minTime={setHours(setMinutes(new Date(), 0), 5)}
                    maxTime={setHours(setMinutes(new Date(), 0), 24)}
                    timeIntervals={30}
                    showTimeSelect
                    withPortal
                    fixedHeight
                  />
                  <span className="cus-icon">
                    <i className="icon-date">
                      <Calendar size={"15px"} />
                    </i>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="input-space mb-0">
                <label className="form-label">
                  Closing Time <span>*</span>
                </label>

                <div className="form-icon customDatePickerWidth">
                  <DatePicker
                    className="form-control timepicker w-100"
                    placeholderText="Enter Date"
                    dateFormat="h:mm aa"
                    selected={closingTime}
                    onChange={(newDate) => setClosingTime(newDate)}
                    timeFormat="HH:mm"
                    minTime={setHours(
                      setMinutes(
                        new Date(),
                        new Date(openingTime).getMinutes()
                      ),
                      new Date(openingTime).getHours() + 1
                    )}
                    maxTime={setHours(setMinutes(new Date(), 0), 24)}
                    timeIntervals={30}
                    showTimeSelect
                    showTimeSelectOnly
                    withPortal
                    fixedHeight
                  />
                  <span className="cus-icon">
                    <i className="icon-date">
                      <Calendar size={"15px"} />
                    </i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-12">
              <div>
                <label htmlFor="name" className="form-label">
                  Overview of Venue <span>*</span>
                </label>
                <textarea
                  className="form-control"
                  id="venue-overview"
                  rows="9"
                  placeholder="Enter Overview"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
