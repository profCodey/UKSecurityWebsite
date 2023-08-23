import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";

function AchievementCard({ awardImg, awardCount, awardText, id }) {
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (animatedValue < awardCount) {
        setAnimatedValue(animatedValue + 1);
      } else {
        clearInterval(timer);
      }
    }, 10);

    return () => {
      clearInterval(timer);
    };
  }, [animatedValue, awardCount]);

  const animation = useSpring({ number: animatedValue, from: { number: 0 } });

  let achievementText =
    id === 2 ? ".2Million+" : id === 1 ? "+" : id === 4 ? "%" : "";

  return (
    <div className="w-full h-full shadow-lg border-2 text-center flex flex-col justify-center items-center py-10 my-4">
      <p className="text-5xl lg:text-6xl">{awardImg}</p>
      <p className="text-4xl lg:text-5xl font-bold mt-6 flex flex-row">
        <p>
          <animated.div>
            {animation.number.interpolate((val) => Math.floor(val))}
          </animated.div>
        </p>
        <p>{achievementText}</p>
      </p>
      <p className="text-2xl mt-4">{awardText}</p>
    </div>
  );
}

export default AchievementCard;
