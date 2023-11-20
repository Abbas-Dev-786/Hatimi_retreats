import React from 'react'

const Requests = () => {
  return (
    <>
      <div className=" court-bg">
  <div className="container">
    <div className="row">
      <div className="col-sm-12">
        <div className="court-tab-content">
          <div className="card card-tableset">
            <div className="card-body">
              <div className="coache-head-blk">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="court-table-head">
                      <h4>Requests</h4>
                      <p>Efficiently manage and respond to booking requests</p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="coach-active-blk">
                      <div id="tablefilter" />
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
                              Court
                            </button>
                          </div>
                        </nav>
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
                                className="avatar avatar-sm  flex-shrink-0"
                              >
                                <img
                                  className="avatar-img"
                                  src="/img/booking/booking-01.jpg"
                                  alt="User"
                                />
                              </a>
                              <span className="table-head-name flex-grow-1">
                                <a
                                  href="javascript:;"
                                  data-bs-toggle="modal"
                                  data-bs-target="#request-court"
                                >
                                  Wing Sports Academy
                                </a>
                                <span>Court 1</span>
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
                              Fri, Jul 11<span>06:00 PM - 08:00 PM</span>
                            </h4>
                          </td>
                          <td>2</td>
                          <td>
                            <span className="pay-dark">₹250</span>
                          </td>
                          <td className="table-accept-btn text-end">
                            <a href="javascript:;" className="btn accept-btn">
                              <i className="feather-check-circle" />
                              Accept
                            </a>
                            <a
                              href="javascript:;"
                              className="btn cancel-table-btn"
                              data-bs-toggle="modal"
                              data-bs-target="#request-reject"
                            >
                              <i className="feather-x-circle" />
                              Cancel
                            </a>
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
                  tabIndex={0}
                >
                  <div className="table-responsive">
                    <table className="table table-borderless datatable">
                      <thead className="thead-light">
                        <tr>
                          <th>Player Name</th>
                          <th>Lesson Type</th>
                          <th>Date &amp; Time </th>
                          <th>Payment</th>
                          <th>Status</th>
                          <th />
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <a
                                href="my-profile.html"
                                className="avatar avatar-sm  flex-shrink-0"
                              >
                                <img
                                  className="avatar-img"
                                  src="assets/img/profiles/avatar-01.jpg"
                                  alt="User"
                                />
                              </a>
                              <span className="table-head-name table-name-user flex-grow-1">
                                <a href="my-profile.html">Johnson</a>
                              </span>
                            </h2>
                          </td>
                          <td>Single Lesson</td>
                          <td className="table-date-time">
                            <h4>
                              Fri, Jul 11<span>06:00 PM - 08:00 PM</span>
                            </h4>
                          </td>
                          <td>
                            <span className="pay-dark">₹250</span>
                          </td>
                          <td className="paid-edit">
                            <span>
                              <i className="feather-edit" />
                              Paid
                            </span>
                          </td>
                          <td className="table-accept-btn text-end">
                            <a href="javascript:;" className="btn accept-btn">
                              <i className="feather-check-circle" />
                              Accept
                            </a>
                            <a
                              href="javascript:;"
                              className="btn cancel-table-btn"
                              data-bs-toggle="modal"
                              data-bs-target="#request-reject"
                            >
                              <i className="feather-x-circle" />
                              Cancel
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <a
                                href="my-profile.html"
                                className="avatar avatar-sm  flex-shrink-0"
                              >
                                <img
                                  className="avatar-img"
                                  src="assets/img/profiles/avatar-02.jpg"
                                  alt="User"
                                />
                              </a>
                              <span className="table-head-name table-name-user flex-grow-1">
                                <a href="my-profile.html">Andy</a>
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
                            <span className="pay-dark">₹150</span>
                          </td>
                          <td className="paid-edit">
                            <span>
                              <i className="feather-edit" />
                              Paid
                            </span>
                          </td>
                          <td className="table-accept-btn text-end">
                            <a href="javascript:;" className="btn accept-btn">
                              <i className="feather-check-circle" />
                              Accept
                            </a>
                            <a
                              href="javascript:;"
                              className="btn cancel-table-btn"
                              data-bs-toggle="modal"
                              data-bs-target="#request-coche"
                            >
                              <i className="feather-x-circle" />
                              Cancel
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <a
                                href="my-profile.html"
                                className="avatar avatar-sm  flex-shrink-0"
                              >
                                <img
                                  className="avatar-img"
                                  src="assets/img/profiles/avatar-06.jpg"
                                  alt="User"
                                />
                              </a>
                              <span className="table-head-name table-name-user flex-grow-1">
                                <a href="my-profile.html">Pranika</a>
                              </span>
                            </h2>
                          </td>
                          <td>Group Lessons</td>
                          <td className="table-date-time">
                            <h4>
                              Wed, Jul 11<span>06:00 PM - 08:00 PM</span>
                            </h4>
                          </td>
                          <td>
                            <span className="pay-dark">₹150</span>
                          </td>
                          <td className="paid-edit">
                            <span>
                              <i className="feather-edit" />
                              Paid
                            </span>
                          </td>
                          <td className="table-accept-btn text-end">
                            <a href="javascript:;" className="btn accept-btn">
                              <i className="feather-check-circle" />
                              Accept
                            </a>
                            <a
                              href="javascript:;"
                              className="btn cancel-table-btn"
                              data-bs-toggle="modal"
                              data-bs-target="#request-coche"
                            >
                              <i className="feather-x-circle" />
                              Cancel
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <a
                                href="my-profile.html"
                                className="avatar avatar-sm  flex-shrink-0"
                              >
                                <img
                                  className="avatar-img"
                                  src="assets/img/profiles/avatar-03.jpg"
                                  alt="User"
                                />
                              </a>
                              <span className="table-head-name table-name-user flex-grow-1">
                                <a href="my-profile.html">Ariyan</a>
                              </span>
                            </h2>
                          </td>
                          <td>Onetime</td>
                          <td className="table-date-time">
                            <h4>
                              Wed, Jul 11<span>06:00 PM - 08:00 PM</span>
                            </h4>
                          </td>
                          <td>
                            <span className="pay-dark">₹150</span>
                          </td>
                          <td className="paid-edit">
                            <span>
                              <i className="feather-edit" />
                              Paid
                            </span>
                          </td>
                          <td className="table-accept-btn text-end">
                            <a href="javascript:;" className="btn accept-btn">
                              <i className="feather-check-circle" />
                              Accept
                            </a>
                            <a
                              href="javascript:;"
                              className="btn cancel-table-btn"
                              data-bs-toggle="modal"
                              data-bs-target="#request-coche"
                            >
                              <i className="feather-x-circle" />
                              Cancel
                            </a>
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
                <div id="tablelength" />
              </div>
              <div className="col-md-6">
                <div id="tablepage" />
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

export default Requests
