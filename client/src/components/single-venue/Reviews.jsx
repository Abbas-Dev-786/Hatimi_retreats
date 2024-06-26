import AddNewReviewModel from "./AddNewReviewModel";
import { Rating } from "react-simple-star-rating";
import { useSelector } from "react-redux";
import { IMAGE_URL } from "../../constants";

const Reviews = () => {
  const { courtData } = useSelector((state) => state.court);
  const { user } = useSelector((state) => state.user);

  return (
    <>
      <div className="accordion-item mb-4" id="reviews">
        <div className="accordion-header" id="panelsStayOpen-reviews">
          <div
            className="accordion-button d-flex justify-content-between align-items-center"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseSix"
            aria-controls="panelsStayOpen-collapseSix"
          >
            <span className="w-75 mb-0"> Reviews </span>
            <button
              className="btn btn-gradient pull-right write-review add-review"
              data-bs-toggle="modal"
              data-bs-target="#add-review"
              disabled={user?.email ? false : true}
            >
              Write a review
            </button>
          </div>
        </div>
        <div
          id="panelsStayOpen-collapseSix"
          className="accordion-collapse collapse show"
          aria-labelledby="panelsStayOpen-reviews"
        >
          <div className="accordion-body">
            {!courtData?.reviews?.length && (
              <h6 className="text-center">No Review are There</h6>
            )}
            {courtData?.reviews?.map((item, i) => (
              <div className="review-box d-md-flex" key={i}>
                <div className="review-profile">
                  <img
                    src={`${IMAGE_URL}/${item?.user?.profileImg}`}
                    alt="User"
                  />
                </div>
                <div className="review-info">
                  <h6 className="mb-2 tittle">{item?.user?.fullName}</h6>
                  <div
                    className="rating"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <Rating
                      size={25}
                      readonly
                      initialValue={item.rating}
                      allowFraction
                    />
                    <span className="ms-2">{item.rating}</span>
                  </div>
                  {/* <span
                    className={`${
                      item.rating > 3 ? "success" : "warning"
                    }-text`}
                  >
                    <i>
                      {item.rating > 3 ? (
                        <Check size={"15px"} />
                      ) : (
                        <X size={"15px"} />
                      )}
                    </i>
                    {item.text}
                  </span> */}
                  <h6>{item.review}</h6>
                  {/* <p>{item.desc}</p> */}
                </div>
              </div>
            ))}

            {/* <div className="d-flex justify-content-center mt-1">
              <button
                type="button"
                className="btn btn-load-more d-flex justify-content-center align-items-center"
              >
                Load More<i className="feather-plus-square"></i>
              </button>
            </div> */}
          </div>
        </div>
      </div>

      <AddNewReviewModel />
    </>
  );
};

export default Reviews;
