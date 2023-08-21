import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Careers from "../pages/Careers";
import Services from "../pages/Services";
import Quote from "../pages/Quote";
import "./appRouter.css";
import Navbar from "../component/navbar/mainMenu/Navbar";
import Footer from "../component/footer/Footer";

function AppRouter() {
  return (
    <BrowserRouter>
      <div className="appRouter">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/services" element={<Services />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="*" element={() => "404 NOT FOUND"} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
