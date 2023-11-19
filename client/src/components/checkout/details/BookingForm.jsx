import { useState } from "react";
import { Calendar } from "react-feather";
import { setHours, setMinutes } from "date-fns";
import DatePicker from "react-datepicker";

import SelectGuests from "./SelectGuests";

import "react-datepicker/dist/react-datepicker.css";

const BookingForm = () => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  return (
    <form>
      <div className="mb-3"></div>
      <div className="mb-3">
        <label htmlFor="start-time" className="form-label">
          Start Date and Time
        </label>
        <div className="form-icon customDatePickerWidth">
          <DatePicker
            className="form-control timepicker w-100"
            placeholderText="Enter Date"
            selected={startDate}
            minDate={new Date()}
            dateFormat="MMMM d, yyyy h:mm aa"
            onChange={(newDate) => setStartDate(newDate)}
            timeFormat="HH:mm"
            minTime={setHours(setMinutes(new Date(), 0), 9)}
            maxTime={setHours(setMinutes(new Date(), 0), 12)}
            timeIntervals={60}
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
      <div className="mb-3">
        <label htmlFor="end-time" className="form-label">
          End Date and Time
        </label>
        <div className="form-icon customDatePickerWidth">
          <DatePicker
            className="form-control timepicker w-100"
            placeholderText="Enter Date"
            selected={endDate}
            minDate={new Date(startDate)}
            maxDate={new Date(startDate)}
            dateFormat="MMMM d, yyyy h:mm aa"
            onChange={(newDate) => setEndDate(newDate)}
            timeFormat="HH:mm"
            minTime={setHours(
              setMinutes(new Date(), 0),
              new Date(startDate).getHours() + 1
            )}
            maxTime={setHours(setMinutes(new Date(), 0), 12)}
            timeIntervals={60}
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

      <SelectGuests />
    </form>
  );
};

export default BookingForm;
