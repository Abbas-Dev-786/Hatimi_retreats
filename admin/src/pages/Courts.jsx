import Navbar from "../components/common/Navbar";
import Breadcrumbs from "../components/common/Breadcrumbs";
import Tabs from "../components/common/Tabs";
import Courtlist from "../components/courts/Courtlist";
import EditCourtModal from "../components/courts/EditCourtModal";
import ChangeImageModal from "../components/courts/ChangeImageModal";
import ChangeAmenitiesModal from "../components/courts/ChangeAmenitiesModal";

const Courts = () => {
  return (
    <div className=" court-bg">
      <div className="container-fluid px-0 pb-5">
        <Navbar />
        <Breadcrumbs />
        <Tabs />
        <Courtlist />
        <EditCourtModal />
        <ChangeImageModal />
        <ChangeAmenitiesModal />
      </div>
    </div>
  );
};

export default Courts;
