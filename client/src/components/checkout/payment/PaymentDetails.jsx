import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import moment from "moment";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import StatusModal from "./StatusModal";
import { createNewBooking } from "../../../state/api";

const PaymentDetails = () => {
  const navigate = useNavigate();
  const { courtData, bookingData, additionalGuests, totalGuests } = useSelector(
    (state) => state.checkout
  );

  const totalHours = useMemo(() => {
    const endTime = moment(new Date(bookingData?.endTime));
    const startTime = moment(new Date(bookingData?.startTime));
    const duration = moment.duration(endTime.diff(startTime));
    const hours = duration.asHours();

    return hours;
  }, [bookingData]);

  const totalCharge = useMemo(
    () =>
      (courtData?.chargePerHour +
        additionalGuests * courtData?.extraMemberCharge) *
      totalHours,
    [courtData, additionalGuests, totalHours]
  );

  const { mutate } = useMutation({
    mutationFn: createNewBooking,
    onError: (err) => {
      toast.error(err.message);
    },
    onSuccess: () => {
      toast.success("Booking Request Successfully send!");
      navigate("/bookings");
    },
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();

    mutate({
      ...bookingData,
      id: courtData?._id,
      price: totalCharge,
      totalGuests,
    });
  };

  return (
    <div className="col-12 col-sm-12 col-md-12 col-lg-5">
      <aside className="card payment-modes">
        <h3 className="border-bottom">Checkout</h3>
        <ul className="order-sub-total">
          <li>
            <p>Sub total</p>
            <h6>₹{courtData?.chargePerHour}</h6>
          </li>
          <li>
            <p>Additional Guest</p>
            <h6>
              ₹{courtData?.extraMemberCharge * +additionalGuests * totalHours}
            </h6>
          </li>
        </ul>
        <div className="order-total d-flex justify-content-between align-items-center">
          <h5>Order Total</h5>
          <h5>₹{totalCharge}</h5>
        </div>
        <div className="form-check d-flex justify-content-start align-items-center policy">
          <div className="d-inline-block">
            <input
              className="form-check-input"
              type="checkbox"
              value
              id="policy"
            />
          </div>
          <label className="form-check-label" htmlFor="policy">
            By clicking <b>Send Request</b>, I agree to Hatimi Retreats &nbsp;
            <u>Privacy Policy</u> and &nbsp;
            <u>Terms of Use</u>
          </label>
        </div>
        <div className="d-grid btn-block">
          <button
            type="button"
            className="btn btn-primary"
            // data-bs-toggle={isSuccess ? "modal" : ""}
            // data-bs-target={isSuccess ? "#bookingconfirmModal" : ""}
            onClick={handleFormSubmit}
          >
            Send Request
          </button>
        </div>
      </aside>

      <StatusModal />
    </div>
  );
};

export default PaymentDetails;
