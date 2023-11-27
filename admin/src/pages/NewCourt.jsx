import Breadcrumbs from "../components/common/Breadcrumbs";
import Navbar from "../components/common/Navbar";
import ContentContainer from "../components/new-court/ContentContainer";

const NewCourt = () => {
  return (
    <div className="add-court venue-coach-details">
      <div className="container-fluid px-0 pb-5">
        <Navbar />
        <Breadcrumbs isCourt={true} />
        <ContentContainer />
      </div>
    </div>
  );
};

export default NewCourt;
