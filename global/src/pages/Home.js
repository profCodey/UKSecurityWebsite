import React from "react";
import Header from "../component/Home/header/header";
import HeaderCard from "../component/Home/headerCards/headerCard";
import BelowCard from "../component/Home/BelowCard/BelowCard";
import AboutUs from "../component/Home/AboutUs/AboutUs";
import Services from "../component/Home/OurServices/OurServices";
import Faq from "../component/Home/faq/Faq";
import Achievement from "../component/Home/achievement/achievement";

function Homepage() {
  return (
    <div>
      <Header />
      <HeaderCard />
      <BelowCard />
      <Achievement />
      <AboutUs />
      <Faq />
      <Services />
    </div>
  );
}

export default Homepage;
