'use client';

import { Metadata } from "next/types"
import Icebreaker from "./icebreaker"
import activities from '@/app/_data/icebreakers.json';
import { useState } from "react";

export const metadata: Metadata = {
  title: 'Icebreakers',
  description: 'Fuel a discussion, shatter the frost, with these icebreakers, you\'ll never be lost.',
}

export default function Icebreakers() {
  const [active, setActive] = useState(-1);

  return (
    <>
      <div className="text-center flex flex-col items-center w-full max-w-2xl">
        <h1 className="text-3xl text-emerald-400">{metadata.title as string}</h1>
        <p className="italic text-gray-400">{metadata.description}</p>
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
      </div>
    </>
  )
}
