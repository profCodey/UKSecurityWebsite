import React from "react";
import { Link } from "react-router-dom";
import proccesswide from "../../assets/images/processwide.jpg";
import processlong from "../../assets/images/processlong.jpg";
import ProcessSub from "./processSub";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuildingShield,
  faMask,
  faFileShield,
  faPersonMilitaryPointing,
} from "@fortawesome/free-solid-svg-icons";
import MainButton from "../button/button";

function AboutProcess() {
  let header1 = "1. Security Assessment";
  let text1 =
    "Our process begins with a thorough assessment of your venue or event. We analyze the layout, risks, and specific security needs to create a tailored plan.";

  let text2 =
    "Based on the assessment, we design a customized security strategy. This includes crowd management plans, emergency response protocols, and efficient access control measures.";

  let text3 =
    "Our highly trained door supervisors are strategically placed to ensure effective security. They manage access, monitor crowds, and swiftly address any situations that arise.";

  let text4 =
    "Throughout the engagement, we execute the security plan with precision. After the event or venue operations, we review the effectiveness of the plan and make adjustments as needed.";

  const isSmallDevice = window.innerWidth <= 480;
  let smallDevices = {
    backgroundImage: `url(${processlong})`,
  };

  let containerStyle = {
    backgroundImage: `url(${isSmallDevice ? processlong : proccesswide})`,
    height: "auto",
    width: "100vw",
  };

  // let containerStyle;
  // isSmallDevice
  //   ? (containerStyle = smallDevices)
  //   : containerStyle = largeDevices;
  return (
    <div className="container mb-16 lg:mt-32">
      <div
        className="relative   bg-dark 
        bg-[center_top_-7rem] bg-cover bg-cover py-16 lg:py-32 "
        style={containerStyle}
      >
        <div className="grid md:grid-cols-2 gap-y-16 lg:grid-cols-4 lg:gap-16 mx-auto h-full w-3/4 ">
          <div className="h-full">
            <ProcessSub
              img={<FontAwesomeIcon icon={faMask} />}
              header={header1}
              text={text1}
            />
          </div>
          <div className="h-full">
            <ProcessSub
              img={<FontAwesomeIcon icon={faFileShield} />}
              header="2. Tailored Solution Design"
              text={text2}
            />
          </div>
          <div className="h-full">
            <ProcessSub
              img={<FontAwesomeIcon icon={faPersonMilitaryPointing} />}
              header="3. Experienced Deployment"
              text={text3}
            />
          </div>
          <div className="h-full">
            <ProcessSub
              img={<FontAwesomeIcon icon={faBuildingShield} />}
              header="4. Seamless Execution and Review"
              text={text4}
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-black opacity-70 z-5"></div>
      </div>

      <div className="w-screen mx-auto mb-16 md:mb-32">
        <h2 className="w-full text-center text-3xl text-[#001f41] mx-auto mt-12 lg:mt-32 md:text-4xl lg:text-5xl ">
          Empowering Your Security Journey Ahead.
        </h2>
        <Link to="/quotes">
          <div className="mx-auto text-center mt-16">
            <MainButton
              text="Let's Work Together"
              width="220px"
              height="50px"
            />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default AboutProcess;
