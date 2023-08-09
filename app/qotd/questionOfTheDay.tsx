'use client';

import { useState, useEffect } from "react";

export default function QuestionOfTheDay() {
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(true);
  const fetchUrl = "/api/qotd/random";

  const getQuestion = async () => {
    setLoading(true);
    const response = await fetch(fetchUrl);
    const data = await response.json();

    setQuestion(data.question);
    setLoading(false);
  }

  useEffect(() => {
    getQuestion();
  }, []);

  return (
    <>
      <div className="flex flex-col justify-between w-full h-[11.5rem] items-center align-middle mt-8">
        <div className="w-full p-4 m-2 bg-slate-800 text-white border-2 border-emerald-400 rounded-md shadow-lg transition-all">
          <p className="text-lg w-full">{loading ? "Loading question..." : question}</p>
        </div>
        
        <button
          className="font-semibold p-4 m-2 border-2 border-emerald-400 text-emerald-400 rounded-md bg-slate-800 hover:bg-emerald-400 hover:text-slate-800 transition-all"
          onClick={getQuestion}
        >
          New Question
        </button>
      </div>
    </>
  )
}
