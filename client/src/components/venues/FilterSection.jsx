const FilterSection = () => {
  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="sortby-section">
          <div className="sorting-info">
            <div className="row d-flex align-items-center">
              <div className="col-xl-4 col-lg-3 col-sm-12 col-12">
                <div className="count-search">
                  <p>
                    <span>400</span> venues are listed
                  </p>
                </div>
              </div>
              <div className="col-xl-8 col-lg-9 col-sm-12 col-12">
                <div className="sortby-filter-group">
                  <div className="grid-listview">
                    <ul className="nav">
                      <li>
                        <span>View as</span>
                      </li>
                      <li>
                        <a href="#">
                          <img src="/img/icons/sort-01.svg" alt="Icon" />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="active">
                          <img src="/img/icons/sort-02.svg" alt="Icon" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="/img/icons/sort-03.svg" alt="Icon" />
                        </a>
                      </li>
                    </ul>
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

export default FilterSection;
