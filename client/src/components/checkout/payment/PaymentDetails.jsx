import StatusModal from "./StatusModal";

const PaymentDetails = () => {
  return (
    <div className="col-12 col-sm-12 col-md-12 col-lg-5">
      <aside className="card payment-modes">
        <h3 className="border-bottom">Checkout</h3>
        <ul className="order-sub-total">
          <li>
            <p>Sub total</p>
            <h6>₹250</h6>
          </li>
          <li>
            <p>Additional Guest</p>
            <h6>₹25</h6>
          </li>
        </ul>
        <div className="order-total d-flex justify-content-between align-items-center">
          <h5>Order Total</h5>
          <h5>₹450</h5>
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
            data-bs-toggle="modal"
            data-bs-target="#bookingconfirmModal"
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
