import BookingsTable from "../components/bookings/BookingsTable";
import Breadcrumbs from "../components/common/Breadcrumbs";
import Navbar from "../components/common/Navbar";
import Tabs from "../components/common/Tabs";

const Bookings = () => {
  return (
    <div className=" court-bg">
      <div className="container-fluid px-0 pb-5">
        <Navbar />
        <Breadcrumbs />
        <Tabs />
        <BookingsTable />
      </div>
    </div>
  );
};

export default Bookings;
