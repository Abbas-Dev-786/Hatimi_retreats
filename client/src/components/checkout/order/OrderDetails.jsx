import moment from "moment";
import { useMemo } from "react";
import { useSelector } from "react-redux";

const OrderDetails = () => {
  const { courtData, bookingData, additionalGuests } = useSelector(
    (state) => state.checkout
  );

  const totalHours = useMemo(() => {
    const startTime = moment(new Date(bookingData?.startTime));
    const endTime = moment(new Date(bookingData?.endTime));
    const duration = moment.duration(endTime.diff(startTime));
    const hours = duration.asHours();

    // const hours = endTime.diff(startTime, "hours");

    return hours;
  }, [bookingData]);

  const totalCharge = useMemo(
    () =>
      (courtData?.chargePerHour +
        additionalGuests * courtData?.extraMemberCharge) *
      totalHours,
    [courtData, additionalGuests, totalHours]
  );

  return (
    <section className="card booking-order-confirmation">
      <h5 className="mb-3">Booking Details</h5>
      <ul className="booking-info d-lg-flex justify-content-between align-items-center">
        <li>
          <h6 className="text-capitalize">{courtData?.name}</h6>
          <p className="text-capitalize">{courtData?.type}</p>
        </li>
        <li>
          <h6>Booking Date</h6>
          <p>
            {moment(
              new Date(
                bookingData?.date ? bookingData?.date : bookingData?.startTime
              )
            ).format("DD MMMM YYYY")}
          </p>
        </li>
        <li>
          <h6>Booking Start time</h6>
          <p>{moment(new Date(bookingData?.startTime)).format("hh:mm A")}</p>
        </li>
        <li>
          <h6>Booking End time</h6>
          <p>{moment(new Date(bookingData?.endTime)).format("hh:mm A")}</p>
        </li>
        <li>
          <h6>Total Guests</h6>
          <p>{bookingData?.guests}</p>
        </li>
        <li>
          <h6>Additional Guests</h6>
          <p>{additionalGuests}</p>
        </li>
      </ul>
      <h5 className="mb-3">Payment Information</h5>
      <ul className="payment-info d-lg-flex justify-content-start align-items-center">
        <li>
          <h6>Cage Total</h6>
          <p className="primary-text">
            (₹{courtData?.chargePerHour} * {totalHours} hours)
          </p>
        </li>
        <li>
          <h6>Additional Guest total</h6>
          <p className="primary-text">
            ({additionalGuests} * ₹{courtData?.extraMemberCharge})
          </p>
        </li>
        <li>
          <h6>Subtotal</h6>
          <p className="primary-text">₹ {totalCharge}</p>
        </li>
      </ul>
    </section>
  );
};

export default OrderDetails;
