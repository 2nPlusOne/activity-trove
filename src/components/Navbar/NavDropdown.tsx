import React, { useState } from 'react';

interface NavItem {
  title: string;
  route: string;
  icon?: React.ReactNode;
  subItems?: NavItem[];
}

const NavDropdown: React.FC<NavItem> = (navItem) => {
  const { title, subItems } = navItem;

  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setDropdownOpen(true)}
      onMouseLeave={() => setDropdownOpen(false)}
      onFocus={() => setDropdownOpen(true)}
      onBlur={() => setDropdownOpen(false)}
    >
      <button className="p-4 rounded-md cursor-auto">
        <span className="pr-1 group-hover:text-emerald-400">{title}</span>
        <DropdownArrayIcon />
      </button>
      <div
        className={`flex flex-col w-auto min-w-full whitespace-nowrap absolute left-1/2 transform -translate-x-1/2 mt-1 space-y-0 text-white bg-slate-800 rounded-lg shadow-xl shadow-slate-900 transition ease-in-out duration-100 ${
          // Show dropdown if dropdownOpen is true
          dropdownOpen ? "opacity-100 pointer-events-auto -translate-y-1 scale-100" : "opacity-0 pointer-events-none -translate-y-7 scale-50"
        }`}
      >
        {subItems?.map((item, index) => (
          <a key={index} href={item.route} className={`block px-4 py-2 text-sm text-center capitalize hover:bg-slate-700 hover:text-white ${
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
      className="w-5 h-5 inline text-gray-400 group-hover:text-emerald-400"
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

export default NavDropdown;
