import React from 'react'
import Statistics from "../components/dashboard/statistics";
import Bookings from "../components/dashboard/Bookings";
import Navbar from "../components/common/Navbar";
import Breadcrumbs from "../components/common/Breadcrumbs";
import Tabs from "../components/common/Tabs";


const dashboard = () => {
  return (
    <div class=" court-bg">
        <div class="container-fluid px-0 pb-5">
            <Navbar />
            <Breadcrumbs />
            <Tabs />
            <Statistics />
            <Bookings />
        </div>
    </div>
  )
}

export default dashboard
