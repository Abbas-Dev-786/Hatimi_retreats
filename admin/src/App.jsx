import { Route, Routes } from "react-router-dom";

import "bootstrap/scss/bootstrap.scss";
//eslint-disable-next-line
import * as bootstrap from "bootstrap";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Login from "./pages/Login";
import Dashboard from "./pages/dashboard";
import Courts from "./pages/Courts";
import Request from "./pages/Request";

import Notification from "./components/common/Notification";
import PageNotFound from "./pages/PageNotFound";
import ProtectedRoute from "./components/common/ProtectedRoute";

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 0 } },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Notification />
      <div className="main-wrapper">
        <Routes>
          <Route path="/" element={<ProtectedRoute />}>
            <Route index path="dashboard" element={<Dashboard />} />
            <Route path="courts" element={<Courts />} />
            <Route path="request" element={<Request />} />
          </Route>

          <Route path="/login" element={<Login />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
};

export default App;
