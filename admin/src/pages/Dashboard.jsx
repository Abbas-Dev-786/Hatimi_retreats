import Statistics from "../components/dashboard/Statistics";
import Bookings from "../components/dashboard/Bookings";
import Navbar from "../components/common/Navbar";
import Breadcrumbs from "../components/common/Breadcrumbs";
import Tabs from "../components/common/Tabs";

const Dashboard = () => {
  return (
    <div className="court-bg">
      <div className="container-fluid px-0 pb-5">
        <Navbar />
        <Breadcrumbs />
        <Tabs />
        <Statistics />
        <Bookings />
      </div>
    </div>
  );
};

export default Dashboard;
