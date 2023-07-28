import riddles from '../riddles.json'
import { NextResponse } from 'next/server';

export async function GET() {
  // get a random riddle from the riddles.json file
  const data = riddles[Math.floor(Math.random() * riddles.length)];
  // return the riddle as json
  return NextResponse.json(data);
}