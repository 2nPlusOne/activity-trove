import React from "react";

interface FooterNavItemProps {
  title: string;
  route: string;
  info: string;
}

const footerNavs: FooterNavItemProps[] = [
  {
    title: "/jokes",
    route: "/jokes",
    info: "Puns and punchlines, gags and groans, we've got jokes to lighten the tone.",
  },
  {
    title: "/riddles",
    route: "#riddles",
    info: "For minds that love a twisty tour, the sphinx awaits to test your lore.",
  },
  {
    title: "/trivia",
    route: "#trivia",
    info: "Quizzes and facts, many an option, ready to test your trivia noggin?",
  },
  {
    title: "/resources",
    route: "#resources",
    info: "Plenty of choices to be found, here you will find resources abound.",
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="flex items-center justify-between w-full h-auto p-6 pb-6">
      <div className="w-12 h-12" /> {/* Empty div to balance left side */}
      <div className="flex items-center justify-center">
        Made with&nbsp;
        <div className="hover:animate-heartBeat">  
          <svg className="w-4 h-4 fill-red-600" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
          </svg>
        </div>
        &nbsp;by&nbsp;
        <a
          data-label="2nPlusOne"
          href="https://github.com/2nPlusOne"
          target="_blank"
          rel="noreferrer"
          className="bold-pseudo text-center text-emerald-500 hover:font-semibold focus:font-semibold
          hover:underline focus:underline transition-all"
        >
          2nPlusOne
        </a>
        &nbsp;&nbsp;
      </div>
      <div className="flex justify-end">
        <BuyMeACoffee />
      </div>
    </footer>
  );
};

const BuyMeACoffee: React.FC = () => {
  return (
    <a
      title="Buy me a coffee"
      href="https://www.buymeacoffee.com/2nPlusOne"
      target="_blank"
      rel="noreferrer"
      className="group flex flex-col items-center justify-center w-10 h-10 rounded-full
        hover:scale-110 focus:scale-110 transition-all duration-200"
    >
      <div className="hover:animate-wiggle group-focus:animate-wiggle">  
          <svg className="w-6 h-6 stroke-[#ffdd00]" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
            <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
            <line x1="6" y1="1" x2="6" y2="4" />
            <line x1="10" y1="1" x2="10" y2="4" />
            <line x1="14" y1="1" x2="14" y2="4" />
          </svg>
        </div>
    </a>
  );
};

const FooterNavItem: React.FC<FooterNavItemProps> = (
  props: FooterNavItemProps
) => {
  const { title, route, info } = props;
  return (
    <a
      href={route}
      className="group rounded-lg border border-transparent p-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    >
      <h2 className={`mb-3 text-xl font-semibold`}>
        {title}{" "}
        <span className="inline-block transition-transform group-hover:translate-x-2 group-focus:translate-x-2 motion-reduce:transform-none">
          -&gt;
        </span>
      </h2>
      <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>{info}</p>
    </a>
  );
};

export default Footer;
