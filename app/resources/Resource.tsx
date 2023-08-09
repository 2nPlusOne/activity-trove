import { StarIcon, ExternalLinkIcon } from "@/components/Icons";

interface ResourceProps {
  title: string;
  route: string;
  icon: string;
  starred: boolean;
  use_adblocker: boolean;
}

const Resource: React.FC<ResourceProps> = ({ title, route, icon, starred, use_adblocker }) => (
  <a
    href={route}
    target="_blank"
    rel="noopener noreferrer"
    className="relative flex justify-around gap-3 items-center bg-transparent rounded-lg p-2 
             hover:bg-emerald-400 hover:bg-opacity-30 transition-all duration-200 ring-2 
             ring-emerald-400 focus:ring-4 focus:ring-emerald-100"
  >
    {starred && 
      <span className="absolute w-5 h-5 text-2xl left-[-1.1rem] top-[-1rem]">⭐</span>  
    }
    {use_adblocker && 
      <span className="absolute w-5 h-5 text-2xl left-[-1.1rem] top-[-0.8rem]">🛡️</span>  
    }
    <img src={icon} alt={`${title} icon`} className="w-6 h-6" />
    <span className={`text-emerald-400 text-xl font-bold`}>{title}</span>
    <ExternalLinkIcon />
  </a>
);

export default Resource;
