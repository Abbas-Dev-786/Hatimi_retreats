import { useState } from "react";
import { useSelector } from "react-redux";
import { MinusCircle, PlusCircle } from "react-feather";

const Overview = () => {
  const { courtData } = useSelector((state) => state.court);
  const [isShowMore, setShowMore] = useState(false);

  return (
    <div className="accordion-item mb-4" id="overview">
      <h4 className="accordion-header" id="panelsStayOpen-overview">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#panelsStayOpen-collapseOne"
          aria-expanded="true"
          aria-controls="panelsStayOpen-collapseOne"
        >
          Overview
        </button>
      </h4>
      <div
        id="panelsStayOpen-collapseOne"
        className="accordion-collapse collapse show"
        aria-labelledby="panelsStayOpen-overview"
      >
        <div className="accordion-body">
          <div className="text text-capitalize">
            <p>
              {courtData?.description?.split(" ")?.slice(0, 30)?.join(" ")}
              &nbsp;
              {
                isShowMore &&
                  // <p>
                  courtData?.description
                    ?.split(" ")
                    ?.slice(30, courtData?.description?.split(" ")?.length)
                    ?.join(" ")
                // </p>
              }
            </p>
          </div>
          <div
            className="show-more d align-items-center primary-text"
            onClick={() => setShowMore((prev) => !prev)}
          >
            <i>
              {!isShowMore ? (
                <PlusCircle size={"15px"} />
              ) : (
                <MinusCircle size={"15px"} />
              )}
            </i>
            Show {!isShowMore ? "More" : "Less"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
