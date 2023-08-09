import Resource from "./Resource";
import ExternalHyperlinkText from "@/components/nav/ExternalHyperlinkText";

export const metadata = {
  title: "Resources",
  description:
    "Plenty of extras to be found, here you will find resources abound.",
};

const resources = [
  {
    title: "Blooket",
    route: "https://www.blooket.com/",
    icon: "https://www.blooket.com/favicon.ico",
    starred: true,
    use_adblocker: false,
  },
  {
    title: "Kahoot!",
    route: "https://create.kahoot.it/",
    icon: "https://assets-cdn.kahoot.it/builder/v2/favicon.ico",
    starred: true,
    use_adblocker: false,
  },
  {
    title: "GeoGuessr",
    route: "https://www.geoguessr.com/",
    icon: "https://www.geoguessr.com/_next/static/media/favicon.bffdd9d3.png",
    starred: true,
    use_adblocker: false,
  },
  {
    title: "Quizizz",
    route: "https://quizizz.com/admin",
    icon: "https://quizizz.com/favicon.ico",
    starred: false,
    use_adblocker: false,
  },
  {
    title: "Quick, draw!",
    route: "https://quickdraw.withgoogle.com/",
    icon: "https://quickdraw.withgoogle.com/static/favicon.ico",
    starred: false,
    use_adblocker: false,
  },
  {
    title: "Drawasaurus",
    route: "https://www.drawasaurus.org/",
    icon: "https://www.drawasaurus.org/favicon.ico",
    starred: false,
    use_adblocker: true,
  },
  {
    title: "Gartic.io",
    route: "https://gartic.io/",
    icon: "https://gartic.io/favicon.ico",
    starred: false,
    use_adblocker: true,
  },
  {
    title: "Skribbl.io",
    route: "https://skribbl.io/",
    icon: "https://skribbl.io/favicon.png",
    starred: false,
    use_adblocker: true,
  },
  {
    title: "Word Generator",
    route: "https://www.thegamegal.com/word-generator/",
    icon: "https://www.thegamegal.com/favicon.ico",
    starred: false,
    use_adblocker: false,
  }
];

export default function Resources() {
  return (
    <>
      <div className="text-center flex flex-col items-center w-full max-w-2xl">
        <h1 className="text-3xl text-emerald-400">{metadata.title}</h1>
        <p className="italic text-gray-400">{metadata.description}</p>
        <div className="flex flex-col w-auto items-start">
          <p className="mt-2 flex items-center flex-wrap justify-center">
            <span className="text-xl">⭐</span>: Highly Recommended
          </p>
          <p className="mt-2 flex items-center flex-wrap justify-center">
            <span className="text-xl">🛡️</span>:
            Adblocker Suggested&nbsp;
            <span className="whitespace-nowrap">  
              (
              <ExternalHyperlinkText route="https://ublockorigin.com/" text="uBlock Origin" />
              )
            </span>
          </p>
        </div>

        <div className="mt-8 mx-2 grid justify-center grid-cols-1 min-[450px]:grid-cols-2 gap-6">
          {resources.map((resource, index) => (
            <Resource key={index} {...resource} />
          ))}
        </div>
      </div>
    </>
  );
}
