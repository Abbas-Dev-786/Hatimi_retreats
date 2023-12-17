import { useEffect, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import SearchBar from "../common/SearchBar";
import TableItem from "./TableItem";
import { getAllBookings } from "../../state/api";

const Requests = () => {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const { data: apiData, isLoading } = useQuery({
    queryKey: ["bookings-r", "pending"],
    queryFn: getAllBookings,
  });

  const data = useMemo(() => apiData?.docs, [apiData]);

  useEffect(() => {
    if (data?.length > 0) {
      const filteredObj = data?.filter(
        (item) =>
          item.court.name.toLowerCase().includes(search.toLowerCase()) ||
          item.user.fullName.toLowerCase().includes(search.toLowerCase())
      );

      setFilteredData(filteredObj);
    }
  }, [search, data]);

  return (
    <>
      <div className=" court-bg">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="court-tab-content">
                <div className="card card-tableset">
                  <div className="card-body">
                    <div className="coache-head-blk">
                      <div className="row align-items-center">
                        <div className="col-lg-6">
                          <div className="court-table-head">
                            <h4>Requests</h4>
                            <p>
                              Efficiently manage and respond to booking requests
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <SearchBar search={search} setSearch={setSearch} />
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
                                <th>Court Name</th>
                                <th>User Name</th>
                                <th>Phone Number</th>
                                <th>Date &amp; Time </th>
                                <th>Total Guests</th>
                                <th>Payment</th>
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

                    {!data?.length && !isLoading && (
                      <p className="text-center mt-4">No Requests Available</p>
                    )}
                  </div>
                </div>
                {/* <div className="tab-footer">
                  <div className="row">
                    <div className="col-md-6">
                      <div id="tablelength" />
                    </div>
                    <div className="col-md-6">
                      <div id="tablepage" />
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Requests;
