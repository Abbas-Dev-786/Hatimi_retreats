import { X } from "react-feather";
import { useSelector } from "react-redux";
import { IMAGE_URL } from "../../constants";
import moment from "moment";
import { useMemo } from "react";

const BookingModal = () => {
  const { bookingData = {} } = useSelector((state) => state.booking);

  const totalHours = useMemo(() => {
    const endTime = moment(bookingData?.endTime);
    const startTime = moment(bookingData?.startTime);
    const duration = moment.duration(endTime.diff(startTime));
    const hours = duration.asHours();

    return hours;
  }, [bookingData]);

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
                <span className="badge bg-info ms-2 text-capitalize">
                  {bookingData?.status}
                </span>
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
                              src={`${IMAGE_URL}/${bookingData?.court?.coverImage}`}
                              alt="Booking"
                            />
                          </div>
                          <div className="appointment-content">
                            <h6>{bookingData?.court?.name}</h6>
                            <p className="color-green">
                              {bookingData?.court?.address}
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <h6>Booked On</h6>
                        <p>
                          {moment(bookingData?.createdAt).format(
                            "DD MMMM YYYY"
                          )}
                        </p>
                      </li>
                      <li>
                        <h6>Price Per Hour</h6>
                        <p>₹{bookingData?.court?.chargePerHour}</p>
                      </li>
                      <li>
                        <h6>Maximum Number of Guests</h6>
                        <p>{bookingData?.court?.maxCapacity}</p>
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
                        <p>
                          {moment(bookingData?.createdAt).format(
                            "DD MMMM YYYY"
                          )}
                        </p>
                      </li>
                      <li>
                        <h6>Date & Time</h6>
                        <p>
                          {moment(bookingData?.startTime).format("DD MMM YYYY")}{" "}
                          <br />
                          {moment(bookingData?.startTime).format(
                            "hh:mm A"
                          )}- {moment(bookingData?.endTime).format("hh:mm A")}
                        </p>
                      </li>
                      <li>
                        <h6>Total Number of Hours</h6>
                        <p>{totalHours}</p>
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
                        <p>₹{bookingData?.price}</p>
                      </li>
                      <li>
                        <h6>Additional Guests</h6>
                        <p>
                          {bookingData?.totalGuests >
                          bookingData?.court?.maxCapacity
                            ? bookingData?.totalGuests -
                              bookingData?.court?.maxCapacity
                            : 0}
                        </p>
                      </li>
                      <li>
                        <h6>Amount Additional To Each Guest</h6>
                        <p>₹{bookingData?.court?.extraMemberCharge}</p>
                      </li>
                    </ul>
                  </div>
                  {/* <div className="appointment-info appoin-border">
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
                  </div> */}
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
