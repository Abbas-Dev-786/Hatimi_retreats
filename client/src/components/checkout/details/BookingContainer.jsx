import { useState } from "react";
import BookingForm from "./BookingForm";
import BookingSlots from "./BookingSlots";
import OptionsContainer from "./OptionsContainer";

const BookingContainer = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="card booking-form">
      <h3 className="border-bottom">Booking Form</h3>
      <OptionsContainer active={active} setActive={setActive} />
      {active === 0 && <BookingSlots />}
      {active === 1 && <BookingForm />}
    </section>
  );
};

export default BookingContainer;
