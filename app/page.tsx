import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex">
          <div className="text-center flex flex-col items-center w-full max-w-xl">
            <h1
              className="bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text
                          text-3xl font-extrabold text-transparent sm:text-5xl/[3.5rem]"
            >
              Instant Engagement.
              <span className="sm:block"> Every Time. </span>
            </h1>

            <p className="mx-auto mt-4 max-w-2xl sm:text-xl/relaxed">
              Your go-to hub for lesson and meeting warm-ups. Dive into a
              treasure trove of hundreds of jokes, riddles, trivia, and more —
              all curated, all in one place.
            </p>

            <div className="mt-8 flex flex-col flex-wrap justify-between gap-4 min-[460px]:flex-row">
              {/* interactive feature cards here */}
              <Link
                href="/jokes"
                className="rounded-2xl p-px bg-gradient-to-tl from-emerald-400 to-sky-400 active:scale-95 transition-all hover:shadow-radial-lg hover:shadow-slate-750"
              >
                <div className="bg-slate-850 hover:bg-gradient-to-tl hover:from-emerald-400 hover:to-sky-400 hover:text-slate-950 p-4 rounded-[calc(1.2rem-4px)] transition-all">
                  Hear a Joke
                </div>
              </Link>
              <Link
                href="/riddles"
                className="rounded-2xl p-px bg-gradient-to-tl from-emerald-400 to-sky-400 active:scale-95 transition-all hover:shadow-radial-lg hover:shadow-slate-750"
              >
                <div className="bg-slate-850 hover:bg-gradient-to-tl hover:from-emerald-400 hover:to-sky-400 hover:text-slate-950 p-4 rounded-[calc(1.2rem-4px)] transition-all">
                  Solve Riddles
                </div>
              </Link>
              <Link
                href="/trivia"
                className="rounded-2xl p-px bg-gradient-to-tl from-emerald-400 to-sky-400 active:scale-95 transition-all hover:shadow-radial-lg hover:shadow-slate-750"
              >
                <div className="bg-slate-850 hover:bg-gradient-to-tl hover:from-emerald-400 hover:to-sky-400 hover:text-slate-950 p-4 rounded-[calc(1.2rem-4px)] transition-all">
                  Try Trivia
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
