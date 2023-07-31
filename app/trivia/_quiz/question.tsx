// question.tsx

// {decodeHtml(questions[currentQuestion].question)}

import React from 'react';
import { QuestionProps } from '@/types/quizTypes';
import { decodeHtml, toTitleCase } from '@/utils/utils';
import { TriviaDifficultyEnum } from '@/types/triviaTypes';

// Define the Question component
const QuestionComponent: React.FC<QuestionProps> = ({ question, selectedAnswer, onAnswer }) => {
  // Handle answer selection
  const handleSelectAnswer = (answer: string) => {
    if (selectedAnswer !== null) {
      return;
    }
    onAnswer(answer);
  };

  const submitAnswer = () => {
    if (selectedAnswer) {
      onAnswer(selectedAnswer);
    }
  };

  type DifficultyWithoutAny = Exclude<TriviaDifficultyEnum, TriviaDifficultyEnum.Any>;

  const difficultyColorMap: Record<DifficultyWithoutAny, string> = {
    [TriviaDifficultyEnum.Easy]: 'success',
    [TriviaDifficultyEnum.Medium]: 'warning',
    [TriviaDifficultyEnum.Hard]: 'error',
  };

  const getAnswerStyle = (index: number) => {
    let style = '';
    if (selectedAnswer !== null) {
      if (question.answers[index] === question.correctAnswer) {
        // return 'bg-emerald-400 text-slate-950 ring-emerald-200';
        style += 'bg-emerald-400 text-slate-950 ring-emerald-200 ';
      }
      else if (selectedAnswer === question.answers[index]) {
        // return 'bg-red-400 text-slate-950 ring-red-200';
        style += 'bg-red-400 text-slate-950 ring-red-200 ';
      }
      if (question.answers[index] === selectedAnswer) {
        style += 'ring-4'
      }
      return style;
    } else {
      return 'bg-slate-950 text-slate-400';
    }
  };

  // The render function
  return (
    <>
      <div className='flex flex-col text-center items-center gap-2 bg-slate-800 w-full px-3 py-3 rounded-md drop-shadow-lg'>
        <div className='flex flex-row justify-center gap-4 '>
          <div className='badge badge-info text-xs font-semibold'>
            {question.category}
          </div>
          <div className={`badge badge-${difficultyColorMap[question.difficulty as DifficultyWithoutAny]} text-xs font-semibold`}>
            {toTitleCase(question.difficulty)}
          </div>
        </div>
        <div className='font-semibold text-xl text-slate-100'>
          {decodeHtml(question.question)}
        </div>
      </div>
      <div className='mt-4 flex flex-col flex-grow items-center justify-center gap-4'>
        {
          question.answers.map((answer, index) => {
            const answerStyle = getAnswerStyle(index);
            return (
              <button className={`p-4 ring-2 ring-slate-400 min-w-[10rem] rounded-md ${answerStyle} w-full transition-colors`} key={index} onClick={() => handleSelectAnswer(answer)}>
                {decodeHtml(answer)}
              </button>
            );
          })
        }
      </div>
    </>
  );
}

export default QuestionComponent;
