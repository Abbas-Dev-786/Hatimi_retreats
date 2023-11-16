import { Eye } from "react-feather";

import BookingTableItem from "./BookingTableItem";

const data = [
  {
    image: "/img/booking/booking-01.jpg",
    courtName: "Leap Sports Academy",
    dateTime: "Mon, Jul 11 06:00 PM - 08:00 PM",
    amount: "120",
    status: "Accepted",
    link: "78587",
  },
  {
    image: "/img/booking/booking-02.jpg",
    courtName: "Feather Badminton",
    dateTime: "Mon, Jul 12 02:00 PM - 05:00 PM",
    amount: "90",
    status: "Awaiting",
    link: "842515",
  },
  {
    image: "/img/booking/booking-03.jpg",
    courtName: "Bwing Sports Academy",
    dateTime: "Mon, Jul 11 06:00 PM - 08:00 PM",
    amount: "130",
    status: "Accepted",
    link: "212120123",
  },
  {
    image: "/img/booking/booking-04.jpg",
    courtName: "Marsh Academy",
    dateTime: "Mon, Jul 12 02:00 PM - 05:00 PM",
    amount: "100",
    status: "Awaiting",
    link: "21454154",
  },
  {
    image: "/img/booking/booking-05.jpg",
    courtName: "Wing Sports Academy",
    dateTime: "Mon, Jul 11 06:00 PM - 08:00 PM",
    amount: "140",
    status: "Accepted",
    link: "7821521",
  },
];

const BookingDataTable = () => {
  return (
    <div className="row">
      <div className="col-sm-12">
        <div className="court-tab-content">
          <div className="card card-tableset">
            <div className="card-body">
              <div className="coache-head-blk">
                <div className="row align-items-center">
                  <div className="col-12">
                    <div className="court-table-head">
                      <h4>My Bookings</h4>
                      <p>Manage and track all your upcoming court bookings.</p>
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
                        {data?.map((item) => (
                          <BookingTableItem key={item.link} {...item} />
                        ))}
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
