import { useEffect, useState } from "react";
import moment from "moment";
import DatePicker from "react-datepicker";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import SelectGuests from "./SelectGuests";
import { getAvailableSlots } from "../../../state/api";
import { setFormData } from "../../../state/slices/checkoutSlice";

import "react-datepicker/dist/react-datepicker.css";
import "./slots.css";

const BookingSlots = () => {
  const [date, setDate] = useState();
  const [selectedSlot, setSelectedSlot] = useState();
  const [guests, setGuests] = useState(5);

  const { propertyId } = useParams();
  const { data } = useQuery({
    queryKey: ["slots", propertyId, date],
    queryFn: getAvailableSlots,
    enabled: Boolean(date),
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setFormData({ date: String(date), ...selectedSlot, guests }));
  }, [date, selectedSlot, guests, dispatch]);

  return (
    <form>
      <div className="mb-5 mt-4">
        <label htmlFor="date" className="form-label">
          <b>From</b>
        </label>
        <div className="form-icon customDatePickerWidth">
          <DatePicker
            className="form-control timepicker w-100"
            placeholderText="Enter Date"
            selected={date}
            minDate={new Date()}
            dateFormat="MMMM d, yyyy"
            onChange={(newDate) => setDate(newDate)}
            withPortal
            fixedHeight
          />
        </div>
      </div>

      <p>
        <b>Select Your Slot</b>
      </p>
      {!date ? (
        <h6 className="text-center">
          Please Select a Date to view Available Slots
        </h6>
      ) : (
        <div className="app-check">
          {data?.map((item, i) => (
            <div
              className={`app-border ${item.isBooked ? "disabled-slot" : ""} ${
                i === selectedSlot?.i ? "selected-slot" : ""
              }`}
              key={i}
              onClick={() => {
                !item.isBooked && setSelectedSlot({ ...item, i });
              }}
            >
              <label className="app-label">
                {moment(item.startTime).format("hh:mm A")} -{" "}
                {moment(item.endTime).format("hh:mm A")}
              </label>
            </div>
          ))}
        </div>
      )}

      <SelectGuests set={setGuests} />
    </form>
  );
};

export default BookingSlots;
