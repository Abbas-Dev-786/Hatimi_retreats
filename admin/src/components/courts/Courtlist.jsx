import React from 'react'

const Courtlist = () => {
  return (
    <>
      <div className="court-bg">
  <div className="container">
    <div className="row">
      <div className="col-sm-12">
        <div className="court-tab-content">
          <div className="card card-tableset">
            <div className="card-body">
              <div className="coache-head-blk">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <div className="court-table-head">
                      <h4>Courts</h4>
                      <p>
                        Explore top-quality courts for your sporting activities
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div id="tablefilter" />
                  </div>
                </div>
              </div>
              <div className="table-responsive">
                <table className="table table-borderless datatable">
                  <thead className="thead-light">
                    <tr>
                      <th>Court Name</th>
                      <th>Location</th>
                      <th>Amount</th>
                      <th>Max Guest</th>
                      <th>Additional Guests</th>
                      <th>Added On</th>
                     
                      <th>Status</th>
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
                            <a href="#">Leap Sports Academy</a>
                            <span>Court 1</span>
                          </span>
                        </h2>
                      </td>
                      <td>Victoria, TX</td>
                      <td>
                        <span className="pay-dark">₹150</span>
                      </td>
                      <td>1</td>
                      <td>2</td>
                      <td>Mon, Jul 12</td>
                      
                      <td className="table-inset-btn">
                        <div className="interset-btn">
                          <div className="status-toggle d-inline-flex align-items-center">
                            <input
                              type="checkbox"
                              id="status_1"
                              className="check"
                            />
                            <label htmlFor="status_1" className="checktoggle">
                              checkbox
                            </label>
                          </div>
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

export default Courtlist
