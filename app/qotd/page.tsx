import { Metadata } from "next/types"
import Riddle from "./riddle"

export const metadata: Metadata = {
  title: 'Question of the Day',
  description: 'A daily question to kindle the mind, fueling discussions, one of a kind.',
}

export default function QotD() {
  return (
    <>
      <div className="text-center flex flex-col items-center w-full max-w-xl">
        <h1 className="text-3xl text-emerald-400">{metadata.title as string}</h1>
        <p className="italic text-gray-400">{metadata.description}</p>
        <div className="mt-4">
          Chirp chirp.. chirp chirp.. 🦗
        </div>
      </div>
    </>
  )
}
