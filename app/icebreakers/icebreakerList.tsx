'use client';

import React, { useState } from "react";
import Icebreaker from "./icebreaker"
import activities from '@/app/_data/icebreakers.json';

const IcebreakerList: React.FC = () => {
  const [active, setActive] = useState(-1);
  
  return (
    <div className="flex flex-col w-full items-center mt-8 gap-4">
      {activities.map((activity, index) => (
        <Icebreaker
          key={index}
          id={index}
          active={active}
          setActive={setActive}
          title={activity.title}
          ages={activity.ages}
          participants={activity.participants}
          description={activity.description}
        />
      ))}
    </div>
  );
}

export default IcebreakerList;