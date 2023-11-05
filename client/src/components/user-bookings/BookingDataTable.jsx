import { Eye } from "react-feather";

const BookingDataTable = () => {
  return (
    <div className="row">
      <div className="col-sm-12">
        <div className="court-tab-content">
          <div className="card card-tableset">
            <div className="card-body">
              <div className="coache-head-blk">
                <div className="row align-items-center">
                  <div className="col-md-5">
                    <div className="court-table-head">
                      <h4>My Bookings</h4>
                      <p>Manage and track all your upcoming court bookings.</p>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="table-search-top">
                      <div id="tablefilter"></div>
                      <div className="request-coach-list">
                        <div className="card-header-btns">
                          <nav>
                            <div className="nav nav-tabs" role="tablist">
                              <button
                                className="nav-link active"
                                id="nav-Recent-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#nav-Recent"
                                type="button"
                                role="tab"
                                aria-controls="nav-Recent"
                                aria-selected="true"
                              >
                                Courts
                              </button>
                            </div>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-content">
                <div
                  className="tab-pane fade show active"
                  id="nav-Recent"
                  role="tabpanel"
                  aria-labelledby="nav-Recent-tab"
                  tabIndex="0"
                >
                  <div className="table-responsive table-datatble">
                    <table className="table datatable">
                      <thead className="thead-light">
                        <tr>
                          <th>Court Name</th>
                          <th>Date & Time</th>
                          <th>Payment</th>
                          <th>Status</th>
                          <th>Details</th>

                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <a
                                href="#"
                                className="avatar avatar-sm flex-shrink-0"
                              >
                                <img
                                  className="avatar-img"
                                  src="/img/booking/booking-01.jpg"
                                  alt="User"
                                />
                              </a>
                              <span className="table-head-name flex-grow-1">
                                <a
                                  href="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#profile-court"
                                >
                                  Leap Sports Academy
                                </a>
                                <span>Court 1 </span>
                              </span>
                            </h2>
                          </td>
                          <td className="table-date-time">
                            <h4>
                              Mon, Jul 11<span>06:00 PM - 08:00 PM</span>
                            </h4>
                          </td>
                          <td>
                            <span className="pay-dark fs-16">₹120</span>
                          </td>
                          <td>
                            <span className="badge bg-success">
                              <i className="feather-check-square me-1"></i>
                              Accepted
                            </span>
                          </td>
                          <td className="text-pink view-detail-pink">
                            <a
                              href="javascript:;"
                              data-bs-toggle="modal"
                              data-bs-target="#upcoming-court"
                            >
                              <i>
                                <Eye size={"15px"} />
                              </i>
                              View Details
                            </a>
                          </td>

                          <td className="text-end">
                            <div className="dropdown dropdown-action table-drop-action">
                              <a
                                href="#"
                                className="action-icon dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="fas fa-ellipsis-h"></i>
                              </a>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a
                                  className="dropdown-item"
                                  href="javascript:void(0);"
                                  data-bs-toggle="modal"
                                  data-bs-target="#cancel-court"
                                >
                                  <i className="feather-corner-down-left"></i>
                                  Cancel Booking
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="javascript:void(0);"
                                >
                                  <i className="feather-edit"></i>Edit
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="javascript:void(0);"
                                >
                                  <i className="feather-trash"></i>Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <a
                                href="#"
                                className="avatar avatar-sm flex-shrink-0"
                              >
                                <img
                                  className="avatar-img"
                                  src="/img/booking/booking-02.jpg"
                                  alt="User"
                                />
                              </a>
                              <span className="table-head-name flex-grow-1">
                                <a
                                  href="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#profile-court"
                                >
                                  Feather Badminton
                                </a>
                                <span>Court 1 </span>
                              </span>
                            </h2>
                          </td>
                          <td className="table-date-time">
                            <h4>
                              Mon, Jul 12<span>02:00 PM - 05:00 PM</span>
                            </h4>
                          </td>
                          <td>
                            <span className="pay-dark fs-16">₹90</span>
                          </td>
                          <td>
                            <span className="badge bg-info">
                              <i className="feather-clock me-1"></i>Awaiting
                            </span>
                          </td>
                          <td className="text-pink view-detail-pink">
                            <a
                              href="javascript:;"
                              data-bs-toggle="modal"
                              data-bs-target="#upcoming-court"
                            >
                              <i>
                                <Eye size={"15px"} />
                              </i>
                              View Details
                            </a>
                          </td>

                          <td className="text-end">
                            <div className="dropdown dropdown-action table-drop-action">
                              <a
                                href="#"
                                className="action-icon dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="fas fa-ellipsis-h"></i>
                              </a>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a
                                  className="dropdown-item"
                                  href="javascript:void(0);"
                                  data-bs-toggle="modal"
                                  data-bs-target="#cancel-court"
                                >
                                  <i className="feather-corner-down-left"></i>
                                  Cancel Booking
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="javascript:void(0);"
                                >
                                  <i className="feather-edit"></i>Edit
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="javascript:void(0);"
                                >
                                  <i className="feather-trash"></i>Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <a
                                href="#"
                                className="avatar avatar-sm flex-shrink-0"
                              >
                                <img
                                  className="avatar-img"
                                  src="/img/booking/booking-03.jpg"
                                  alt="User"
                                />
                              </a>
                              <span className="table-head-name flex-grow-1">
                                <a
                                  href="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#profile-court"
                                >
                                  Bwing Sports Academy
                                </a>
                                <span>Court 1 </span>
                              </span>
                            </h2>
                          </td>
                          <td className="table-date-time">
                            <h4>
                              Mon, Jul 15<span>03:00 PM - 05:00 PM</span>
                            </h4>
                          </td>
                          <td>
                            <span className="pay-dark fs-16">₹130</span>
                          </td>
                          <td>
                            <span className="badge bg-info">
                              <i className="feather-clock me-1"></i>Awaiting
                            </span>
                          </td>
                          <td className="text-pink view-detail-pink">
                            <a
                              href="javascript:;"
                              data-bs-toggle="modal"
                              data-bs-target="#upcoming-court"
                            >
                              <i>
                                <Eye size={"15px"} />
                              </i>
                              View Details
                            </a>
                          </td>

                          <td className="text-end">
                            <div className="dropdown dropdown-action table-drop-action">
                              <a
                                href="#"
                                className="action-icon dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="fas fa-ellipsis-h"></i>
                              </a>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a
                                  className="dropdown-item"
                                  href="javascript:void(0);"
                                  data-bs-toggle="modal"
                                  data-bs-target="#cancel-court"
                                >
                                  <i className="feather-corner-down-left"></i>
                                  Cancel Booking
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="javascript:void(0);"
                                >
                                  <i className="feather-edit"></i>Edit
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="javascript:void(0);"
                                >
                                  <i className="feather-trash"></i>Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <a
                                href="#"
                                className="avatar avatar-sm flex-shrink-0"
                              >
                                <img
                                  className="avatar-img"
                                  src="/img/booking/booking-04.jpg"
                                  alt="User"
                                />
                              </a>
                              <span className="table-head-name flex-grow-1">
                                <a
                                  href="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#profile-court"
                                >
                                  Marsh Academy
                                </a>
                                <span>Court 1 </span>
                              </span>
                            </h2>
                          </td>
                          <td className="table-date-time">
                            <h4>
                              Mon, Jul 16<span>05:00 PM - 07:00 PM</span>
                            </h4>
                          </td>
                          <td>
                            <span className="pay-dark fs-16">₹100</span>
                          </td>
                          <td>
                            <span className="badge bg-info">
                              <i className="feather-clock me-1"></i>Awaiting
                            </span>
                          </td>
                          <td className="text-pink view-detail-pink">
                            <a
                              href="javascript:;"
                              data-bs-toggle="modal"
                              data-bs-target="#upcoming-court"
                            >
                              <i>
                                <Eye size={"15px"} />
                              </i>
                              View Details
                            </a>
                          </td>

                          <td className="text-end">
                            <div className="dropdown dropdown-action table-drop-action">
                              <a
                                href="#"
                                className="action-icon dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="fas fa-ellipsis-h"></i>
                              </a>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a
                                  className="dropdown-item"
                                  href="javascript:void(0);"
                                  data-bs-toggle="modal"
                                  data-bs-target="#cancel-court"
                                >
                                  <i className="feather-corner-down-left"></i>
                                  Cancel Booking
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="javascript:void(0);"
                                >
                                  <i className="feather-edit"></i>Edit
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="javascript:void(0);"
                                >
                                  <i className="feather-trash"></i>Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <a
                                href="#"
                                className="avatar avatar-sm flex-shrink-0"
                              >
                                <img
                                  className="avatar-img"
                                  src="/img/booking/booking-05.jpg"
                                  alt="User"
                                />
                              </a>
                              <span className="table-head-name flex-grow-1">
                                <a
                                  href="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#profile-court"
                                >
                                  Wing Sports Academy
                                </a>
                                <span>Court 1 </span>
                              </span>
                            </h2>
                          </td>
                          <td className="table-date-time">
                            <h4>
                              Mon, Jul 16<span>05:00 PM - 08:00 PM</span>
                            </h4>
                          </td>
                          <td>
                            <span className="pay-dark fs-16">₹140</span>
                          </td>
                          <td>
                            <span className="badge bg-info">
                              <i className="feather-clock me-1"></i>Awaiting
                            </span>
                          </td>
                          <td className="text-pink view-detail-pink">
                            <a
                              href="javascript:;"
                              data-bs-toggle="modal"
                              data-bs-target="#upcoming-court"
                            >
                              <i>
                                <Eye size={"15px"} />
                              </i>
                              View Details
                            </a>
                          </td>

                          <td className="text-end">
                            <div className="dropdown dropdown-action table-drop-action">
                              <a
                                href="#"
                                className="action-icon dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="fas fa-ellipsis-h"></i>
                              </a>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a
                                  className="dropdown-item"
                                  href="javascript:void(0);"
                                  data-bs-toggle="modal"
                                  data-bs-target="#cancel-court"
                                >
                                  <i className="feather-corner-down-left"></i>
                                  Cancel Booking
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="javascript:void(0);"
                                >
                                  <i className="feather-edit"></i>Edit
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="javascript:void(0);"
                                >
                                  <i className="feather-trash"></i>Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-RecentCoaching"
                  role="tabpanel"
                  aria-labelledby="nav-RecentCoaching-tab"
                  tabIndex="0"
                >
                  <div className="table-responsive table-datatble">
                    <table className="table datatable">
                      <thead className="thead-light">
                        <tr>
                          <th>Coach Name</th>
                          <th>Booking Type</th>
                          <th>Date & Time</th>
                          <th>Payment</th>
                          <th>Status</th>
                          <th>Details</th>
                          <th>Reviews</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <a
                                href="#"
                                className="avatar avatar-sm flex-shrink-0"
                              >
                                <img
                                  className="avatar-img"
                                  src="/img/featured/featured-05.jpg"
                                  alt="User"
                                />
                              </a>
                              <span className="table-head-name flex-grow-1">
                                <a
                                  href="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#profile-coach"
                                >
                                  Kevin Anderson
                                </a>
                                <span className="book-active">
                                  Booked on : 25 May 2023
                                </span>
                              </span>
                            </h2>
                          </td>
                          <td>Onetime</td>
                          <td className="table-date-time">
                            <h4>
                              Mon, Jul 11<span>06:00 PM - 08:00 PM</span>
                            </h4>
                          </td>
                          <td>
                            <span className="pay-dark fs-16">₹120</span>
                          </td>
                          <td>
                            <span className="badge bg-success">
                              <i className="feather-check-square me-1"></i>
                              Accepted
                            </span>
                          </td>
                          <td className="text-pink view-detail-pink">
                            <a
                              href="javascript:;"
                              data-bs-toggle="modal"
                              data-bs-target="#upcoming-coach"
                            >
                              <i>
                                <Eye size={"15px"} />
                              </i>
                              View Details
                            </a>
                          </td>
                          <td className="table-rating">
                            <div className="rating-point">
                              <i className="fas fa-star filled"></i>
                              <i className="fas fa-star filled"></i>
                              <i className="fas fa-star filled"></i>
                              <i className="fas fa-star filled"></i>
                              <i className="fas fa-star filled"></i>
                            </div>
                          </td>
                          <td className="text-end">
                            <div className="dropdown dropdown-action table-drop-action">
                              <a
                                href="#"
                                className="action-icon dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="fas fa-ellipsis-h"></i>
                              </a>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a
                                  className="dropdown-item"
                                  href="javascript:void(0);"
                                >
                                  <i className="feather-edit"></i>Edit
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="javascript:void(0);"
                                >
                                  <i className="feather-trash"></i>Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <a
                                href="#"
                                className="avatar avatar-sm flex-shrink-0"
                              >
                                <img
                                  className="avatar-img"
                                  src="/img/featured/featured-06.jpg"
                                  alt="User"
                                />
                              </a>
                              <span className="table-head-name flex-grow-1">
                                <a
                                  href="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#profile-coach"
                                >
                                  Angela Roudrigez
                                </a>
                                <span className="book-active">
                                  Booked on : 26 May 2023
                                </span>
                              </span>
                            </h2>
                          </td>
                          <td>Single Lesson</td>
                          <td className="table-date-time">
                            <h4>
                              Mon, Jul 11<span>3 days</span>
                            </h4>
                          </td>
                          <td>
                            <span className="pay-dark fs-16">₹90</span>
                          </td>
                          <td>
                            <span className="badge bg-info">
                              <i className="feather-clock me-1"></i>Awaiting
                            </span>
                          </td>
                          <td className="text-pink view-detail-pink">
                            <a
                              href="javascript:;"
                              data-bs-toggle="modal"
                              data-bs-target="#upcoming-coach"
                            >
                              <i>
                                <Eye size={"15px"} />
                              </i>
                              View Details
                            </a>
                          </td>
                          <td className="table-rating">
                            <div className="rating-point">
                              <i className="fas fa-star filled"></i>
                              <i className="fas fa-star filled"></i>
                              <i className="fas fa-star filled"></i>
                              <i className="fas fa-star filled"></i>
                              <i className="fas fa-star"></i>
                            </div>
                          </td>
                          <td className="text-end">
                            <div className="dropdown dropdown-action table-drop-action">
                              <a
                                href="#"
                                className="action-icon dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="fas fa-ellipsis-h"></i>
                              </a>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a
                                  className="dropdown-item"
                                  href="javascript:void(0);"
                                >
                                  <i className="feather-edit"></i>Edit
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="javascript:void(0);"
                                >
                                  <i className="feather-trash"></i>Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <a
                                href="#"
                                className="avatar avatar-sm flex-shrink-0"
                              >
                                <img
                                  className="avatar-img"
                                  src="/img/featured/featured-07.jpg"
                                  alt="User"
                                />
                              </a>
                              <span className="table-head-name flex-grow-1">
                                <a
                                  href="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#profile-coach"
                                >
                                  Evon Raddick
                                </a>
                                <span className="book-active">
                                  Booked on : 27 May 2023
                                </span>
                              </span>
                            </h2>
                          </td>
                          <td>Single Lesson</td>
                          <td className="table-date-time">
                            <h4>
                              Mon, Jul 11<span>01:00 PM - 04:00 PM</span>
                            </h4>
                          </td>
                          <td>
                            <span className="pay-dark fs-16">₹150</span>
                          </td>
                          <td>
                            <span className="badge bg-info">
                              <i className="feather-clock me-1"></i>Awaiting
                            </span>
                          </td>
                          <td className="text-pink view-detail-pink">
                            <a
                              href="javascript:;"
                              data-bs-toggle="modal"
                              data-bs-target="#upcoming-coach"
                            >
                              <i>
                                <Eye size={"15px"} />
                              </i>
                              View Details
                            </a>
                          </td>
                          <td className="table-rating">
                            <div className="rating-point">
                              <i className="fas fa-star filled"></i>
                              <i className="fas fa-star filled"></i>
                              <i className="fas fa-star filled"></i>
                              <i className="fas fa-star filled"></i>
                              <i className="fas fa-star"></i>
                            </div>
                          </td>
                          <td className="text-end">
                            <div className="dropdown dropdown-action table-drop-action">
                              <a
                                href="#"
                                className="action-icon dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="fas fa-ellipsis-h"></i>
                              </a>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a
                                  className="dropdown-item"
                                  href="javascript:void(0);"
                                >
                                  <i className="feather-edit"></i>Edit
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="javascript:void(0);"
                                >
                                  <i className="feather-trash"></i>Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <a
                                href="#"
                                className="avatar avatar-sm flex-shrink-0"
                              >
                                <img
                                  className="avatar-img"
                                  src="/img/featured/featured-08.jpg"
                                  alt="User"
                                />
                              </a>
                              <span className="table-head-name flex-grow-1">
                                <a
                                  href="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#profile-coach"
                                >
                                  Harry Richardson
                                </a>
                                <span className="book-active">
                                  Booked on : 28 May 2023
                                </span>
                              </span>
                            </h2>
                          </td>
                          <td>Onetime</td>
                          <td className="table-date-time">
                            <h4>
                              Mon, Jul 11<span>04:00 PM - 07:00 PM</span>
                            </h4>
                          </td>
                          <td>
                            <span className="pay-dark fs-16">₹640</span>
                          </td>
                          <td>
                            <span className="badge bg-info">
                              <i className="feather-clock me-1"></i>Awaiting
                            </span>
                          </td>
                          <td className="text-pink view-detail-pink">
                            <a
                              href="javascript:;"
                              data-bs-toggle="modal"
                              data-bs-target="#upcoming-coach"
                            >
                              <i>
                                <Eye size={"15px"} />
                              </i>
                              View Details
                            </a>
                          </td>
                          <td className="table-rating">
                            <div className="rating-point">
                              <i className="fas fa-star filled"></i>
                              <i className="fas fa-star filled"></i>
                              <i className="fas fa-star filled"></i>
                              <i className="fas fa-star filled"></i>
                              <i className="fas fa-star"></i>
                            </div>
                          </td>
                          <td className="text-end">
                            <div className="dropdown dropdown-action table-drop-action">
                              <a
                                href="#"
                                className="action-icon dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="fas fa-ellipsis-h"></i>
                              </a>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a
                                  className="dropdown-item"
                                  href="javascript:void(0);"
                                >
                                  <i className="feather-edit"></i>Edit
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="javascript:void(0);"
                                >
                                  <i className="feather-trash"></i>Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <a
                                href="#"
                                className="avatar avatar-sm flex-shrink-0"
                              >
                                <img
                                  className="avatar-img"
                                  src="/img/featured/featured-09.jpg"
                                  alt="User"
                                />
                              </a>
                              <span className="table-head-name flex-grow-1">
                                <a
                                  href="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#profile-coach"
                                >
                                  Pete Hill
                                </a>
                                <span className="book-active">
                                  Booked on : 29 May 2023
                                </span>
                              </span>
                            </h2>
                          </td>
                          <td>Onetime</td>
                          <td className="table-date-time">
                            <h4>
                              Mon, Jul 11<span>10:00 PM - 11:00 PM</span>
                            </h4>
                          </td>
                          <td>
                            <span className="pay-dark fs-16">₹200</span>
                          </td>
                          <td>
                            <span className="badge bg-info">
                              <i className="feather-clock me-1"></i>Awaiting
                            </span>
                          </td>
                          <td className="text-pink view-detail-pink">
                            <a
                              href="javascript:;"
                              data-bs-toggle="modal"
                              data-bs-target="#upcoming-coach"
                            >
                              <i>
                                <Eye size={"15px"} />
                              </i>
                              View Details
                            </a>
                          </td>
                          <td className="table-rating">
                            <div className="rating-point">
                              <i className="fas fa-star filled"></i>
                              <i className="fas fa-star filled"></i>
                              <i className="fas fa-star filled"></i>
                              <i className="fas fa-star filled"></i>
                              <i className="fas fa-star filled"></i>
                            </div>
                          </td>
                          <td className="text-end">
                            <div className="dropdown dropdown-action table-drop-action">
                              <a
                                href="#"
                                className="action-icon dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="fas fa-ellipsis-h"></i>
                              </a>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a
                                  className="dropdown-item"
                                  href="javascript:void(0);"
                                >
                                  <i className="feather-edit"></i>Edit
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="javascript:void(0);"
                                >
                                  <i className="feather-trash"></i>Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-footer">
            <div className="row">
              <div className="col-md-6">
                <div id="tablelength"></div>
              </div>
              <div className="col-md-6">
                <div id="tablepage"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingDataTable;
