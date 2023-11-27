import { useQuery } from "@tanstack/react-query";
import { getAllStats } from "../../state/api";

const Statistics = () => {
  const { data } = useQuery({
    queryKey: ["stats"],
    queryFn: getAllStats,
  });

  return (
    <>
      <div className="row mt-5 px-5">
        <div className="col-xl-12 col-lg-6">
          <div className="card dashboard-card statistic-simply">
            <div className="card-header">
              <h4>Statistics</h4>
              <p>Track progress and improve coaching performance </p>
            </div>
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 d-flex">
                <div className="statistics-grid flex-fill">
                  <div className="statistics-content">
                    <h3>{`${
                      !data ? 0 : String(data?.totalCourts)?.padStart(2, 0)
                    }`}</h3>
                    <p>Total Courts</p>
                  </div>
                  <div className="statistics-icon">
                    <img src="/img/icons/statistics-01.svg" alt="Icon" />
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 d-flex">
                <div className="statistics-grid flex-fill">
                  <div className="statistics-content">
                    <h3>{`${
                      !data ? 0 : String(data?.upcomingBookings)?.padStart(2, 0)
                    }`}</h3>
                    <p>Upcoming Bookings</p>
                  </div>
                  <div className="statistics-icon">
                    <img src="/img/icons/statistics-03.svg" alt="Icon" />
                  </div>
                </div>
              </div>
              {/* <div className="col-xl-6 col-lg-6 col-md-6 d-flex">
                <div className="statistics-grid flex-fill">
                  <div className="statistics-content">
                    <h3>₹45,056</h3>
                    <p>Payments</p>
                  </div>
                  <div className="statistics-icon">
                    <img src="/img/icons/statistics-04.svg" alt="Icon" />
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Statistics;
