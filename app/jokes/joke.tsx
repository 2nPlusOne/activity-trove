'use client';

import React from "react";

export default function Joke() {
  const [joke, setJoke] = React.useState("");
  const [punchline, setPunchline] = React.useState("");
  const [showPunchline, setShowPunchline] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [punchlineDisabled, setPunchlineDisabled] = React.useState(false);
  const [safeMode, setSafeMode] = React.useState(true);
  const baseUrl = "https://v2.jokeapi.dev/joke/Any?type=twopart";

  const getJoke = async () => {
    setLoading(true);
    const fetchUrl = safeMode ? `${baseUrl}&safe-mode` : baseUrl;
    const response = await fetch(fetchUrl);
    const data = await response.json();
    setJoke(data.setup);
    setPunchline(data.delivery);
    setShowPunchline(false);
    setPunchlineDisabled(false);
    setLoading(false);
  }

  React.useEffect(() => {
    setSafeMode(true);
    getJoke();
  }, []);

  const revealPunchline = () => {
    setShowPunchline(true);
    setPunchlineDisabled(true);
  }

  const toggleSafeMode = () => {
    setSafeMode(!safeMode);
  }

  return (
    <>
      <div className="flex flex-col items-center mt-8 w-auto">
        <div className="flex items-center">
          <input type="checkbox" id="safe-mode" className="mr-2" checked={safeMode} onChange={toggleSafeMode} />
          <label htmlFor="safe-mode" className="text-emerald-400">Safe Mode</label>
        </div>
        {safeMode && <p className="-mb-[12px] text-sm italic text-red-600 ">Safe mode is on, but still use your discretion.</p>}
        <div className="w-full p-4 m-4 bg-slate-800 text-white border-2 border-emerald-400 rounded-md shadow-lg transition-all">
          <p className="text-lg w-full">{loading ? "Loading joke..." : joke}</p>
          {showPunchline && <p className="text-lg text-emerald-400 pt-2">{loading ? "" : punchline}</p>}
        </div>
        
        <div className="flex gap-4">
          <button
            className={`p-4 border-2 border-emerald-400 text-emerald-400 rounded-md bg-slate-800 hover:bg-emerald-400 hover:text-slate-800 transition-all ${punchlineDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={revealPunchline}
            disabled={punchlineDisabled}
          >
            Reveal Punchline
          </button>
          <button
            className="p-4 border-2 border-emerald-400 text-emerald-400 rounded-md bg-slate-800 hover:bg-emerald-400 hover:text-slate-800 transition-all"
            onClick={getJoke}
          >
            New Joke
          </button>
        </div>
      </div>
    </>
  )
}
