import { useQuery } from "@tanstack/react-query";
import BookingTableItem from "./BookingTableItem";
import { getMyBookings } from "../../state/api";
import Spinner from "../common/Spinner";

const BookingDataTable = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["bookings"],
    queryFn: getMyBookings,
  });

  return (
    <div className="row">
      <div className="col-sm-12">
        <div className="court-tab-content">
          <div className="card card-tableset">
            <div className="card-body">
              <div className="coache-head-blk">
                <div className="row align-items-center">
                  <div className="col-12">
                    <div className="court-table-head">
                      <h4>My Bookings</h4>
                      <p>Manage and track all your upcoming court bookings.</p>
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
                  tabIndex="0"
                >
                  <div className="table-responsive table-datatble">
                    <table className="table datatable">
                      <thead className="thead-light">
                        <tr>
                          <th>Court Name</th>
                          <th>Date & Time</th>
                          <th>Payment</th>
                          <th>Status</th>
                          <th>Details</th>

                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {data?.map((item) => (
                          <BookingTableItem key={item._id} {...item} />
                        ))}
                      </tbody>
                    </table>
                    {isLoading && <Spinner />}
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

export default BookingDataTable;
