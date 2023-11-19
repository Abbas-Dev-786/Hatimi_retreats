import { Plus } from "react-feather";

const DetailSection = () => {
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
                src="/img/mas.jpg"
                alt="Venue"
                width="200px"
              />
              <div className="info">
                <div className="d-flex justify-content-start align-items-center mb-3">
                  <span className="text-white dark-yellow-bg color-white me-2 d-flex justify-content-center align-items-center">
                    4.5
                  </span>
                  <span>300 Reviews</span>
                </div>
                <h3 className="mb-2">Box Cricket Turf</h3>
                <p>
                  Manchester Academy: Where dreams meet excellence in sports
                  education and training.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-6">
            <ul className="d-sm-flex align-items-center justify-content-evenly">
              <li>
                <h3 className="d-inline-block">₹150</h3>
                <span>/hr</span>
                <p>up to 1 guests</p>
              </li>
              <li>
                <span>
                  <i>
                    <Plus />
                  </i>
                </span>
              </li>
              <li>
                <h3 className="d-inline-block">₹5</h3>
                <span>/hr</span>
                <p>
                  each additional guest <br />
                  up to 4 guests max
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailSection;
