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
        Made with ❤️ by&nbsp;
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
      href="https://www.buymeacoffee.com/2nPlusOne"
      target="_blank"
      rel="noreferrer"
      className="flex flex-col items-center justify-center w-10 h-10 rounded-full
      ring-[3px] ring-emerald-500 bg-[#ffdd00] shadow-xl hover:scale-110 focus:scale-110 transition-all duration-200"
    >
      <img src="./bmc-icon.svg" alt="Buy me a coffee :)" className="w-7 h-7" />
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
