import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Plus } from "react-feather";
import { getSingleCourt } from "../../../state/api";
import { setCourtData } from "../../../state/slices/checkoutSlice";
import { IMAGE_URL } from "../../../constants";
import Spinner from "../../common/Spinner";

const DetailSection = () => {
  const dispatch = useDispatch();
  const { propertyId } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["court", propertyId],
    queryFn: getSingleCourt,
  });

  useEffect(() => {
    dispatch(setCourtData(data));
  }, [data, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <section className="card mb-40">
      <div className="text-center mb-40">
        <h3 className="mb-1">Book A Court</h3>
        <p className="sub-title mb-0">
          Hassle-free court bookings and state-of-the-art facilities.
        </p>
      </div>
      <div className="master-academy dull-whitesmoke-bg card">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-12 col-sm-12 col-md-12 col-lg-6">
            <div className="d-sm-flex justify-content-start align-items-center">
              <img
                className="corner-radius-10"
                src={`${IMAGE_URL}/${data?.coverImage}`}
                alt="Venue"
                width="200px"
                style={{ height: "180px" }}
              />
              <div className="info">
                <div className="d-flex justify-content-start align-items-center mb-3">
                  <span className="text-white dark-yellow-bg color-white me-2 d-flex justify-content-center align-items-center">
                    {data?.ratingsAverage}
                  </span>
                  <span>{data?.ratingsQuantity} Reviews</span>
                </div>
                <h3 className="mb-2 text-capitalize">{data?.name}</h3>
                <p>{data?.description?.split(" ").slice(0, 20).join(" ")}</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-6">
            <ul className="d-sm-flex align-items-center justify-content-evenly">
              <li>
                <h3 className="d-inline-block">₹{data?.chargePerHour}</h3>
                <span>/hr</span>
                <p>up to {data?.maxCapacity} guests</p>
              </li>
              <li>
                <span>
                  <i>
                    <Plus />
                  </i>
                </span>
              </li>
              <li>
                <h3 className="d-inline-block">₹{data?.extraMemberCharge}</h3>
                <span>/hr</span>
                <p>each additional guest</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailSection;
