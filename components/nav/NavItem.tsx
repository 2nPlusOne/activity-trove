import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface NavItemProps {
  title: string;
  route?: Url;
  icon?: React.ReactNode | string;
  subItems?: NavItemProps[];
}

export interface OnClickProps {
  onClickFunc: (e: React.MouseEvent) => void;
}

const NavItem: React.FC<NavItemProps & OnClickProps> = ({
  title,
  route,
  subItems,
  onClickFunc,
}) => {
  const pathname = usePathname();

  const content = (
    <span
      data-label={title}
      className={`flex-grow bold-pseudo ${pathname === route ? "font-bold text-emerald-400" : ""}
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

export default NavItem;