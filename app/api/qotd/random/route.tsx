// This file is the nextjs 13 app router api route handler for /api/qotd/random

import questions from '@/app/_data/qotd.json';
import { NextResponse } from 'next/server';

export async function GET() {
  // get a random question of the day from the qotd.json file
  const data = questions[Math.floor(Math.random() * questions.length)];
  const response = { question: data };
  console.log(response);
  // return the question as json
  return NextResponse.json(response);
}