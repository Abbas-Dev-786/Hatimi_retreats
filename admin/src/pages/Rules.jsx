import Breadcrumbs from "../components/common/Breadcrumbs";
import Navbar from "../components/common/Navbar";
import Tabs from "../components/common/Tabs";
import AddNewRuleModal from "../components/rules/AddNewRuleModal";
import RulesDataTable from "../components/rules/RulesDataTable";

const Rules = () => {
  return (
    <div className=" court-bg">
      <div className="container-fluid px-0 pb-5">
        <Navbar />
        <Breadcrumbs />
        <Tabs />
        <RulesDataTable />
        <AddNewRuleModal />
      </div>
    </div>
  );
};

export default Rules;
