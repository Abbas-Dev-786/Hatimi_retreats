import { useState, useEffect } from "react";
import { Calendar } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { setHours, setMinutes } from "date-fns";
import DatePicker from "react-datepicker";
import SelectGuests from "./SelectGuests";
import { setFormData } from "../../../state/slices/checkoutSlice";

import "react-datepicker/dist/react-datepicker.css";

const BookingForm = () => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [guests, setGuests] = useState(5);

  const { courtData } = useSelector((state) => state.checkout);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setFormData({
        startTime: String(startDate),
        endTime: String(endDate),
        guests,
      })
    );
  }, [startDate, endDate, guests, dispatch]);

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
            minTime={setHours(
              setMinutes(
                new Date(),
                new Date(courtData?.openingTime).getMinutes()
              ),
              new Date(courtData?.openingTime).getHours()
            )}
            maxTime={setHours(
              setMinutes(
                new Date(),
                new Date(courtData?.closingTime).getMinutes()
              ),
              new Date(courtData?.closingTime).getHours()
            )}
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
              setMinutes(new Date(), new Date(startDate).getMinutes()),
              new Date(startDate).getHours() + 1
            )}
            maxTime={setHours(
              setMinutes(
                new Date(),
                new Date(courtData?.closingTime).getMinutes()
              ),
              new Date(courtData?.closingTime).getHours()
            )}
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

      <SelectGuests set={setGuests} />
    </form>
  );
};

export default BookingForm;
