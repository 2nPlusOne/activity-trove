"use client";

import React from "react";

export default function Joke() {
  const getStrictModeFromLocalStorage = () => {
    const strictMode = localStorage.getItem("strict-mode");
    if (strictMode === null) {
      localStorage.setItem("strict-mode", "false");
      return false;
    }
    return strictMode === "true";
  };
  
  const [joke, setJoke] = React.useState("");
  const [punchline, setPunchline] = React.useState("");
  const [showPunchline, setShowPunchline] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [punchlineDisabled, setPunchlineDisabled] = React.useState(false);
  const [strictMode, setStrictMode] = React.useState(getStrictModeFromLocalStorage());
  const fetchUrl = strictMode ? "/api/jokes/random?strict-mode" : "/api/jokes/random";

  const getJoke = async () => {
    setLoading(true);
    const response = await fetch(fetchUrl);
    const data = await response.json();

    console.log(data)
    setJoke(data.setup);
    setPunchline(data.punchline);
    setShowPunchline(false);
    setPunchlineDisabled(false);
    setLoading(false);
  };

  React.useEffect(() => {
    getJoke();
  }, []);

  const revealPunchline = () => {
    setShowPunchline(true);
    setPunchlineDisabled(true);
  };

  const togglestrictMode = () => {
    setStrictMode(!strictMode);
    localStorage.setItem("strict-mode", new Boolean(!strictMode).toString());
  };

  return (
    <>
      <div className="flex flex-col items-center mt-8 w-auto">
        <div className="flex items-center">
          <label htmlFor="strict-mode" className="text-emerald-400 pr-2">
            Strict Mode
            <input
              type="checkbox"
              id="strict-mode"
              className="ml-2 w-5 h-5 checkbox checkbox-success focus:ring-0 focus:ring-offset-0"
              checked={strictMode}
              onChange={togglestrictMode}
            />
          </label>
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-circle btn-ghost btn-xs text-info align-middle"
            >
              <QuestionSVG />
            </label>
            <div
              tabIndex={0}
              className="card compact mt-1 dropdown-content z-[1] rounded-md bg-slate-800 w-64 md:w-72"
            >
              <div className="card-body text-white text-base">
                <p>
                  <b>When enabled</b>, all jokes come from a smaller, more curated set guaranteed to be kid-friendly. <br /><b>When disabled</b>, the pool is expanded to include an&nbsp;
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/15Dkatz/official_joke_api"
                    className="text-blue-500 focus:text-blue-400 hover:underline hover:text-blue-400 "
                  >
                    external API
                  </a>
                  &nbsp;with more jokes, the vast majority of which remain kid-friendly.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full p-4 m-2 bg-slate-800 text-white border-2 border-emerald-400 rounded-md shadow-lg transition-all">
          <p className="text-lg w-full flex flex-row items-center justify-center">{loading ? "Loading joke..." : joke }</p>
          {showPunchline && (
            <p className="text-lg text-emerald-400 pt-2">
              {loading ? "" : punchline}
            </p>
          )}
        </div>

        <div className="flex gap-2">
          <button
            className={`font-semibold p-4 border-2 border-emerald-400 text-emerald-400 rounded-md bg-slate-800 hover:bg-emerald-400 hover:text-slate-800 transition-all ${
              punchlineDisabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={revealPunchline}
            disabled={punchlineDisabled}
          >
            Reveal Punchline
          </button>
          <button
            className="font-semibold p-4 border-2 border-emerald-400 text-emerald-400 rounded-md bg-slate-800 hover:bg-emerald-400 hover:text-slate-800 transition-all"
            onClick={getJoke}
          >
            New Joke
          </button>
        </div>
      </div>
    </>
  );
}

const QuestionSVG = () => (
  <svg
    className="w-4 h-4 stroke-emerald-400 fill-none stroke-2"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
    <line x1="12" y1="17" x2="12.01" y2="17"></line>
  </svg>
);
