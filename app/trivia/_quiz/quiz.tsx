"use client";

import { useState, useEffect, useRef, createRef } from "react";

import { QuizProps } from "../../../types/quizTypes";
import QuestionComponent from "./question";

const Quiz: React.FC<QuizProps> = ({ questions, onFinish }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>(
    Array(questions.length).fill(null)
  );

  const [questionResults, setQuestionResults] = useState<number[]>(
    Array(questions.length).fill(-1)
  ); //? could probably pass this down to the question component as a prop to avoid having do logic there to determine the color of the answer

  // Add state variable to hold references to each step element
  const [stepRefs, setStepRefs] = useState<
    React.RefObject<HTMLLIElement>[]
  >([]);

  const stepsRef = useRef<HTMLUListElement>(null);

  // Initialize the references when the component mounts
  useEffect(() => {
    setStepRefs(questions.map(() => createRef<HTMLLIElement>()));
  }, [questions]);

  const getStepClass = (index: number) => {
    let stepClass = "";
    switch (questionResults[index]) {
      case -1:
        if (index === currentQuestion) {
          stepClass =
            "after:!ring-slate-500 after:!bg-slate-750 after:!text-slate-300";
        } else if (selectedAnswers[index - 1] !== null) {
          stepClass = "after:!bg-slate-750 after:!text-slate-300";
        }
        break;
      case 0:
        if (index === currentQuestion) {
          stepClass =
            "after:!ring-red-200 after:!bg-red-400 after:!text-slate-950";
        } else {
          stepClass = "after:!bg-red-400 after:!text-slate-950";
        }
        break;
      case 1:
        if (index === currentQuestion) {
          stepClass =
            "after:!ring-emerald-100 after:!bg-emerald-400 after:!text-slate-950";
        } else {
          stepClass = "after:!bg-emerald-400 after:!text-slate-950";
        }
        break;
      default:
        break;
    }
    return stepClass;
  };

  const onStepClick = (index: number) => {
    if (selectedAnswers[index - 1] !== null) {
      setCurrentQuestion(index);
    }
  };

  const onAnswer = (answer: string) => {
    setSelectedAnswers([
      ...selectedAnswers.slice(0, currentQuestion),
      answer,
      ...selectedAnswers.slice(currentQuestion + 1),
    ]);
    const isCorrect = answer === questions[currentQuestion].correctAnswer;
    const newQuestionResults = [...questionResults];
    newQuestionResults[currentQuestion] = isCorrect ? 1 : 0;
    setQuestionResults(newQuestionResults);
  };

  const onNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setTimeout(() => {
        const liElement = stepRefs[currentQuestion + 1]?.current;
        const ulElement = stepsRef.current;
  
        if (liElement && ulElement) {
          const ulRect = ulElement.getBoundingClientRect();
          const liRect = liElement.getBoundingClientRect();
  
          // Check if li element is not fully visible in the ul element
          if (liRect.bottom > ulRect.bottom) {
            liElement.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 0);
    } else {
      onFinish();
    }
  };

  return (
    <>
      <div className="flex flex-col flex-grow justify-between align-middle w-full h-full">
        <div className="flex flex-row flex-grow justify-around w-full h-full">
          <div className="flex flex-col w-[90%] items-center mr-2">
            <QuestionComponent
              question={questions[currentQuestion]}
              selectedAnswer={selectedAnswers[currentQuestion]}
              onAnswer={onAnswer}
            />
          </div>
          <ul ref={stepsRef} className="steps steps-vertical -mr-8 overflow-x-hidden max-h-[350px] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-850 scrollbar-thumb-rounded-md">
            {questions.map((question, index) => {
              const stepClass = getStepClass(index);
              return (
                <li
                  ref={stepRefs[index]}
                  tabIndex={0}
                  key={index}
                  className={`before:!bg-slate-850 after:ring-2 after:ring-slate-850 step ${stepClass}`}
                  onClick={() => onStepClick(index)}
                ></li>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-row justify-between mt-6">
          <button className="btn btn-error" onClick={onFinish}>
            Quit
          </button>

          <button
            className="btn btn-success"
            disabled={selectedAnswers[currentQuestion] === null}
            onClick={onNextQuestion}
          >
            {currentQuestion < questions.length - 1 ? "Next" : "Finish"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Quiz;
