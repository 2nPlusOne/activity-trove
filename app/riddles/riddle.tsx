'use client';

import { useState, useEffect} from "react";

export default function Riddle() {
  const [riddle, setRiddle] = useState("");
  const [answer, setAnswer] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);
  const [loading, setLoading] = useState(true);
  const [answerDisabled, setAnswerDisabled] = useState(false);
  const fetchUrl = "/api/riddles/random";

  const getRiddle = async () => {
    setLoading(true);
    const response = await fetch(fetchUrl, );
    const data = await response.json();

    setRiddle(data.riddle);
    setAnswer(data.answer);
    setShowAnswer(false);
    setAnswerDisabled(false);
    setLoading(false);
  }

  useEffect(() => {
    getRiddle();
  }, []);

  const revealAnswer = () => {
    setShowAnswer(true);
    setAnswerDisabled(true);
  }

  return (
    <>
      <div className="flex flex-col justify-between w-full h-[15rem] items-center align-middle mt-8">
        <div className="w-full p-4 m-2 bg-slate-800 text-white border-2 border-emerald-400 rounded-md shadow-lg transition-all">
          <p className="text-lg w-full">{loading ? "Loading riddle..." : riddle}</p>
          {showAnswer && <p className="text-lg text-emerald-400 pt-2">{loading ? "" : answer}</p>}
        </div>
        
        <div className="flex gap-4 pt-2">
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
