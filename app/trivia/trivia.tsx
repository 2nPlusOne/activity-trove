"use client";

import React from "react";
import TriviaConfigForm from "./triviaConfigForm";
import { TriviaConfigState, defaultTriviaConfig } from "../../types/triviaTypes";
import { Question } from "../../types/quizTypes";
import Quiz from "./_quiz/quiz";
import { TriviaApiResponse } from "@/types/openTdbTypes";

export default function Trivia() {
  const fetchBaseUrl = "/api/trivia/";
  const [triviaConfig, setTriviaConfig] = React.useState<TriviaConfigState>(defaultTriviaConfig);
  const [questions, setQuestions] = React.useState<Question[] | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);

  const onGenerateTrivia = async (e: React.FormEvent<HTMLButtonElement>) => {
    setLoading(true);
    e.preventDefault();
    setTriviaConfig(triviaConfig);
    // configure the fetch url based on the triviaConfig
    const fetchUrl = `${fetchBaseUrl}?amount=${triviaConfig.numQuestions}${triviaConfig.category ? `&category=${triviaConfig.category}` : ""}${triviaConfig.difficulty ? `&difficulty=${triviaConfig.difficulty}` : ""}${triviaConfig.type != "" ? `&type=${triviaConfig.type }` : ""}`;
    // fetch the trivia data
    const response: TriviaApiResponse = await fetch(fetchUrl).then((res) => res.json());
    const questions = response.questions;
    // set the quiz data
    setQuestions(questions);
    setLoading(false);
  };

  const onFinish = () => {
    setQuestions(null);
  };
  
  return (
    <>
      <div className="mt-8 gap-y-6 flex flex-col justify-center items-center p-4 w-full min-h-[500px] bg-slate-900 rounded-2xl">
        {
          loading ? (
            <span className="loading loading-dots text-emerald-400 w-1/12" />
          )
          : questions ? (
            <Quiz questions={questions} onFinish={onFinish} />
          )
          : (
            <TriviaConfigForm triviaConfig={triviaConfig} setTriviaConfig={setTriviaConfig} generateTrivia={onGenerateTrivia} />
          )
        }
      </div>
    </>
  );
}
