import { useSelector } from "react-redux";
// import { reset } from "../../state/slices/checkoutSlice";

const stepData = ["Book a Court", "Order Confirmation", "Payment"];

const StepsContainer = () => {
  // const dispatch = useDispatch();
  const { currentTab } = useSelector((state) => state.checkout);

  // useEffect(() => {
  //   dispatch(reset());
  // }, [dispatch]);

  return (
    <section className="booking-steps py-30">
      <div className="container">
        <ul className="d-lg-flex justify-content-center align-items-center list-unstyled">
          {stepData.map((step, i) => (
            <li key={i} className={`${currentTab === i ? "active" : ""}`}>
              <h5>
                <a>
                  <span>{i + 1}</span>
                  {step}
                </a>
              </h5>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default StepsContainer;
