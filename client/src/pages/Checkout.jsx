import { useSelector } from "react-redux";
import ActionArea from "../components/checkout/ActionArea";
import StepsContainer from "../components/checkout/StepsContainer";
import DetailContainer from "../components/checkout/details/DetailContainer";
import OrderContainer from "../components/checkout/order/OrderContainer";
import PaymentContainer from "../components/checkout/payment/PaymentContainer";
import Banner from "../components/common/Banner";

const Checkout = () => {
  const { currentTab } = useSelector((state) => state.checkout);

  return (
    <div>
      <Banner text="Book A Court" linkText="Home" link="/" />
      <StepsContainer />
      <div className="content book-cage">
        <div className="container">
          {currentTab === 0 && <DetailContainer />}
          {currentTab === 1 && <OrderContainer />}
          {currentTab === 2 && <PaymentContainer />}
          <ActionArea />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
