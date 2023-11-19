import { useState } from "react";
import { Rating } from "react-simple-star-rating";
// import { StarPicker } from "react-star-picker";

const AddNewReviewModel = () => {
  const [rating, setRating] = useState();

  return (
    <div
      className="modal custom-modal fade payment-modal"
      id="add-review"
      role="dialog"
    >
      <div className="modal-dialog modal-dialog-centered modal-md">
        <div className="modal-content">
          <div className="modal-header">
            <div className="form-header modal-header-title">
              <h4 className="mb-0">Write a Review</h4>
            </div>
            <a className="close" data-bs-dismiss="modal" aria-label="Close">
              <span className="align-center" aria-hidden="true">
                <i className="feather-x"></i>
              </span>
            </a>
          </div>
          <div className="modal-body">
            <form>
              <div className="row">
                <div className="col-lg-12">
                  <div className="input-space review">
                    <Rating
                      onClick={(value) => setRating(value)}
                      allowFraction
                      size={40}
                      showTooltip
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="input-space">
                    <label className="form-label">
                      Your Review <span>*</span>
                    </label>
                    <textarea
                      className="form-control"
                      id="review"
                      rows="3"
                      placeholder="Enter Your Review"
                    ></textarea>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <div className="table-accept-btn">
              <button className="btn btn-primary" data-bs-dismiss="modal">
                Add Review
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewReviewModel;
