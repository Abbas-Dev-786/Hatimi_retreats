const FiltersList = () => {
  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="sortby-section court-sortby-section">
          <div className="sorting-info">
            <div className="row d-flex align-items-center">
              <div className="col-xl-7 col-lg-7 col-sm-12 col-12">
                <div className="coach-court-list">
                  <ul className="nav">
                    <li>
                      <a className="active" href="#">
                        Upcoming
                      </a>
                    </li>
                    <li>
                      <a href="#">Completed</a>
                    </li>
                    <li>
                      <a href="#">On Going</a>
                    </li>
                    <li>
                      <a href="#">Cancelled</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-5 col-lg-5 col-sm-12 col-12">
                <div className="sortby-filter-group court-sortby">
                  <div className="sortbyset week-bg">
                    <div className="sorting-select">
                      <select className="form-control select">
                        <option>This Week</option>
                        <option>One Day</option>
                      </select>
                    </div>
                  </div>
                  <div className="sortbyset">
                    <span className="sortbytitle">Sort By</span>
                    <div className="sorting-select">
                      <select className="form-control select">
                        <option>Relevance</option>
                        <option>Price</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiltersList;
