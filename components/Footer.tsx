const Footer: React.FC = () => {
  return (
    <footer className="flex items-center justify-between w-full h-auto p-3">
      <GitHub />
      <div className="flex items-center justify-center">
        Made with&nbsp;
        <div className="hover:animate-heartBeat px-[1px]">  
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
      </div>
      <BuyMeACoffee />
    </footer>
  );
};

const GitHub: React.FC = () => {
  return (
    <a
      title="GitHub Repository"
      href="https://github.com/2nPlusOne/activity-trove"
      target="_blank"
      rel="noreferrer"
      className="group flex flex-col items-center justify-center w-10 h-10 rounded-full
        hover:scale-110 focus:scale-110 transition-all duration-200 py-0"
    >
      <div className="hover:animate-wiggle group-focus:animate-wiggle">
        <svg className="w-6 h-6 fill-slate-400" aria-hidden="true" viewBox="0 0 16 16" data-view-component="true">
          <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
        </svg>
      </div>
    </a>
  );
}

const BuyMeACoffee: React.FC = () => {
  return (
    <a
      title="Buy me a coffee"
      href="https://www.buymeacoffee.com/2nPlusOne"
      target="_blank"
      rel="noreferrer"
      className="group flex flex-col items-center justify-center w-10 h-10 rounded-full
        hover:scale-110 focus:scale-110 transition-all duration-200 py-0"
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

export default Footer;
