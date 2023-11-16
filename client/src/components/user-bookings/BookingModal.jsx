import { X } from "react-feather";

const BookingModal = () => {
  return (
    <div
      className="modal custom-modal fade request-modal"
      id="upcoming-court"
      role="dialog"
    >
      <div className="modal-dialog modal-dialog-centered modal-md">
        <div className="modal-content">
          <div className="modal-header">
            <div className="form-header modal-header-title">
              <h4 className="mb-0">
                Court Booking Details
                <span className="badge bg-info ms-2">Upcoming</span>
              </h4>
            </div>
            <a className="close" data-bs-dismiss="modal" aria-label="Close">
              <span className="align-center" aria-hidden="true">
                <i>
                  <X size={"15px"} />
                </i>
              </span>
            </a>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-lg-12">
                <div className="card dashboard-card court-information">
                  <div className="card-header">
                    <h4>Court Information</h4>
                  </div>
                  <div className="appointment-info">
                    <ul className="appointmentset">
                      <li>
                        <div className="appointment-item">
                          <div className="appointment-img">
                            <img
                              src="/img/booking/booking-03.jpg"
                              alt="Booking"
                            />
                          </div>
                          <div className="appointment-content">
                            <h6>Wing Sports Academy</h6>
                            <p className="color-green">Court 1</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <h6>Booked On</h6>
                        <p>₹150 Upto 2 guests</p>
                      </li>
                      <li>
                        <h6>Price Per Guest</h6>
                        <p>₹15</p>
                      </li>
                      <li>
                        <h6>Maximum Number of Guests</h6>
                        <p>2</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card dashboard-card court-information">
                  <div className="card-header">
                    <h4>Booking Information</h4>
                  </div>
                  <div className="appointment-info appoin-border">
                    <ul className="appointmentset">
                      <li>
                        <h6>Booked On</h6>
                        <p>Mon, Jul 14</p>
                      </li>
                      <li>
                        <h6>Date & Time</h6>
                        <p>Mon, Jul 14</p>
                        <p>05:00 PM - 08:00 PM</p>
                      </li>
                      <li>
                        <h6>Total Number of Hours</h6>
                        <p>2</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card dashboard-card court-information">
                  <div className="card-header">
                    <h4>Payment Details</h4>
                  </div>
                  <div className="appointment-info appoin-border double-row">
                    <ul className="appointmentset">
                      <li>
                        <h6>Court Booking Amount</h6>
                        <p>₹150</p>
                      </li>
                      <li>
                        <h6>Additional Guests</h6>
                        <p>2</p>
                      </li>
                      <li>
                        <h6>Amount Additional Guests</h6>
                        <p>₹30</p>
                      </li>
                      <li>
                        <h6>Service Charge</h6>
                        <p>₹20</p>
                      </li>
                    </ul>
                  </div>
                  <div className="appointment-info appoin-border">
                    <ul className="appointmentsetview">
                      <li>
                        <h6>Total Amount Paid</h6>
                        <p className="color-green">₹180</p>
                      </li>
                      <li>
                        <h6>Paid On</h6>
                        <p>Mon, Jul 14</p>
                      </li>
                      <li>
                        <h6>Transaction ID</h6>
                        <p>#5464164445676781641</p>
                      </li>
                      <li>
                        <h6>Payment type</h6>
                        <p>Wallet</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <div className="table-accept-btn">
              <a data-bs-dismiss="modal" className="btn cancel-table-btn">
                Cancel
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
