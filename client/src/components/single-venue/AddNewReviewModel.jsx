import { useState } from "react";
import { Rating } from "react-simple-star-rating";
import { useParams } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { createReview } from "../../state/api";

const AddNewReviewModel = () => {
  const { id } = useParams();
  const [rating, setRating] = useState();
  const [review, setReview] = useState("");

  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: createReview,
    onError: (err) => {
      toast.error(err.message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["court"] });
      toast.success("Review Created Successfully");
    },
  });

  const handleAddReview = (e) => {
    e.preventDefault();

    if (!review || !rating) {
      toast.error("All Fields are Mandatory.");
      return;
    }

    mutate({ id, review, rating });
  };

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
                      value={review}
                      placeholder="Enter Your Review"
                      onChange={(e) => setReview(e.target.value)}
                    ></textarea>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <div className="table-accept-btn">
              <button
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={handleAddReview}
              >
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
