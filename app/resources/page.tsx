import { Metadata } from "next/types"

// {
//   title: "Blooket",
//   route: "https://www.blooket.com/",
//   icon: "https://www.blooket.com/favicon.ico",
// },
// {
//   title: "Kahoot!",
//   route: "https://create.kahoot.it/",
//   icon: "https://assets-cdn.kahoot.it/builder/v2/favicon.ico",
// },

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Plenty of extras to be found, here you will find resources abound.',
}

export default function Resources() {
  return (
    <>
      <div className="text-center flex flex-col items-center w-full max-w-xl">
        <h1 className="text-3xl text-emerald-400">{metadata.title as string}</h1>
        <p className="italic text-gray-400">{metadata.description}</p>
        <div className="mt-8">
          Chirp chirp.. chirp chirp.. 🦗
        </div>
      </div>
    </>
  )
}
