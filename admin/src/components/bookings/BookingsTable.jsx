import { useQuery } from "@tanstack/react-query";
import TableItem from "./TableItem";
import { getAllBookings } from "../../state/api";
import { useEffect, useMemo, useState } from "react";
import SearchBar from "../common/SearchBar";

const BookingsTable = () => {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const { data: apiData, isLoading } = useQuery({
    queryKey: ["bookings", "attempted"],
    queryFn: getAllBookings,
  });

  const data = useMemo(() => apiData?.docs, [apiData]);

  useEffect(() => {
    if (data?.length > 0) {
      const filteredObj = data?.filter(
        (item) =>
          item.court.name.toLowerCase().includes(search.toLowerCase()) ||
          item.user.firstName.toLowerCase().includes(search.toLowerCase()) ||
          item.user.lastName.toLowerCase().includes(search.toLowerCase())
      );

      setFilteredData(filteredObj);
    }
  }, [search, data]);

  return (
    <>
      <div className="row px-5">
        <div className="col-sm-12">
          <div className="court-tab-content">
            <div className="card card-tableset">
              <div className="card-body">
                <div className="coache-head-blk">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <div className="court-table-head">
                        <h4>Bookings</h4>
                        <p>Effortlessly track and manage your bookings</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="coach-active-blk">
                        <SearchBar search={search} setSearch={setSearch} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-content">
                  {!data?.length && !isLoading && (
                    <p className="text-center">No Bookings Available</p>
                  )}

                  <div
                    className="tab-pane fade show active"
                    id="nav-Recent"
                    role="tabpanel"
                    aria-labelledby="nav-Recent-tab"
                    tabIndex={0}
                  >
                    <div
                      className="table-responsive"
                      style={{ height: `${data?.length * 150}px` }}
                    >
                      <table className="table table-borderless datatable">
                        <thead className="thead-light fixed-table-head">
                          <tr>
                            <th>Court Name</th>
                            <th>User Name</th>
                            <th>Phone Number</th>
                            <th>Date &amp; Time </th>
                            <th>Total Guests</th>
                            <th>Status</th>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingsTable;
