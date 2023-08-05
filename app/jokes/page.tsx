import { Metadata } from "next/types"
import Joke from "./joke"

export const metadata: Metadata = {
  title: 'Jokes',
  description: 'Puns and punchlines, gags and groans, we\'ve got jokes to lighten the tone.',
}

export default function Jokes() {
  return (
    <>
      <div className="text-center flex flex-col items-center w-full max-w-2xl">
        <h1 className="text-3xl text-emerald-400">{metadata.title as string}</h1>
        <p className="italic text-gray-400">{metadata.description}</p>
        <Joke />
      </div>
    </>
  )
}