import { Metadata } from "next/types"
import Trivia from "./trivia"

export const metadata: Metadata = {
  title: 'Trivia',
  description: 'Quizzes and facts, many an option, ready to test your trivia noggin?',
}

export default function Jokes() {
  return (
    <>
      <div className="text-center flex flex-col items-center w-full max-w-3xl">
        <h1 className="text-3xl text-emerald-400">{metadata.title as string}</h1>
        <p className="italic text-gray-400">{metadata.description}</p>
        <Trivia />
      </div>
    </>
  )
}
