// This file is the nextjs 13 app router api route handler for /api/riddles/random

import riddles from '@/app/_data/riddles.json';
import { NextResponse } from 'next/server';

// Route segment options
export const dynamic = 'force-dynamic'

export async function GET() {
  // get a random riddle from the riddles.json file
  const data = riddles[Math.floor(Math.random() * riddles.length)];

  // return the riddle as json
  return NextResponse.json(data);
}