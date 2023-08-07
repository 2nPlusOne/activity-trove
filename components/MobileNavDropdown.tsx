import React from "react";
import Link from "next/link";
import { NavItemProps, OnClickProps } from "./NavItem";

const MobileNavDropdown: React.FC<{ navItems: NavItemProps[] } & OnClickProps> = ({ navItems, onClickFunc }) => {

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
    <ul className="mt-4 dropdown-content menu text-xl rounded-md w-64 p-0 shadow-lg shadow-slate-950 bg-slate-800">
      {navItems.map((navItem, index) => {
        const mainItemClass = computeMainItemClass(index, navItem);

        return (
          <li key={index}>
            {navItem.route ? (
              <Link onClick={onClickFunc} href={navItem.route} className={`hover:bg-slate-700 focus:bg-slate-700 rounded-none ${mainItemClass}`}>
                {navItem.title}
              </Link>
            ) : (
              <div className={`hover:bg-slate-700 focus:bg-slate-700 rounded-none !cursor-default ${mainItemClass}`}>
                {navItem.title}
              </div>
            )}

            {navItem.subItems && navItem.subItems.length > 0 && (
              <ul className="mb-4">
                {navItem.subItems.map((subItem, subIndex) => {
                  const subItemClass = computeSubItemClass(subIndex, navItem.subItems!.length);

                  return (
                    <li key={subIndex}>
                      <Link onClick={onClickFunc} href={subItem.route || ""} className={`bg-slate-850 hover:bg-slate-750 focus:bg-slate-750 rounded-none mr-6 ${subItemClass}`}>
                        {subItem.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default MobileNavDropdown;
