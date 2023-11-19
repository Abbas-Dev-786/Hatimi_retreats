import BookingDetails from "./BookingDetails";
import DetailSection from "./DetailSection";
import PaymentDetails from "./PaymentDetails";

const PaymentContainer = () => {
  return (
    <>
      <DetailSection />
      <div className="row checkout">
        <BookingDetails />
        <PaymentDetails />
      </div>
    </>
  );
};

export default PaymentContainer;
