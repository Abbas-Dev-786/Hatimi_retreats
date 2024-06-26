import { useQuery } from "@tanstack/react-query";
import { getAllBookings } from "../../state/api";
import TableItem from "./TableItem";
import { useMemo } from "react";

const Bookings = () => {
  const { data: apiData } = useQuery({
    queryKey: ["bookings"],
    queryFn: getAllBookings,
  });

  const data = useMemo(() => apiData?.docs, [apiData]);

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
                        <p>
                          Effortlessly track and manage your completed bookings
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="coach-active-blk">
                        <div id="tablefilter" />
                      </div>
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
                            <th>Date &amp; Time </th>
                            <th>Total Guests</th>
                            <th>Payment</th>
                            <th />
                          </tr>
                        </thead>
                        <tbody>
                          {data?.slice(0, 3)?.map((item) => (
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

export default Bookings;
