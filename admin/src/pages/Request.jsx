import Navbar from "../components/common/Navbar";
import Breadcrumbs from "../components/common/Breadcrumbs";
import Tabs from "../components/common/Tabs";
import Requests from "../components/request/Requests";
const Request = () => {
  return (
    <div className=" court-bg">
      <div className="container-fluid px-0 pb-5">
        <Navbar />
        <Breadcrumbs />
        <Tabs />
        <Requests />
      </div>
    </div>
  );
};

export default Request;
