import { Route, Routes, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import * as bootstrap from "bootstrap";

import "bootstrap/scss/bootstrap.scss";
//eslint-disable-next-line

import Login from "./pages/Login";
import Dashboard from "./pages/dashboard";
import Courts from "./pages/Courts";
import Request from "./pages/Request";

import Notification from "./components/common/Notification";
import PageNotFound from "./pages/PageNotFound";
import ProtectedRoute from "./components/common/ProtectedRoute";
import Bookings from "./pages/Bookings";
import Amenities from "./pages/Amenities";
import Rules from "./pages/Rules";
import NewCourt from "./pages/NewCourt";

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 0 } },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Notification />
      <div className="main-wrapper">
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<ProtectedRoute />}>
            <Route index element={<Dashboard />} />

            <Route path="courts">
              <Route index element={<Courts />} />
              <Route path="new" element={<NewCourt />} />
            </Route>

            <Route path="bookings" element={<Bookings />} />
            <Route path="requests" element={<Request />} />
            <Route path="amenities" element={<Amenities />} />
            <Route path="rules" element={<Rules />} />
          </Route>

          <Route path="/login" element={<Login />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
};

export default App;
