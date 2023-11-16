import moment from "moment";
import { Check, X } from "react-feather";
import AddNewReviewModel from "./AddNewReviewModel";

const data = [
  {
    image: "/img/profiles/avatar-01.jpg",
    name: "David",
    date: moment().format("DD/MM/YYYY"),
    rating: 5.0,
    text: "Yes, I would book again.",
    review: "Absolutely perfect",
    desc: "If you are looking for a perfect place for friendly matches with your friends or a competitive match, It is the best place.",
  },
  {
    image: "/img/profiles/avatar-06.jpg",
    name: "Amanda",
    date: moment().format("DD/MM/YYYY"),
    rating: 1.5,
    text: "No, I dont want to book again.",
    review: "Awesome. Its very convenient to play.",
    desc: "If you are looking for a perfect place for friendly matches with your friends or a competitive match, It is the best place.",
  },
];

const Reviews = () => {
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
            <a
              className="btn btn-gradient pull-right write-review add-review"
              data-bs-toggle="modal"
              data-bs-target="#add-review"
            >
              Write a review
            </a>
          </div>
        </div>
        <div
          id="panelsStayOpen-collapseSix"
          className="accordion-collapse collapse show"
          aria-labelledby="panelsStayOpen-reviews"
        >
          <div className="accordion-body">
            {/* <div className="row review-wrapper">
              <div className="col-lg-3">
                <div className="ratings-info corner-radius-10 text-center">
                  <h3>4.8</h3>
                  <span>out of 5.0</span>
                  <div className="rating">
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                  </div>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="recommended">
                  <h5>Recommended by 97% of Players</h5>
                  <div className="row">
                    {[1, 2, 3, 4, 5].map((item) => (
                      <div
                        className="col-12 col-sm-12 col-md-4 col-lg-4 mb-3"
                        key={item}
                      >
                        <p className="mb-0">Quality of service</p>
                        <ul>
                          <li>
                            <i></i>
                          </li>
                          <li>
                            <i></i>
                          </li>
                          <li>
                            <i></i>
                          </li>
                          <li>
                            <i></i>
                          </li>
                          <li>
                            <i></i>
                          </li>
                          <li>
                            <span>5.0</span>
                          </li>
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div> */}

            {data.map((item, i) => (
              <div className="review-box d-md-flex" key={i}>
                <div className="review-profile">
                  <img src={item.image} alt="User" />
                </div>
                <div className="review-info">
                  <h6 className="mb-2 tittle">
                    {item.name} Booked on {item.date}
                  </h6>
                  <div className="rating">
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <span className="ms-2">{item.rating}</span>
                  </div>
                  <span
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
                  </span>
                  <h6>{item.review}</h6>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}

            <div className="d-flex justify-content-center mt-1">
              <button
                type="button"
                className="btn btn-load-more d-flex justify-content-center align-items-center"
              >
                Load More<i className="feather-plus-square"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <AddNewReviewModel />
    </>
  );
};

export default Reviews;
