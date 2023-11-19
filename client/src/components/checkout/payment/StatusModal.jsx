import { useNavigate } from "react-router-dom";

const StatusModal = () => {
  const navigate = useNavigate();

  return (
    <div
      className="modal fade"
      id="bookingconfirmModal"
      tabIndex="-1"
      aria-labelledby="bookingconfirmModal"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header text-center d-inline-block">
            <img src="/img/icons/booking-confirmed.svg" alt="User" />
          </div>
          <div className="modal-body text-center">
            <h3 className="mb-3">Your Booking request has been made</h3>
            <p>Check on your booking dashboard panel for confirmation</p>
          </div>
          <div className="modal-footer text-center d-inline-block">
            <a
              to="/bookings"
              className="btn btn-primary"
              id="closemodal"
              data-bs-dismiss="modal"
              onClick={() => navigate("/bookings")}
            >
              <i className="feather-arrow-left-circle me-1"></i>Back to
              Dashboard
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusModal;
