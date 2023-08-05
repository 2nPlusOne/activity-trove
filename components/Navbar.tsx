"use client";

import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import Image from "next/image";
import React from "react";


interface NavItemProps {
  title: string;
  route?: Url;
  icon?: React.ReactNode | string;
  subItems?: NavItemProps[];
}

interface OnClickProps {
  onClickFunc: (e: React.MouseEvent) => void;
}

const navItems: NavItemProps[] = [
  {
    title: "😂 /jokes",
    route: "/jokes",
    icon: "😂",
  },
  {
    title: "🕵️ /riddles",
    route: "/riddles",
    icon: "🕵️",
  },
  {
    title: "🧠 /trivia",
    route: "/trivia",
    icon: "🧠",
  },
  {
    title: "➡️ /more",
    subItems: [
      {
        title: "🧊 /icebreakers",
        route: "/icebreakers",
        icon: "🧊",
      },
      {
        title: "❓ /qotd",
        route: "/qotd",
        icon: "❓",
      },
      {
        title: "🌐 /resources",
        route: "/resources",
        icon: "🌐",
      },
    ],
  },
];

const Navbar: React.FC = () => {
  const blurOnClick = (e: React.MouseEvent) => {
    (e.currentTarget as HTMLElement).blur();
  };

  return (
    <nav
      id="navbar"
      className="sticky top-0 z-50 flex items-center justify-center"
    >
      <div
        id="nav-content"
        className="flex flex-row flex-nowrap justify-between text-center items-center 
        w-full h-auto px-8 lg:px-24 xl:px-40 py-4"
      >
        <Link
          onClick={blurOnClick}
          href="/"
          className="flex flex-row items-center justify-center group focus:outline-offset-8 rounded-md  "
        >
          <div className="group-hover:scale-110 group-focus:scale-110 transition-all">
            <Image
              src="noto-dragon.svg"
              className="group-hover:animate-wiggle group-focus:animate-wiggle"
              alt="Logo"
              width={35}
              height={35}
            />
          </div>
          <h1
            data-label="activity center"
            className="bold-pseudo text-2xl pl-4 transition-all 
            group-hover:translate-x-2 group-hover:font-semibold group-hover:text-emerald-400
            group-focus:translate-x-2 group-focus:font-semibold group-focus:text-emerald-400"
          >
            activity center
          </h1>
        </Link>
        <div className="hidden md:block md:visible">
          <ul className="inline-flex flex-row flex-nowrap justify-between text-center">
            {navItems.map((navItem, index) => (
              <NavItem key={index} {...navItem} onClickFunc={blurOnClick} />
            ))}
          </ul>
        </div>
        <div className="dropdown dropdown-end md:hidden">
          <Hamburger />
          <MobileNavDropdown navItems={navItems} onClickFunc={blurOnClick} />
        </div>
      </div>
    </nav>
  );
};

