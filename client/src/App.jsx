import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";

import "bootstrap/scss/bootstrap.scss";
//eslint-disable-next-line
import * as bootstrap from "bootstrap";

import Aos from "aos";
import "aos/dist/aos.css";
import ContactUs from "./pages/ContactUs";
// import Events from "./pages/Events";
// import SingleEvent from "./pages/SingleEvent";
import Venues from "./pages/Venues";
import SingleVenue from "./pages/SingleVenue";
import UserBookings from "./pages/UserBookings";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProtectedRoute from "./components/common/ProtectedRoute";
import ScrollToTop from "./components/common/ScrollToTop";
import Notification from "./components/common/Notification";

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 0 } },
});

const App = () => {
  useEffect(() => {
    Aos.init({ once: true });
    Aos.refresh();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="main-wrapper">
        <Navbar />
        <ScrollToTop />
        <Notification />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />

            {/* <Route path="events">
              <Route index element={<Events />} />
              <Route path=":id" element={<SingleEvent />} />
            </Route> */}

            <Route path="venues">
              <Route index element={<Venues />} />
              <Route path=":id" element={<SingleVenue />} />
            </Route>

            <Route
              path="bookings"
              element={
                <ProtectedRoute>
                  <UserBookings />
                </ProtectedRoute>
              }
            />
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="contactus" element={<ContactUs />} />
          </Route>
        </Routes>
      </div>
    </QueryClientProvider>
  );
};

export default App;
