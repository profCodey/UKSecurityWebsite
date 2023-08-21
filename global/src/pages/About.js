import React from 'react'
import AboutUsHeader from '../component/AboutPage/AboutUs'
import AboutHeading from '../component/AboutPage/AboutHeading'
import Achievement from '../component/Home/achievement/achievement'
import OurMission from '../component/AboutPage/OurMission'
import CoreValues from '../component/AboutPage/CoreValues'

function About() {
  return (
    <div>
      <AboutUsHeader />
      <AboutHeading />
      <Achievement />
      <OurMission />

      <CoreValues />
    </div>
  );
}

  export default About