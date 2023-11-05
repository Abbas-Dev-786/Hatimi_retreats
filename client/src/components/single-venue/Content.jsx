import InfoContainer from "./InfoContainer";
import Sidebar from "./Sidebar";

const Content = () => {
  return (
    <div className="content">
      <div className="container">
        <div className="row">
          <InfoContainer />
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Content;
