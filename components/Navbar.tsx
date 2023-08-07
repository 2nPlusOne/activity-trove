"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import NavItem, { NavItemProps } from "./NavItem";
import MobileNavDropdown from "./MobileNavDropdown";

const navItems: NavItemProps[] = [
  {
    title: "😂 /jokes",
    route: "/jokes",
  },
  {
    title: "🕵️ /riddles",
    route: "/riddles",
  },
  {
    title: "🧠 /trivia",
    route: "/trivia",
  },
  {
    title: "➡️ /more",
    subItems: [
      {
        title: "🧊 /icebreakers",
        route: "/icebreakers",
      },
      {
        title: "❓ /qotd",
        route: "/qotd",
      },
      {
        title: "🌐 /resources",
        route: "/resources",
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
      className="sticky top-0 z-50 flex items-center justify-center bg-slate-900 bg-opacity-80 filter backdrop-blur-sm"
    >
      <div
        id="nav-content"
        className="flex flex-row flex-nowrap justify-between text-center items-center 
        w-full h-auto px-8 lg:px-24 xl:px-40 py-2"
      >
        <Link
          onClick={blurOnClick}
          href="/"
          className="flex flex-row items-center justify-center group focus:outline-offset-8 rounded-md  "
        >
          <div className="group-hover:scale-110 transition-all">
            <Image
              src="noto-dragon.svg"
              className="group-hover:animate-wiggle"
              alt="Logo"
              width={35}
              height={35}
            />
          </div>
          <h1
            data-label="activity center"
            className="bold-pseudo text-2xl pl-4 transition-all 
            group-hover:translate-x-2 group-hover:font-semibold group-hover:text-emerald-400"
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

const Hamburger: React.FC = () => {
  return (
    <label
      title="Open Menu"
      tabIndex={0}
      role="button"
      className="hover:cursor-pointer"
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
