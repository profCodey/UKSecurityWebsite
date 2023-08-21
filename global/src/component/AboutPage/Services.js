import React from "react";
import ServicesImage from "../Services";
import service1 from "../../assets/images/service1.jpg";
import crowdControl from "../../assets/images/crowdControl2.jpg";
import eventSecurity from "../../assets/images/eventSecurity.jpg";
import cctv2 from "../../assets/images/cctv2.jpg";
import workshop from "../../assets/images/workshop.jpg";
import consultancy from "../../assets/images/consultancy.jpg";

function OurServices() {
  let header1 = "Access Control Management";
  let text1 =
    "Efficiently manage entry and exit points, check security passes, ensuring only authorized personnel are allowed.";
  
   let header2 = "Crowd Management";
  let text2 =
    "Handle crowd flow, prevent overcrowding, and ensure a smooth experience.";
  
   let header3 = "Event Security";
  let text3 =
    "Secure events of all sizes, ensuring safety and order during gatherings.";
  
   let header4 = "CCTV Monitoring";
  let text4 =
    "Offer remote monitoring of surveillance cameras to enhance security.";
  
   let header5 = "Fire Checks & Safety Audits";
  let text5 =
    "Evaluate venues for health and safety compliance and recommend improvements, conduct routine fire safety inspections and drills.";
  
   let header6 = "Consulting Services:";
  let text6 =
    "Provide expert advice on security measures, risk assessments, and protocol development.";
  
  
  
 

  return (
    <div className="container m-auto mt-24 md:mt-32 lg:mt-52 ">
      <div className=" md:grid grid-cols-2 lg:grid-cols-3 w-4/5 mx-auto md:gap-x-20 ">
        <div className="">
          <ServicesImage header={header1} text={text1} image={service1} />
        </div>
        <div className="">
          <ServicesImage header={header2} text={text2} image={crowdControl} />
        </div>
        <div className="">
          <ServicesImage header={header3} text={text3} image={eventSecurity} />
        </div>
        <div className="">
          <ServicesImage header={header4} text={text4} image={cctv2} />
        </div>
        <div className="">
          <ServicesImage header={header5} text={text5} image={workshop} />
        </div>
        <div className="">
          <ServicesImage header={header6} text={text6} image={consultancy} />
        </div>
      </div>
    </div>
  );
}

export default OurServices;
