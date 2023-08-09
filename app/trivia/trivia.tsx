"use client";

import { useState } from "react";

import TriviaConfigForm from "./triviaConfigForm";
import {
  TriviaConfigState,
  defaultTriviaConfig,
} from "../../types/triviaTypes";
import { Question } from "../../types/quizTypes";
import Quiz from "./_quiz/quiz";
import { TriviaApiResponse } from "@/types/openTdbTypes";

export default function Trivia() {
  const fetchBaseUrl = "/api/trivia/";
  const [triviaConfig, setTriviaConfig] =
    useState<TriviaConfigState>(defaultTriviaConfig);
  const [questions, setQuestions] = useState<Question[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const onGenerateTrivia = async (e: React.FormEvent<HTMLButtonElement>) => {
    setLoading(true);
    e.preventDefault();
    setTriviaConfig(triviaConfig);
    // configure the fetch url based on the triviaConfig
    const fetchUrl = `${fetchBaseUrl}?amount=${triviaConfig.numQuestions}${
      triviaConfig.category ? `&category=${triviaConfig.category}` : ""
    }${
      triviaConfig.difficulty ? `&difficulty=${triviaConfig.difficulty}` : ""
    }${triviaConfig.type != "" ? `&type=${triviaConfig.type}` : ""}`;
    // fetch the trivia data
    const response: TriviaApiResponse = await fetch(fetchUrl).then((res) =>
      res.json()
    );
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
      <div className="mt-8 gap-y-6 flex flex-col justify-center items-center p-4 w-full min-h-[500px] bg-slate-900 rounded-2xl" role="main" aria-labelledby="trivia-section">
        {loading ? (
          <span className="loading loading-dots text-emerald-400 w-1/12" aria-label="Loading..."/>
        ) : questions ? (
          <Quiz questions={questions} onFinish={onFinish} />
        ) : (
          <TriviaConfigForm
            triviaConfig={triviaConfig}
            setTriviaConfig={setTriviaConfig}
            generateTrivia={onGenerateTrivia}
            aria-label="Trivia Configuration Form"
          />
        )}
      </div>
      <p id="trivia-data-license-section" className="pt-2">
          Trivia data provided under 
          <a
            rel="license"
            href="http://creativecommons.org/licenses/by-sa/4.0/"
            target="_blank"
            aria-label="Link to Creative Commons License"
            className="mx-1"
          >
            <img
              alt="Creative Commons License logo"
              className="border-0 inline"
              src="https://i.creativecommons.org/l/by-sa/4.0/80x15.png"
            />
          </a>
          by 
          <a
            href="https://opentdb.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to Open Trivia Database"
            className="text-emerald-400 hover:underline mx-1"
          >
            Open Trivia Database
          </a>
        </p>
    </>
  );
}
