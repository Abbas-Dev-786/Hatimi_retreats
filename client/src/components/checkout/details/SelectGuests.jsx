import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MinusCircle, PlusCircle } from "react-feather";
import { setAddtionalGuests } from "../../../state/slices/checkoutSlice";

const SelectGuests = () => {
  const { maxGuests } = useSelector((state) => state.checkout);
  const [count, setCount] = useState(5);
  const [maxGuestsCount, setMaxGuestsCount] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    if (count > maxGuests && maxGuests != 0) {
      const additionalGuests = count - maxGuests;
      setMaxGuestsCount(additionalGuests);
      dispatch(setAddtionalGuests(additionalGuests));
    }
  }, [count, maxGuests, dispatch]);

  const handleIncrement = () => {
    if (count >= 50) return;

    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (count <= 1) return;

    setCount((prev) => prev - 1);
  };

  const handleCountChange = (e) => {
    const value = +e.target.value;

    if (value > 50) return;

    setCount(value);
  };

  return (
    <div className="select-guest">
      <h5>Select Guest</h5>
      <span className="primary-text">
        {" "}
        ({maxGuestsCount} additional guests)
      </span>
      <div className="d-md-flex justify-content-between align-items-center">
        <div className="qty-item text-center">
          <a
            className="dec d-flex justify-content-center align-items-center"
            onClick={handleDecrement}
          >
            <i>
              <MinusCircle />
            </i>
          </a>
          <input
            type="number"
            className="form-control text-center"
            name="qty"
            id="adults"
            value={count}
            onChange={handleCountChange}
          />
          <a
            className="inc d-flex justify-content-center align-items-center"
            onClick={handleIncrement}
          >
            <i>
              <PlusCircle />
            </i>
          </a>
          <label htmlFor="adults">
            <span className="dark-text">Total Guests</span>
            <span className="dull-text">Max {maxGuests} Guests</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default SelectGuests;
