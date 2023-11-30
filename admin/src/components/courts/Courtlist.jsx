import { useQuery } from "@tanstack/react-query";
import { getAllCourts } from "../../state/api";
import TableItem from "./TableItem";
import SearchBar from "../common/SearchBar";
import { useEffect, useState } from "react";

const Courtlist = () => {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const { data, isLoading } = useQuery({
    queryKey: ["courts"],
    queryFn: getAllCourts,
  });

  useEffect(() => {
    if (data?.length > 0) {
      const filteredObj = data?.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );

      setFilteredData(filteredObj);
    }
  }, [search, data]);

  return (
    <>
      <div className="court-bg">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="court-tab-content">
                <div className="card card-tableset">
                  <div className="card-body">
                    <div className="coache-head-blk">
                      <div className="row align-items-center">
                        <div className="col-md-6">
                          <div className="court-table-head">
                            <h4>Courts</h4>
                            <p>
                              Explore top-quality courts for your sporting
                              activities
                            </p>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <SearchBar search={search} setSearch={setSearch} />
                        </div>
                      </div>
                    </div>
                    <div
                      className="table-responsive"
                      style={{ height: `${data?.length * 70}px` }}
                    >
                      {!data?.length && !isLoading && (
                        <p className="text-center">No Courts Available</p>
                      )}

                      <table className="table table-borderless datatable">
                        <thead className="thead-light fixed-table-head">
                          <tr>
                            <th>Court Name</th>
                            <th>City</th>
                            <th>Timings</th>
                            <th>Amount</th>
                            <th>Max Guest</th>
                            <th>Added On</th>

                            {/* <th>Status</th> */}
                            <th />
                          </tr>
                        </thead>
                        <tbody>
                          {!filteredData?.length &&
                            data?.map((item) => (
                              <TableItem key={item._id} {...item} />
                            ))}

                          {filteredData?.length > 0 &&
                            filteredData?.map((item) => (
                              <TableItem key={item._id} {...item} />
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
    </>
  );
};

export default Courtlist;
