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
import Events from "./pages/Events";
import SingleEvent from "./pages/SingleEvent";

const App = () => {
  useEffect(() => {
    Aos.init();
    // Aos.refresh();
  }, []);

  return (
    <div className="main-wrapper">
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/events">
          <Route index element={<Events />} />
          <Route path=":id" element={<SingleEvent />} />
        </Route>
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </div>
  );
};

export default App;
