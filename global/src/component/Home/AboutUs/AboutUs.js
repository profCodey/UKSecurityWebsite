import React from "react";
import "./aboutUs.css";
import Value from "../../valueProposition/Value";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuildingShield,
  faPersonMilitaryPointing,
  faHandshakeAngle,
} from "@fortawesome/free-solid-svg-icons";
import security from "../../../assets/images/security.jpg";


function AboutUs() {
let iconOne = <FontAwesomeIcon icon={faPersonMilitaryPointing} />;
    let iconTwo = <FontAwesomeIcon icon={faBuildingShield} />;
    let iconThree = <FontAwesomeIcon icon={faHandshakeAngle} />;
    let text1 =
      "Our door supervisors are vetted to the British Standard BS7858. They are registered and trained to SITO and BIIAB standards (National Certificate for Door Supervisors Licensed Premises). They are handpicked and undergo rigorous training, equipped with the latest security techniques and crowd management strategies.";
      let text2 =
          "We are licensed by the Security Industry Authority (SIA) and other security parastatals and we adhere strictly to all industry regulations and guidelines . You can trust us to conduct our services responsibly and with the utmost professionalism.";
    let text3 =
      "We prioritize the safety and satisfaction of your customers and staff. Our door supervisors are not just vigilant security personnel; they also embody a friendly and approachable demeanor, making your patrons feel comfortable and welcomed.";


    

  return (
    <>
      <div className="aboutUs">
        <div className="aboutUsTop">
          <h2>
            "We Are A Trusted Top Security Company With Over
            <span style={{ color: "#ff9d2f" }}> 10 Years</span> Of Experience
          </h2>
          <p>
            We are your trusted partner in providing professional door
            supervisory services across the UK. We take pride in ensuring the
            safety and security of your establishment and its patrons, allowing
            you to focus on providing an enjoyable and welcoming environment for
            all.
          </p>
          <div className="aboutUsTopChile">
            <Value title="Trained Professionals" text={text1} icon={iconOne} />
            <Value
              title="Compliance and Reliability"
              text={text2}
              icon={iconTwo}
            />
            <Value
              title="Customer-Focused Approach"
              text={text3}
              icon={iconThree}
            />
          </div>
        </div>
        <div className="aboutUsBottom">
          <div className="aboutUsBottomStyle"></div>
          <img src={security} alt="two door supervisors" />
        </div>
      </div>
    </>
  );
}

export default AboutUs;
