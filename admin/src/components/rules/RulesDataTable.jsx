import { useQuery } from "@tanstack/react-query";
import { getAllRules } from "../../state/api";
import SearchBar from "../common/SearchBar";
import { useEffect, useState } from "react";
import RulesDataItem from "./RulesDataItem";

const RulesDataTable = () => {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const { data } = useQuery({
    queryKey: ["rules"],
    queryFn: getAllRules,
  });

  useEffect(() => {
    if (data) {
      const filteredObj = data?.filter((item) =>
        item.text.toLowerCase().includes(search.toLowerCase())
      );

      setFilteredData(filteredObj);
    }
  }, [search, data]);

  return (
    <div className="row px-5">
      <div className="col-sm-12">
        <div className="court-tab-content">
          <div className="card card-tableset">
            <div className="card-body">
              <div className="coache-head-blk">
                <div className="row align-items-center">
                  <div className="col-md-4">
                    <div className="court-table-head">
                      <h4>Rules</h4>
                      <p>Effortlessly create, edit and delete Rules</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <SearchBar search={search} setSearch={setSearch} />
                  </div>
                  <div className="col-md-4">
                    <button
                      className="btn btn-secondary btn-sm float-end active"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#amenityModal"
                    >
                      Add New Rule
                    </button>
                  </div>
                </div>
              </div>
              <div className="tab-content">
                <div
                  className="tab-pane fade show active"
                  id="nav-Recent"
                  role="tabpanel"
                  aria-labelledby="nav-Recent-tab"
                  tabIndex={0}
                >
                  <div className="table-responsive">
                    <table className="table table-borderless datatable">
                      <thead className="thead-light">
                        <tr>
                          <th>Rule</th>
                          <th>Created At</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {!filteredData?.length &&
                          data?.map((item) => (
                            <RulesDataItem key={item._id} {...item} />
                          ))}

                        {filteredData?.length > 0 &&
                          filteredData?.map((item) => (
                            <RulesDataItem key={item._id} {...item} />
                          ))}
                      </tbody>
                    </table>
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

export default RulesDataTable;
