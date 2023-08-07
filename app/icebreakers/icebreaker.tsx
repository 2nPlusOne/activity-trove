import React, { useState, useRef, useEffect } from 'react';

interface IcebreakerProps {
  title: string;
  ages: string;
  participants: string;
  description: string;
  id: number;
  active: number;
  setActive: (id: number) => void;
}

const Icebreaker: React.FC<IcebreakerProps> = ({
  title,
  ages,
  participants,
  description,
  id,
  active,
  setActive,
}) => {
  const [maxHeight, setMaxHeight] = useState('0');
  const ref = useRef<HTMLDivElement>(null);
  const isActive = active === id;

  useEffect(() => {
    if (ref.current) {
      setMaxHeight(isActive ? `${ref.current.scrollHeight}px` : '0');
    }
  }, [isActive]);

  const handleButtonClick = () => {
    setActive(isActive ? -1 : id);
  };

  return (
    <div
      className="flex flex-col justify-between w-full items-center 
      bg-slate-900 rounded-lg ring-2 ring-emerald-400 transition-all duration-200 
      focus-within:ring-4 focus-within:ring-emerald-100"
    >
      <button
        onClick={handleButtonClick}
        className="flex flex-row w-full justify-between items-center gap-2 py-2 px-3 focus:outline-none"
        aria-expanded={isActive}
        aria-controls={`icebreaker-${id}`}
        aria-label="Toggle icebreaker description"
        aria-labelledby={`icebreaker-${id}`}
      >
        <h1 className="text-xl text-emerald-400">{title}</h1>
        <div className='flex flex-row justify-center gap-2 items-center'>
          <div className='inline-block whitespace-nowrap rounded-full bg-sky-400 text-slate-950 text-xs font-semibold px-2 py-1 text-center h-fit leading-none'>
            Ages: {ages}
          </div>
          <div className={`inline-block whitespace-nowrap rounded-full bg-slate-400 text-slate-950 text-xs font-semibold px-2 py-1 text-center align-baseline h-fit leading-none `}>
            {participants} Participants
          </div>
          <ChevronDown active={isActive} />
        </div>
      </button>
      <div style={{ maxHeight: `${maxHeight}` }} className="overflow-hidden transition-max-height duration-500 ease-in-out" ref={ref}>
        <p className="text-gray-400 p-4">{description}</p>
      </div>
    </div>
  );
}

interface ChevronDownProps {
  active: boolean;
}

const ChevronDown = ({ active }: ChevronDownProps) => {
  return (
    <div className={`ml-4 transform transition-transform duration-300 ${active ? 'rotate-180' : ''}`}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
    </div>
  )
}

export default Icebreaker;