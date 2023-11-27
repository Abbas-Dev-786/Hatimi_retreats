import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllBookings } from "../../state/api";
import { Command, Umbrella } from "react-feather";
import { NavLink, useLocation } from "react-router-dom";

const tabsData = [
  {
    link: "/",
    img: "/img/icons/dashboard-icon.svg",
    text: "Dashboard",
  },
  {
    link: "/courts",
    img: "/img/icons/court-icon.svg",
    text: "Courts",
  },
  {
    link: "/bookings",
    img: "/img/icons/booking-icon.svg",
    text: "Bookings",
  },
];

const Tabs = () => {
  const location = useLocation();
  const { pathname } = location;

  const [activeTab, setActiveTab] = useState(pathname);

  const requests = 5;
  const { data } = useQuery({
    queryKey: ["bookings-r", "pending"],
    queryFn: getAllBookings,
  });

  return (
    <>
      <div className="dashboard-section coach-dash-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="dashboard-menu coaurt-menu-dash">
                <ul>
                  {tabsData.map((tab, i) => (
                    <li key={i} onClick={() => setActiveTab(tab.link)}>
                      <NavLink
                        to={`/dashboard${tab.link}`}
                        className={activeTab === tab.link ? "active" : ""}
                      >
                        <img src={tab.img} alt="Icon" />
                        <span>{tab.text}</span>
                      </NavLink>
                    </li>
                  ))}
                  <li onClick={() => setActiveTab("/requests")}>
                    <NavLink
                      to="/dashboard/requests"
                      className={activeTab === "/requests" ? "active" : ""}
                    >
                      <img src="/img/icons/request-icon.svg" alt="Icon" />
                      <span>Requests</span>
                      {requests && (
                        <span className="court-notify">
                          {data?.totalDocs ?? 0}
                        </span>
                      )}
                    </NavLink>
                  </li>
                  <li onClick={() => setActiveTab("/amenities")}>
                    <NavLink
                      to="/dashboard/amenities"
                      className={activeTab === "/amenities" ? "active" : ""}
                    >
                      <i>
                        <Umbrella />
                      </i>
                      <span className="mt-2">Amenities</span>
                    </NavLink>
                  </li>
                  <li onClick={() => setActiveTab("/rules")}>
                    <NavLink
                      to="/dashboard/rules"
                      className={activeTab === "/rules" ? "active" : ""}
                    >
                      <i>
                        <Command />
                      </i>
                      <span className="mt-2">Rules</span>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
