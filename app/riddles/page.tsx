import { Metadata } from "next/types"
import Riddle from "./riddle"

export const metadata: Metadata = {
  title: 'Riddles',
  description: 'For minds that love a twisty tour, the sphinx awaits to test your lore.',
}

export default function Riddles() {
  return (
    <>
      <div className="text-center flex flex-col items-center w-full max-w-2xl">
        <h1 className="text-3xl text-emerald-400">{metadata.title as string}</h1>
        <p className="italic text-gray-400">{metadata.description}</p>
        <Riddle />
      </div>
    </>
  )
}
