// this file is a nextjs 13 app router api route handler for /api/jokes

import jokes from "../jokes.json";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.nextUrl);
  let data = {};

  // if the request has a search param of safe-mode,
  // then only use the jokes saved in the jokes.json file
  const useExternal = !searchParams.has("strict-mode") && Math.random() > 0.5;
  if (useExternal) {
    data = await fetch("https://official-joke-api.appspot.com/random_joke").then(
      (res) => res.json()
    );
  } else {
    data = jokes[Math.floor(Math.random() * jokes.length)];
    // simulate asynchronous response by waiting between 100ms and 500ms
    await new Promise((resolve) => setTimeout(resolve, Math.floor(Math.random() * 400) + 100));
  }

  // return the joke as json
  return NextResponse.json(data);
}
