// This file is the nextjs 13 app router api route handler for /api/trivia

import { NextRequest, NextResponse } from "next/server";
import { Question } from "@/types/quizTypes";
import { shuffle } from "@/utils/utils";
import { OpenTDBResponse, ResponseCodeMap, ResponseCodeEnum } from "@/types/openTdbTypes";

// Route segment options
export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.nextUrl);
  const amount = searchParams.get("amount");
  const category = searchParams.get("category");
  const difficulty = searchParams.get("difficulty");
  const type = searchParams.get("type");

  // fetch the trivia data
  const data: OpenTDBResponse = await fetch(`https://opentdb.com/api.php?amount=${amount}${category ? `&category=${category}` : ""}${difficulty ? `&difficulty=${difficulty}` : ""}${type ? `&type=${type}` : ""}`).then((res) => res.json());
  
  // initialize response variables
  const responseCode = data.response_code as ResponseCodeEnum;
  const responseMessage = ResponseCodeMap.get(responseCode);
  let questions: Question[] = [];

  if (responseCode == 0) {
    questions = data.results.map((question: any) => {
      const answers = question.type == "boolean" ? ["True", "False"] : [...question.incorrect_answers, question.correct_answer];
      // remove "Entertainment: ", etc from the category
      question.category = question.category.replace(/^[a-zA-Z]+: /, "");
      return {
        category: question.category,
        type: question.type,
        difficulty: question.difficulty,
        question: question.question,
        answers: shuffle(answers),
        correctAnswer: question.correct_answer,
      };
    });
  }

  // wait for between half and a second for the loading spinner to show and delayed gratification to kick in
  await new Promise((resolve) => setTimeout(resolve, Math.floor(Math.random() * 500) + 500));

  return NextResponse.json({ responseCode, responseMessage, questions});
}
