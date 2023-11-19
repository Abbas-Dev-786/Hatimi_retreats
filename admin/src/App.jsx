import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import "bootstrap/scss/bootstrap.scss";
//eslint-disable-next-line
import * as bootstrap from "bootstrap";

import Aos from "aos";
import "aos/dist/aos.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Login from "./pages/Login";
import Notification from "./components/common/Notification";

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 0 } },
});

const App = () => {
  useEffect(() => {
    Aos.init();
    // Aos.refresh();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Notification />
      <div className="main-wrapper">
        <Routes>
          <Route path="/"></Route>

          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
};

export default App;
