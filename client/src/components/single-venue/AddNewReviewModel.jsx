const AddNewReviewModel = () => {
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
                  <div className="input-space">
                    <label className="form-label">
                      Your Name <span>*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="reviewer-name"
                      placeholder="Enter Your Name"
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="input-space">
                    <label className="form-label">Title of your review</label>
                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      placeholder="If you could say it in one sentence, what would you say?"
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
                    <small className="text-muted">
                      <span id="chars">100</span> characters remaining
                    </small>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="input-space review">
                    <label className="form-label">
                      Rating <span>*</span>
                    </label>
                    <div className="star-rating">
                      <input
                        id="star-5"
                        type="radio"
                        name="rating"
                        value="star-5"
                      />
                      <label htmlFor="star-5" title="5 stars">
                        <i className="active fa fa-star"></i>
                      </label>
                      <input
                        id="star-4"
                        type="radio"
                        name="rating"
                        value="star-4"
                      />
                      <label htmlFor="star-4" title="4 stars">
                        <i className="active fa fa-star"></i>
                      </label>
                      <input
                        id="star-3"
                        type="radio"
                        name="rating"
                        value="star-3"
                      />
                      <label htmlFor="star-3" title="3 stars">
                        <i className="active fa fa-star"></i>
                      </label>
                      <input
                        id="star-2"
                        type="radio"
                        name="rating"
                        value="star-2"
                      />
                      <label htmlFor="star-2" title="2 stars">
                        <i className="active fa fa-star"></i>
                      </label>
                      <input
                        id="star-1"
                        type="radio"
                        name="rating"
                        value="star-1"
                      />
                      <label htmlFor="star-1" title="1 star">
                        <i className="active fa fa-star"></i>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="terms-accept">
                    <div className="d-flex align-items-center form-check">
                      <input
                        type="checkbox"
                        id="terms_accept"
                        defaultChecked
                        className="form-check-input"
                      />
                      <label htmlFor="terms_accept">
                        I have read and accept
                        <a href="terms-condition.html">
                          Terms &amp; Conditions
                        </a>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <div className="table-accept-btn">
              <a href="#" className="btn btn-primary">
                Add Review
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewReviewModel;
