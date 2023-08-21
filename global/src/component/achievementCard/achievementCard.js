import React from "react";

function AchievementCard({ awardImg, awardCount, awardText }) {
  return (
    <div className="w-full h-full shadow-lg border-2 text-center flex flex-col justify-center items-center py-10 my-4">
      <p className="text-5xl lg:text-6xl">{awardImg}</p>
      <p className="text-4xl lg:text-5xl font-bold mt-6">
        {awardCount}
      </p>
      <p className="text-2xl mt-4">{awardText}</p>
    </div>
  );
}

export default AchievementCard;
