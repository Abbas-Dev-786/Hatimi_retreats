import { useState } from "react";
import moment from "moment";
import DatePicker from "react-datepicker";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import SelectGuests from "./SelectGuests";
import { getAvailableSlots } from "../../../state/api";

import "react-datepicker/dist/react-datepicker.css";
import "./slots.css";

// const data2 = [
//   { startTime: "10:00AM", endTime: "11:00AM", isBooked: false },
//   { startTime: "11:00AM", endTime: "12:00AM", isBooked: false },
//   { startTime: "12:00PM", endTime: "01:00PM", isBooked: false },
//   { startTime: "01:00PM", endTime: "02:00PM", isBooked: true },
//   { startTime: "02:00PM", endTime: "03:00PM", isBooked: false },
//   { startTime: "03:00PM", endTime: "04:00PM", isBooked: false },
//   { startTime: "04:00PM", endTime: "05:00PM", isBooked: true },
//   { startTime: "05:00PM", endTime: "06:00PM", isBooked: false },
// ];

const BookingSlots = () => {
  const [date, setDate] = useState();
  const [selectedSlot, setSelectedSlot] = useState();

  const { propertyId } = useParams();
  const { data } = useQuery({
    queryKey: ["slots", propertyId, date],
    queryFn: getAvailableSlots,
  });

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

      <SelectGuests />
    </form>
  );
};

export default BookingSlots;
