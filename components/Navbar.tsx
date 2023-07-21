import React from 'react';

import './Navbar.css';

interface NavItemProps {
  title: string;
  route: string;
  icon?: React.ReactNode;
  subItems?: NavItemProps[];
}

const navItems: NavItemProps[] = [
  {
    title: "😂 /jokes",
    route: "/jokes",
  },
  {
    title: "🕵️ /riddles",
    route: "#riddles",
  },
  {
    title: "🧠 /trivia",
    route: "#trivia",
  },
  {
    title: "🌐 /resources",
    route: "#resources",
    subItems: [
      {
        title: "Blog",
        route: "#blog",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
          </svg>
        ),
      },
      {
        title: "Community",
        route: "#community",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" />
          </svg>
        ),
      },
    ],
  },
];

const Navbar: React.FC = () => {
  return (
    <nav id='navbar' className="flex items-center justify-center">
      <div id='nav-content' className='flex flex-row flex-nowrap justify-between text-center items-center w-full h-auto px-8 sm:px-4 md:px-8 lg:px-24 xl:px-40 py-6'>
        <a href='/' className='flex items-center justify-center group'>
          <img src="noto-dragon.svg" className='group-hover:animate-wiggle group-focus:animate-wiggle group-hover:after:scale-110 group-focus:after:scale-110' alt="Logo" width={35} height={35} />
          <h1 className="font-sans text-2xl pl-4">activity center</h1>
        </a>
        <div className="hidden md:block md:visible">
          <ul className='inline-flex flex-row flex-nowrap justify-between text-center'>
            {navItems.map((navItem, index) => (
              <NavItem key={index} {...navItem} />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

const NavItem: React.FC<NavItemProps> = (navItem: NavItemProps) => {
  const { title, route, subItems } = navItem;

  return (
    <div 
      className={`relative inline-block justify-start items-center group p-4 ${route ? 'cursor-pointer' : ''}`} 
    >
      <a {...(route ? { href: route } : {})}
        className="flex flex-row justify-between items-center focus:outline-offset-8"
      >  
        <span 
          data-label={title}
          className={`flex-grow
            navbar-label group-hover:text-emerald-400 focus-within:text-emerald-400 focus:text-emerald-400 group-focus-within:text-emerald-400
            group-hover:font-semibold group-focus-within:font-semibold transition-colors duration-200`}
        >
          {title}
        </span>
        {subItems && subItems.length > 0 && <DropdownArrayIcon />}
      </a>
      <div
        className={`flex flex-col w-auto min-w-full whitespace-nowrap absolute
        left-1/2 -translate-x-1/2 mt-0 space-y-0 text-white bg-slate-800 
        rounded-lg shadow-xl shadow-slate-900 transition ease-in-out duration-100 
        opacity-0 pointer-events-none -translate-y-2 scale-75 
        group-focus-within:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-2 group-focus-within:scale-100 
        group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-2 group-hover:scale-100`}
      >
        {subItems?.map((item, index) => (
          <a key={index} href={item.route} data-label={item.title} className={`px-4 py-2 text-sm text-center hover:bg-slate-700 focus:bg-slate-700 dropdown-item-label ${
            // Add rounded corners to first and last items
            index === 0 ? "rounded-t-lg" : index === subItems.length - 1 ? "rounded-b-lg" : ""
          }`}>
            {item.title}
          </a>
        ))}
      </div>
    </div>
  );
};

const DropdownArrayIcon: React.FC = () => {
  return (
    <svg
      className="w-5 h-5 inline translate-y-[2px] translate-x-[3px] text-gray-400 group-hover:text-emerald-400 group-focus-within:text-emerald-400 group-hover:translate-x-1 group-focus-within:translate-x-1"
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
  )
}

export default Navbar;
