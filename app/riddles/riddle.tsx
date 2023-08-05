'use client';

import React from "react";

export default function Riddle() {
  const [riddle, setRiddle] = React.useState("");
  const [answer, setAnswer] = React.useState("");
  const [showAnswer, setShowAnswer] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [answerDisabled, setAnswerDisabled] = React.useState(false);
  const fetchUrl = "/api/riddles/random";

  const getRiddle = async () => {
    setLoading(true);
    // fetch the riddle from the api with caching disabled
    const response = await fetch(fetchUrl, { cache: "no-store" });
    const data = await response.json();
    console.log(data);

    setRiddle(data.riddle);
    setAnswer(data.answer);
    setShowAnswer(false);
    setAnswerDisabled(false);
    setLoading(false);
  }

  React.useEffect(() => {
    getRiddle();
  }, []);

  const revealAnswer = () => {
    setShowAnswer(true);
    setAnswerDisabled(true);
  }

  return (
    <>
      <div className="flex flex-col items-center mt-8 w-auto">
        <div className="flex items-center text-center">
        </div>
        <div className="w-full p-4 m-2 bg-slate-800 text-white border-2 border-emerald-400 rounded-md shadow-lg transition-all">
          <p className="text-lg w-full">{loading ? "Loading riddle..." : riddle}</p>
          {showAnswer && <p className="text-lg text-emerald-400 pt-2">{loading ? "" : answer}</p>}
        </div>
        
        <div className="flex gap-2">
          <button
            className={`font-semibold p-4 border-2 border-emerald-400 text-emerald-400 rounded-md bg-slate-800 hover:bg-emerald-400 hover:text-slate-800 transition-all ${answerDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={revealAnswer}
            disabled={answerDisabled}
          >
            Reveal Answer
          </button>
          <button
            className="font-semibold p-4 border-2 border-emerald-400 text-emerald-400 rounded-md bg-slate-800 hover:bg-emerald-400 hover:text-slate-800 transition-all"
            onClick={getRiddle}
          >
            New Riddle
          </button>
        </div>
      </div>
    </>
  )
}
