import { useState } from "react";
import { MinusCircle, PlusCircle } from "react-feather";

const Overview = () => {
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
          <div className="text">
            <p>
              Box Cricket Academy is a renowned sports facility situated in
              Sacramento, CA. With a commitment to providing high-quality
              services, we offer a range of amenities and equipment to support
              athletes in their training and development.
            </p>
            {isShowMore && (
              <p>
                Our facility is equipped with state-of-the-art features,
                ensuring a conducive environment for athletes to excel in their
                respective sports.
                <br />
                <br />
                Whether you&apos;re a professional athlete or a sports
                enthusiast, Sarah Sports Academy is the ideal place to enhance
                your skills and achieve your goals. Contact Mart Dublin for more
                information and to book your next training session.
              </p>
            )}
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
