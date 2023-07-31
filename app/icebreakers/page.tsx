import { Metadata } from "next/types"

export const metadata: Metadata = {
  title: 'Icebreakers',
  description: 'Fuel a discussion, shatter the frost, with these icebreakers, you\'ll never be lost.',
}

export default function Icebreakers() {
  return (
    <>
      <div className="text-center flex flex-col items-center w-full max-w-2xl">
        <h1 className="text-3xl text-emerald-400">{metadata.title as string}</h1>
        <p className="italic text-gray-400">{metadata.description}</p>
        <div className="mt-4">
          Chirp chirp.. chirp chirp.. 🦗
        </div>
      </div>
    </>
  )
}
