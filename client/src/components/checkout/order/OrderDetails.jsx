const OrderDetails = () => {
  return (
    <section className="card booking-order-confirmation">
      <h5 className="mb-3">Booking Details</h5>
      <ul className="booking-info d-lg-flex justify-content-between align-items-center">
        <li>
          <h6>Court Name</h6>
          <p>Standard Synthetic Court 1</p>
        </li>
        <li>
          <h6>Booking Date</h6>
          <p>Mon, Jul 11</p>
        </li>
        <li>
          <h6>Booking Start time</h6>
          <p>05:25 AM</p>
        </li>
        <li>
          <h6>Booking End time</h6>
          <p>06:25 AM</p>
        </li>
        <li>
          <h6>Total Guests</h6>
          <p>15</p>
        </li>
        <li>
          <h6>Additional Guests</h6>
          <p>5</p>
        </li>
      </ul>
      <h5 className="mb-3">Payment Information</h5>
      <ul className="payment-info d-lg-flex justify-content-start align-items-center">
        <li>
          <h6>Cage Total</h6>
          <p className="primary-text">(₹250 * 2 hours)</p>
        </li>
        <li>
          <h6>Additional Guest total</h6>
          <p className="primary-text">(4 * ₹10)</p>
        </li>
        <li>
          <h6>Subtotal</h6>
          <p className="primary-text">₹300.00</p>
        </li>
      </ul>
    </section>
  );
};

export default OrderDetails;
