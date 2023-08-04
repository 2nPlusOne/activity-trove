import React from "react";

interface IcebreakerProps {
  title: string;
  ages: string;
  participants: string;
  description: string;
}

const Icebreaker: React.FC<IcebreakerProps> = ({
  title,
  ages,
  participants,
  description,
}) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center p-4 w-full bg-slate-900 rounded-lg">
        <h1 className="text-xl text-emerald-400">{title}</h1>
        <div className='flex flex-row justify-center gap-2 py-1'>
          <div className='inline-block whitespace-nowrap rounded-full bg-sky-400 text-slate-950 text-xs font-semibold px-2 py-1 text-center align-baseline leading-none'>
            {ages}
          </div>
          <div className={`inline-block whitespace-nowrap rounded-full bg-slate-400 text-slate-950 text-xs font-semibold px-2 py-1 text-center align-baseline leading-none `}>
            {participants} Participants
          </div>
        </div>
        <p className="text-gray-400">{description}</p>
      </div>
    </>
  );
}

export default Icebreaker;