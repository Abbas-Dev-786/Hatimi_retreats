import { useQuery } from "@tanstack/react-query";
import BookingTableItem from "./BookingTableItem";
import { getMyBookings } from "../../state/api";
import Spinner from "../common/Spinner";

// const data2 = [
//   {
//     image: "/img/booking/booking-01.jpg",
//     courtName: "Leap Sports Academy",
//     dateTime: "Mon, Jul 11 06:00 PM - 08:00 PM",
//     amount: "120",
//     status: "Accepted",
//     link: "78587",
//   },
//   {
//     image: "/img/booking/booking-02.jpg",
//     courtName: "Feather Badminton",
//     dateTime: "Mon, Jul 12 02:00 PM - 05:00 PM",
//     amount: "90",
//     status: "Awaiting",
//     link: "842515",
//   },
//   {
//     image: "/img/booking/booking-03.jpg",
//     courtName: "Bwing Sports Academy",
//     dateTime: "Mon, Jul 11 06:00 PM - 08:00 PM",
//     amount: "130",
//     status: "Accepted",
//     link: "212120123",
//   },
//   {
//     image: "/img/booking/booking-04.jpg",
//     courtName: "Marsh Academy",
//     dateTime: "Mon, Jul 12 02:00 PM - 05:00 PM",
//     amount: "100",
//     status: "Awaiting",
//     link: "21454154",
//   },
//   {
//     image: "/img/booking/booking-05.jpg",
//     courtName: "Wing Sports Academy",
//     dateTime: "Mon, Jul 11 06:00 PM - 08:00 PM",
//     amount: "140",
//     status: "Accepted",
//     link: "7821521",
//   },
// ];

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
                        {isLoading && <Spinner />}
                        {data?.map((item) => (
                          <BookingTableItem key={item._id} {...item} />
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

export default BookingDataTable;
