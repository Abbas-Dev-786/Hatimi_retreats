import AddNewAmenityModal from "../components/amenties/AddNewAmenityModal";
import AmenityDataTable from "../components/amenties/AmenityDataTable";
import Breadcrumbs from "../components/common/Breadcrumbs";
import Navbar from "../components/common/Navbar";
import Tabs from "../components/common/Tabs";

const Amenities = () => {
  return (
    <div className=" court-bg">
      <div className="container-fluid px-0 pb-5">
        <Navbar />
        <Breadcrumbs />
        <Tabs />
        <AmenityDataTable />
        <AddNewAmenityModal />
      </div>
    </div>
  );
};

export default Amenities;
