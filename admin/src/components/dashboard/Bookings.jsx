import React from 'react'

const Bookings = () => {
  return (
    <>
       <div className="row px-5">
  <div className="col-sm-12">
    <div className="court-tab-content">
      <div className="card card-tableset">
        <div className="card-body">
          <div className="coache-head-blk">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="court-table-head">
                  <h4>Bookings</h4>
                  <p>Effortlessly track and manage your completed bookings</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="coach-active-blk">
                  <div id="tablefilter" />
                
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
              tabIndex={0}
            >
              <div className="table-responsive">
                <table className="table table-borderless datatable">
                  <thead className="thead-light">
                    <tr>
                      <th>Court Name</th>
                      <th>Player Name</th>
                      <th>Date &amp; Time </th>
                      <th>Additional Guests</th>
                      <th>Payment</th>
                      <th />
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
                            <a href="#">Wing Sports Academy</a>
                            <span>
                              Court 1{" "}
                              <span className="book-on-date">
                                Booked on : 26 May 2023
                              </span>
                            </span>
                          </span>
                        </h2>
                      </td>
                      <td>
                        <h2 className="table-avatar">
                          <a
                            href="my-profile.html"
                            className="avatar avatar-sm  flex-shrink-0"
                          >
                            <img
                              className="avatar-img"
                              src="/img/profiles/avatar-01.jpg"
                              alt="User"
                            />
                          </a>
                          <span className="table-head-name table-name-user flex-grow-1">
                            <a href="my-profile.html">Johnson</a>
                          </span>
                        </h2>
                      </td>
                      <td className="table-date-time">
                        <h4>
                          Mon, Jul 11<span>06:00 PM - 08:00 PM</span>
                        </h4>
                      </td>
                      <td>2</td>
                      <td>
                        <span className="pay-dark">₹150</span>
                      </td>
                      <td className="text-end">
                        <div className="dropdown dropdown-action table-drop-action">
                          <a
                            href="#"
                            className="action-icon dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="fas fa-ellipsis-h" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a
                              className="dropdown-item"
                              href="javascript:void(0);"
                            >
                              <i className="feather-edit" />
                              Edit
                            </a>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0);"
                            >
                              <i className="feather-trash" />
                              Delete
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
    </div>
  </div>
</div>
    </>
  )
}

export default Bookings
