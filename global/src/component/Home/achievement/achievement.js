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
            awardCount={700}
            awardText="Venue Successful Secured"
            id={1}
          />
        </div>
        <div className="lg:w-1/5">
          <AchievementCard
            awardImg={<FontAwesomeIcon icon={faPeopleGroup} />}
            awardCount={1}
            awardText="Attendees Safely Managed"
            id={2}
          />
        </div>
        <div className="lg:w-1/5">
          <AchievementCard
            awardImg={<FontAwesomeIcon icon={faUserGroup} />}
            awardCount={300}
            awardText="Clients"
            id={3}
          />
        </div>
        <div className="lg:w-1/5">
          <AchievementCard
            awardImg={<FontAwesomeIcon icon={faFaceSmile} />}
            awardCount={98}
            awardText="Client Satisfaction Rate"
            id={4}
          />
        </div>
      </div>

      {/* <div className="container-fluid"> */}
    </div>
  );
}

export default Achievement;
