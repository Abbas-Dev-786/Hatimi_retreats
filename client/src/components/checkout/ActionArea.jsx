import { ArrowLeftCircle, ArrowRightCircle } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { next, prev } from "../../state/slices/checkoutSlice";

const ActionArea = () => {
  const { currentTab } = useSelector((state) => state.checkout);
  const dipatch = useDispatch();

  return (
    <div className="text-center btn-row">
      <button
        className="btn btn-secondary me-3 btn-icon"
        disabled={currentTab === 0}
        onClick={() => dipatch(prev())}
      >
        <i className="me-1">
          <ArrowLeftCircle />
        </i>
        Back
      </button>
      <button
        className="btn btn-secondary btn-icon"
        disabled={currentTab === 2}
        onClick={() => dipatch(next())}
      >
        Next
        <i className="ms-1">
          <ArrowRightCircle />
        </i>
      </button>
    </div>
  );
};

export default ActionArea;