const NavItem: React.FC<NavItemProps & OnClickProps> = ({
  title,
  route,
  subItems,
  onClickFunc,
}) => {
  const content = (
    <span
      data-label={title}
      className={`flex-grow bold-pseudo
        group-hover:text-emerald-400 focus-within:text-emerald-400 focus:text-emerald-400 group-focus-within:text-emerald-400
        group-hover:font-bold group-focus-within:font-bold transition-all`}
    >
      {title}
    </span>
  );

  return (
    <li>  
      <div
        className={`relative inline-block justify-start items-center group p-3 rounded-md ${
          route ? "cursor-pointer" : ""
        }`}
      >
        {route ? (
          // Use Link only when route is defined
          <Link
            onClick={onClickFunc}
            href={route+"/"}
            className="flex flex-row justify-between items-center focus:outline-offset-8 rounded-md"
          >
            {content}
            {subItems && subItems.length > 0 && <DropdownArrayIcon />}
          </Link>
        ) : (
          // Fall back to a div when no route is provided
          <div className="flex flex-row justify-between items-center">
            {content}
            {subItems && subItems.length > 0 && <DropdownArrayIcon />}
          </div>
        )}
        <div
          className={`flex flex-col w-auto min-w-full whitespace-nowrap absolute
          left-1/2 -translate-x-1/2 mt-0 space-y-0 text-white bg-slate-800 
          rounded-lg shadow-lg shadow-slate-950 transition ease-in-out duration-100 
          opacity-0 pointer-events-none -translate-y-2 scale-75 
          group-focus-within:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-2 group-focus-within:scale-100 
          group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-2 group-hover:scale-100`}
        >
          {subItems?.map((item, index) => (
            <Link
              onClick={onClickFunc}
              key={index}
              href={item.route!}
              className={`px-2 py-2 text-sm text-left 
            hover:bg-slate-700 focus:bg-slate-700 transition-colors duration-200 ${
              // Add rounded corners to bottom of first and top of last item in sub-item groups
              index === 0
                ? "rounded-t-lg"
                : index === subItems.length - 1
                ? "rounded-b-lg"
                : ""
            }`}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </li>
  );
};

const MobileNavDropdown: React.FC<
  { navItems: NavItemProps[] } & OnClickProps
> = ({ navItems, onClickFunc }) => {
  return (
    <ul className="mt-4 dropdown-content menu rounded-md w-52 p-0 shadow-lg shadow-slate-950 bg-slate-800">
      {navItems.map((navItem, index) => (
        <li key={index}>
          { navItem.route ? (
            <Link
              onClick={onClickFunc}
              href={navItem.route ? navItem.route : ""}
              className={`hover:bg-slate-700 focus:bg-slate-700 rounded-none ${
                // Add rounded corners to top and bottom of first and last items in groups between list bounds and sub-groups
                index === 0
                  ? "rounded-t-md"
                  : index === navItems.length - 1
                  ? "rounded-b-md"
                  : navItem.subItems && navItem.subItems.length > 0
                  ? "rounded-b-md"
                  : navItems[index - 1].subItems &&
                    navItems[index - 1].subItems!.length > 0
                  ? "rounded-t-md"
                  : ""
              }`}
            >
              {navItem.title}
            </Link>
          ) : (
            // Fall back to a div when no route is provided
            <div
              className={`hover:bg-slate-700 focus:bg-slate-700 rounded-none !cursor-default ${
                // Add rounded corners to top and bottom of first and last items in groups between list bounds and sub-groups
                index === 0
                  ? "rounded-t-md"
                  : index === navItems.length - 1
                  ? "rounded-b-md"
                  : navItem.subItems && navItem.subItems.length > 0
                  ? "rounded-b-md"
                  : navItems[index - 1].subItems &&
                    navItems[index - 1].subItems!.length > 0
                  ? "rounded-t-md"
                  : ""
              }`}
            >
              {navItem.title}
            </div>
          )}
          {navItem.subItems && navItem.subItems.length > 0 && (
            <ul>
              {navItem.subItems.map((subItem, subIndex) => (
                <li key={subIndex} className="">
                  <Link
                    onClick={onClickFunc}
                    href={subItem.route ? subItem.route : ""}
                    className={`bg-slate-850 hover:bg-slate-750 focus:bg-slate-750 rounded-none mr-6 ${
                      // Add rounded corners to bottom of first and top of last item in sub-item groups
                      subIndex === 0
                        ? "rounded-t-lg"
                        : navItem.subItems &&
                          subIndex === navItem.subItems.length - 1
                        ? "rounded-b-lg"
                        : ""
                    }`}
                  >
                    {subItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

const DropdownArrayIcon: React.FC = () => {
  return (
    <svg
      className="w-5 h-5 inline translate-y-[2px] translate-x-[3px] 
      text-gray-400 group-hover:text-emerald-400 group-focus-within:text-emerald-400 
      group-hover:translate-x-[5px] group-focus-within:translate-x-[5px] transition-all"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );
};

const Hamburger: React.FC = () => {
  return (
    <label
      title="Open Menu"
      tabIndex={0}
      role="button"
      className="hover:cursor-pointer hover:scale-[110%] pointer-events-auto"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16m-7 6h7"
        />
      </svg>
    </label>
  );
};

export default Navbar;
