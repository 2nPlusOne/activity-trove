import Head from "next/head";

interface FooterNavItemProps {
  title: string;
  route: string;
  info: string;
}

const footerNavs: FooterNavItemProps[] = [
  {
    title: '/jokes',
    route: '/jokes',
    info: 'Puns and punchlines, gags and groans, we\'ve got jokes to lighten your tone.',
  },
  {
    title: '/riddles',
    route: '#riddles',
    info: 'For minds that love a twisty tour, riddles await behind this door!',
  },
  {
    title: '/trivia',
    route: '#trivia',
    info: 'Stacks of facts, many an option, ready to test your trivia noggin?',
  },
  {
    title: '/resources',
    route: '#resources',
    info: 'Plenty of choices to be found, in this section of resources abound.',
  },
];

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-between p-8">
      <div className="hidden md:flex flex-row mt-auto mb-8 text-center">
        {footerNavs.map((nav, index) => (
          <FooterNavItem key={index} {...nav} />
        ))}
      </div>
    </main>
  )
}

const FooterNavItem: React.FC<FooterNavItemProps> = (props: FooterNavItemProps) => {
  const { title, route, info } = props;
  return (
    <a
      href={route}
      className="group rounded-lg border border-transparent p-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    >
      <h2 className={`mb-3 text-xl font-semibold`}>
        {title}{' '}
        <span className="inline-block transition-transform group-hover:translate-x-2 group-focus:translate-x-2 motion-reduce:transform-none">
          -&gt;
        </span>
      </h2>
      <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
        {info}
      </p>
    </a>
  )
}