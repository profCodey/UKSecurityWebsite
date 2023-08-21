import React from "react";
import AchievementCard from "../../achievementCard/achievementCard";
import "./achievement.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faPeopleGroup,
  faUserGroup,
  faFaceSmile,
} from "@fortawesome/free-solid-svg-icons";

function Achievement() {
  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-center align-center  w-full lg:w-5/6 lg:mx-auto lg:justify-center lg:gap-20 mb-32">
        <div className="lg:w-1/5">
          <AchievementCard
            awardImg={<FontAwesomeIcon icon={faBuilding} />}
            awardCount="2000+"
            awardText="Venue Successful Secured"
          />
        </div>
        <div className="lg:w-1/5">
          <AchievementCard
            awardImg={<FontAwesomeIcon icon={faPeopleGroup} />}
            awardCount="2 Million+"
            awardText="Attendees Safely Managed"
          />
        </div>
        <div className="lg:w-1/5">
          <AchievementCard
            awardImg={<FontAwesomeIcon icon={faUserGroup} />}
            awardCount="300+"
            awardText="Clients"
          />
        </div>
        <div className="lg:w-1/5">
          <AchievementCard
            awardImg={<FontAwesomeIcon icon={faFaceSmile} />}
            awardCount="98%"
            awardText="Client Satisfaction Rate"
          />
        </div>
      </div>

      {/* <div className="container-fluid"> */}
    </div>
  );
}

export default Achievement;
