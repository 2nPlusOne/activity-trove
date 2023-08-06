"use client";

import React, { useState, useRef, useEffect } from "react";
import Icebreaker from "./icebreaker";
import icebreakerData from "@/app/_data/icebreakers.json";

interface Icebreaker {
  title: string;
  ages: string;
  participants: string;
  description: string;
}

const icebreakers: Icebreaker[] = icebreakerData;

// sort by title
icebreakers.sort((a, b) => a.title.localeCompare(b.title));

const IcebreakerList: React.FC = () => {
  const [active, setActive] = useState(-1);
  const [searchTerm, setSearchTerm] = useState("");
  const prevFilteredResultsRef = useRef<Icebreaker[]>([]);

  const filteredResults = icebreakers.filter((activity) => {
    return (
      activity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      activity.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  useEffect(() => {
    // If the filtered list has changed, reset active state
    if (
      JSON.stringify(prevFilteredResultsRef.current) !==
      JSON.stringify(filteredResults)
    ) {
      setActive(-1);
    }
    prevFilteredResultsRef.current = filteredResults; // Update the reference with the current list
  }, [filteredResults]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSelectRandom = () => {
    const randomActivity = Math.floor(Math.random() * icebreakers.length);
    // update search term to be the title of the random activity
    setSearchTerm(icebreakers[randomActivity].title);

    // Wait a small duration for the search term to update before setting active
    // This is to ensure that the view is re-rendered with the new search term before setting active.
    // One alternative is to use a useRef to store a boolean value that is set to true when the search
    // term is updated, and then set active in a useEffect that watches for that boolean value to change.
    // However, this is a bit more complicated and requires more code.
    setTimeout(() => {
      // set active to the random activity (which should be the first in the list)
      setActive(0);
    }, 20);
  }

  return (
    <div className="flex flex-col w-full items-center mt-8 gap-4">
      <div
        id="icebreaker-filter-row"
        className="flex flex-row w-full justify-center items-center gap-2"
      >
        <div className="relative w-full max-w-xs bg-slate-800 text-slate-200 rounded-md border-2 border-emerald-400 focus-within:border-emerald-400 focus-within:ring-1 focus-within:ring-emerald-200">
          <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
            <SearchIcon />
          </div>

          <input
            id="icebreaker-search"
            aria-label="Search by title or description"
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search by title or description"
            className="px-9 block w-full focus:ring-0 border-none bg-transparent"
          />

          <button
            id="icebreaker-clear-btn"
            title="Clear search"
            aria-label="Clear search"
            onClick={() => setSearchTerm("")}
            className="absolute inset-y-0 right-0 px-2 flex items-center"
          >
            <ClearIcon />
          </button>
        </div>

        <button
          id="icebreaker-random-btn"
          title="Select a random icebreaker"
          aria-label="Select a random icebreaker"
          onClick={handleSelectRandom}
          className="btn btn-square bg-transparent border-none text-emerald-400 bg-slate-900 hover:bg-slate-800"
        >
          <DiceIcon />
        </button>
      </div>
      {filteredResults.map((activity, index) => (
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
};

// components for icons
const SearchIcon = () => {
  return (
    <svg
      className=" stroke-slate-400"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
};

const ClearIcon = () => {
  return (
    <svg
      className="stroke-slate-400"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
};

const DiceIcon = () => {
  return (
    <svg
      className="stroke-emerald-400"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="12" height="12" x="2" y="10" rx="2" ry="2" />
      <path d="m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6" />
      <path d="M6 18h.01" />
      <path d="M10 14h.01" />
      <path d="M15 6h.01" />
      <path d="M18 9h.01" />
    </svg>
  );
};

export default IcebreakerList;
