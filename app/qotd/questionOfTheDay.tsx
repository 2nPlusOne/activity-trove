'use client';

import React from "react";

export default function QuestionOfTheDay() {
  const [question, setQuestion] = React.useState("");
  const [loading, setLoading] = React.useState(true);
  const fetchUrl = "/api/qotd/random";

  const getQuestion = async () => {
    setLoading(false); // set to true if we're loading from external API
    const response = await fetch(fetchUrl);
    const data = await response.json();

    setQuestion(data.question);
    setLoading(false);
  }

  React.useEffect(() => {
    getQuestion();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center mt-8 w-auto">
        <div className="flex items-center text-center">
        </div>
        <div className="w-full p-4 m-2 bg-slate-800 text-white border-2 border-emerald-400 rounded-md shadow-lg transition-all">
          <p className="text-lg w-full">{loading ? "Loading question..." : question}</p>
        </div>
        
        <button
          className="font-semibold p-4 border-2 border-emerald-400 text-emerald-400 rounded-md bg-slate-800 hover:bg-emerald-400 hover:text-slate-800 transition-all"
          onClick={getQuestion}
        >
          New Question
        </button>
      </div>
    </>
  )
}
