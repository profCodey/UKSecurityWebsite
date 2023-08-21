import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuildingShield,
  faUserTie,
  faUserGroup,
  faCircleUp,
  faPeopleArrows,
  faHandshakeAngle,
} from "@fortawesome/free-solid-svg-icons";
import Value from "../valueProposition/Value";

function CoreValues() {
  let iconFive = <FontAwesomeIcon icon={faPeopleArrows} />;
  let iconTwo = <FontAwesomeIcon icon={faBuildingShield} />;
  let iconSix = <FontAwesomeIcon icon={faHandshakeAngle} />;
  let iconOne = <FontAwesomeIcon icon={faUserTie} />;
  let iconFour = <FontAwesomeIcon icon={faUserGroup} />;
  let iconThree = <FontAwesomeIcon icon={faCircleUp} />;
  let text1 =
    "Safety is our top priority. We are unwavering in our commitment to creating secure environments for our clients and their patrons.";
  let text2 =
    "We conduct ourselves with the highest level of professionalism. Our team exemplifies integrity, reliability, and a dedication to upholding industry standards.";
  let text3 =
    "Our clients' needs come first. We tailor our services to meet individual requirements, ensuring unparalleled customer satisfaction.";
  let text4 =
    "We are dedicated to growth and learning. We continuously evolve our skills, techniques, and strategies to stay at the forefront of the industry.";
  let text5 =
    "We are more than a service provider; we are responsible community members. We take pride in contributing to safer and more secure neighborhoods.";
  let text6 =
    "We understand that trust is earned. We strive to build lasting partnerships with our clients, founded on trust, reliability, and mutual respect.";

  return (
    <div className=" w-4/5 mx-auto mt-8 md:mt-16 lg:mt-32 pb-32">
      <h2 className="text-4xl text-[#001f41] w-3/4 mx-auto text-center md:text-5xl lg:text-6xl">
        Our Core Values
      </h2>
      <div className="lg:flex lg:gap-32">
        <div>
          <Value title="Safety First" text={text1} icon={iconTwo} />
          <Value title="Professionalism" text={text2} icon={iconOne} />
          <Value
            title="Customer-Centric Approach"
            text={text3}
            icon={iconFour}
          />
        </div>
        <div>
          <Value title="Continuous Improvement" text={text4} icon={iconThree} />
          <Value title="Community Responsibility" text={text5} icon={iconFive} />
          <Value title="Trustworthy Partnership" text={text6} icon={iconSix} />
        </div>
      </div>
    </div>
  );
}

export default CoreValues;
