import { Metadata } from "next/types"
import QuestionOfTheDay from "./questionOfTheDay"

export const metadata: Metadata = {
  title: 'Question of the Day',
  description: 'A daily question to kindle the mind, sparking discussions, one of a kind.',
}

export default function QotD() {
  return (
    <>
      <div className="text-center flex flex-col items-center w-full max-w-xl">
        <h1 className="text-3xl text-emerald-400">{metadata.title as string}</h1>
        <p className="italic text-gray-400">{metadata.description}</p>
        <QuestionOfTheDay />
      </div>
    </>
  )
}
