"use client";

import React from "react";
import {
  TriviaConfigFormProps,
  triviaCategories,
  triviaTypesMap,
  TriviaTypeEnum,
  TriviaDifficultyEnum,
  triviaDifficultiesMap,
  TriviaCategoryEnum,
} from "../../types/triviaTypes";

const TriviaConfigForm: React.FC<TriviaConfigFormProps> = ({
  triviaConfig,
  setTriviaConfig,
  generateTrivia,
}) => {
  return (
    <>
      <h2 className="text-xl text-emerald-400">Configure a Question Set</h2>
      <form className="flex flex-col justify-center items-center w-full h-full gap-y-2">
        {/* a form with a select for the number of questions, category, difficulty, and type */}
        <div className="flex flex-col justify-center items-center w-full h-auto">
          <label htmlFor="numQuestions">Number of Questions</label>
          <input
            id="numQuestions"
            name="numQuestions"
            type="number"
            min={1}
            max={50}
            className="bg-slate-100 text-slate-700 rounded-md focus:border-emerald-400 w-2/3 mx-8"
            value={triviaConfig.numQuestions}
            onChange={(e) =>
              setTriviaConfig({
                ...triviaConfig,
                numQuestions: parseInt(e.target.value),
              })
            }
          />
        </div>
        <div className="flex flex-col justify-center items-center w-full h-auto">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            className="bg-slate-100 text-slate-700 rounded-md focus:border-emerald-400 w-2/3 mx-8"
            value={triviaConfig.category}
            onChange={(e) =>
              setTriviaConfig({
                ...triviaConfig,
                category: parseInt(e.target.value) as TriviaCategoryEnum,
              })
            }
          >
            {Array.from(triviaCategories, ([value, text]) => (
              <option key={value} value={value}>
                {text}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col justify-center items-center w-full h-auto">
          <label htmlFor="type">Difficulty</label>
          <select
            id="difficulty"
            name="difficulty"
            className="bg-slate-100 text-slate-700 rounded-md focus:border-emerald-400 w-2/3 mx-8"
            value={triviaConfig.difficulty}
            onChange={(e) =>
              setTriviaConfig({
                ...triviaConfig,
                difficulty: e.target.value as TriviaDifficultyEnum,
              })
            }
          >
            {Array.from(triviaDifficultiesMap, ([value, text]) => (
              <option key={value} value={value}>
                {text}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col justify-center items-center w-full h-auto">
          <label htmlFor="type">Type</label>
          <select
            id="type"
            name="type"
            className="bg-slate-100 text-slate-700 rounded-md focus:border-emerald-400 w-2/3 mx-8"
            value={triviaConfig.type}
            onChange={(e) =>
              setTriviaConfig({
                ...triviaConfig,
                type: e.target.value as TriviaTypeEnum,
              })
            }
          >
            {Array.from(triviaTypesMap, ([value, text]) => (
              <option key={value} value={value}>
                {text}
              </option>
            ))}
          </select>
        </div>
        <button
          className="font-semibold p-4 mt-4 border-2 border-emerald-400 text-emerald-400 rounded-md bg-slate-800 hover:bg-emerald-400 hover:text-slate-800 transition-all"
          onClick={generateTrivia}
        >
          Generate Trivia Questions!
        </button>
      </form>
    </>
  );
};

export default TriviaConfigForm;
