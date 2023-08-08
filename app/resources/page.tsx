import { FC } from "react";

interface ResourceProps {
  title: string;
  route: string;
  icon: string;
  starred: boolean;
}

const Resource: FC<ResourceProps> = ({ title, route, icon, starred }) => (
  <a
    href={route}
    target="_blank"
    rel="noopener noreferrer"
    className="relative flex justify-around gap-3 items-center bg-transparent rounded-lg p-2 hover:bg-emerald-400 hover:bg-opacity-30 transition-all duration-200 ring-2 ring-emerald-400 focus:ring-4 focus:ring-emerald-100"
  >
    { starred &&
      <StarIcon />}
    <img src={icon} alt={`${title} icon`} className="w-6 h-6" />
    <span className="text-emerald-400 text-xl font-bold">{title}</span>
    <ExternalLinkIcon />
  </a>
);

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
  },
  {
    title: "Kahoot!",
    route: "https://create.kahoot.it/",
    icon: "https://assets-cdn.kahoot.it/builder/v2/favicon.ico",
    starred: true,
  },
  {
    title: "Quizizz",
    route: "https://quizizz.com/admin",
    icon: "https://quizizz.com/favicon.ico",
    starred: false,
  },
];

export default function Resources() {
  return (
    <>
      <div className="text-center flex flex-col items-center w-full max-w-2xl">
        <h1 className="text-3xl text-emerald-400">{metadata.title}</h1>
        <p className="italic text-gray-400">{metadata.description}</p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {resources.map((resource, index) => (
            <Resource key={index} {...resource} />
          ))}
        </div>
      </div>
    </>
  );
}

const ExternalLinkIcon = () => (
  <svg
    className="w-5 h-5 text-slate-200"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" x2="21" y1="14" y2="3" />
  </svg>
);

const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5 absolute left-[-0.625rem] top-[-0.625rem] text-yellow-500 fill-yellow-500"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);
