import React, { useState, useRef, useEffect, MouseEvent } from "react";
import Link from "next/link";
import { NavItemProps, OnClickProps } from "./NavItem";

const MobileNavDropdown: React.FC<{ navItems: NavItemProps[] } & OnClickProps> = ({ navItems, onClickFunc }) => {
  const [activeSubMenu, setActiveSubMenu] = useState<number | null>(null);
  const ref = useRef<HTMLUListElement>(null);
  const [maxHeight, setMaxHeight] = useState('0');

  useEffect(() => {
    if (ref.current) {
      setMaxHeight(activeSubMenu !== null ? `${ref.current.scrollHeight}px` : '0');
    }
  }, [activeSubMenu]);

  const handleSubMenuToggle = (index: number) => {
    setActiveSubMenu(prev => prev === index ? null : index);
  };

  const handleNavigationClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onClickFunc(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLUListElement>) => {
    const currentTarget = e.currentTarget;
  
    setTimeout(() => {
      if (!currentTarget.contains(document.activeElement)) {
        setActiveSubMenu(null);
      }
    }, 0);
  };
  
  const computeMainItemClass = (index: number, navItem: NavItemProps) => {
    if (index === 0) return "rounded-t-md";
    if (index === navItems.length - 1) return "rounded-b-md";
    if (navItem.subItems && navItem.subItems.length > 0) return "rounded-b-md";
    if (navItems[index - 1].subItems && navItems[index - 1].subItems!.length > 0) return "rounded-t-md";
    return "";
  };

  const computeSubItemClass = (subIndex: number, subItemCount: number) => {
    if (subIndex === 0) return "rounded-t-lg";
    if (subIndex === subItemCount - 1) return "rounded-b-lg";
    return "";
  };

  return (
    <ul className="mt-4 dropdown-content menu text-xl rounded-md w-64 p-0 shadow-lg shadow-slate-950 bg-slate-800" onBlur={handleBlur}>
      {navItems.map((navItem, index) => {
        const mainItemClass = computeMainItemClass(index, navItem);

        return (
          <li key={index}>
            {navItem.route ? (
              <Link href={navItem.route} className={`hover:bg-slate-700 focus:bg-slate-700 rounded-none ${mainItemClass}`} onClick={(e) => handleNavigationClick(e)}>
                {navItem.title}
              </Link>
            ) : (
              <button className={`flex justify-between items-center w-full hover:bg-slate-700 focus:bg-slate-700 rounded-none !cursor-default ${mainItemClass}`} onClick={() => handleSubMenuToggle(index)}>
                <span>{navItem.title}</span>
                <ChevronDown active={activeSubMenu === index} />
              </button>
            )}

            <ul className="overflow-hidden transition-max-height duration-500 ease-in-out" style={{maxHeight}} ref={ref}>
              {activeSubMenu === index && navItem.subItems?.length && navItem.subItems.map((subItem, subIndex) => {
                const subItemClass = computeSubItemClass(subIndex, navItem.subItems!.length);

                return (
                  <li key={subIndex}>
                    <Link href={subItem.route || ""} className={`bg-slate-850 hover:bg-slate-750 focus:bg-slate-750 rounded-none mr-6 ${subItemClass}`} onClick={(e) => handleNavigationClick(e)}>
                      {subItem.title}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </li>
        )})}
    </ul>
  );
};

interface ChevronDownProps {
  active: boolean;
}

const ChevronDown = ({ active }: ChevronDownProps) => {
  return (
    <div className={`ml-4 transform transition-transform duration-300 ${active ? 'rotate-180' : ''}`}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
    </div>
  )
}

export default MobileNavDropdown;
