import React from 'react'

const Tabs = () => {
  return (
    <>
    <div className='dashboard-section coach-dash-section'>
    <div className="container">
    <div className="row">
        <div className="col-lg-12">
        <div className="dashboard-menu coaurt-menu-dash">
            <ul>
            <li>
                <a href="coach-dashboard.html" className="active">
                <img src="/img/icons/dashboard-icon.svg" alt="Icon" />
                <span>Dashboard</span>
                </a>
            </li>
            <li>
                <a href="all-court.html">
                <img src="/img/icons/court-icon.svg" alt="Icon" />
                <span> Courts</span>
                </a>
            </li>
            <li>
                <a href="coach-request.html">
                <img src="/img/icons/request-icon.svg" alt="Icon" />
                <span>Requests</span>
                <span className="court-notify">03</span>
                </a>
            </li>
            <li>
                <a href="coach-booking.html">
                <img src="/img/icons/booking-icon.svg" alt="Icon" />
                <span>Bookings</span>
                </a>
            </li>
            </ul>
        </div>
        </div>
    </div>
    </div>
    </div>

    </>
  )
}

export default Tabs
