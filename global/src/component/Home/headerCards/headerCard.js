import React from 'react'
import "./headerCard.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDumbbell,
  faShieldHalved,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

function HeaderCard() {
  return (
    <div className="headerCard">
      {/* <div className="headerCards0 headerCardChild"></div> */}
      <div className="headerCards1 headerCardChild">
        <div className=" cardIcon">
          <FontAwesomeIcon icon={faDumbbell} className="cardIconImg" />
        </div>
        <h3>Expertise You Can Trust</h3>
        <p>
          With a combined experience of over a decade, our licensed door
          supervisors are well-versed in managing access control, crowd
          dynamics, and conflict resolution. Rest assured, your venue's safety
          is in capable hands.
        </p>
      </div>
      <div className="headerCards2 headerCardChild">
        <div className=" cardIcon">
          <FontAwesomeIcon icon={faShieldHalved} className="cardIconImg" />
        </div>
        <h3>Tailored Security Solutions</h3>
        <p>
          Every venue is unique, and so are our security solutions. We craft
          personalised plans that align with your establishment's specific
          needs. From small gatherings to large events, we've got you covered.
        </p>
      </div>
      <div className="headerCards3 headerCardChild">
        <div className=" cardIcon">
          <FontAwesomeIcon icon={faUserGroup} className="cardIconImg" />
        </div>
        <h3>Enhancing Patron Experience</h3>
        <p>
          We believe security doesn't mean sacrificing a welcoming atmosphere.
          Our friendly door supervisors maintain a positive environment,
          ensuring that every guest feels comfortable and safe.
        </p>
      </div>
    </div>
  );
}

export default HeaderCard