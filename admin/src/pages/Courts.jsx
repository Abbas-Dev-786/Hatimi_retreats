import React from 'react'
import Navbar from "../components/common/Navbar";
import Breadcrumbs from "../components/common/Breadcrumbs";
import Tabs from "../components/common/Tabs";
import Courtlist from '../components/courts/Courtlist';

const Courts = () => {
  return (
    <div class=" court-bg">
        <div class="container-fluid px-0 pb-5">
            <Navbar />
            <Breadcrumbs />
            <Tabs />
            <Courtlist />            
        </div>
    </div>
  )
}

export default Courts
