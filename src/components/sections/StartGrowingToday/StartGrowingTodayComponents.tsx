import { IconsAll } from "../../../assets/icons";

interface IStartGrowingToday {
  id: number | string;
  title: string;
  iconPurple?: string;
  iconWhite?: string;
}

const StartGrowingTodayComponents = () => {
  
  const dataStartGrowingToday: IStartGrowingToday[] = [
    {
      id: 1,
      title: "Web Crawl",
      iconPurple: IconsAll.webCrawlPurple,
      iconWhite: IconsAll.webCrawlWhite,
    },
    {
      id: 2,
      title: "Fast Report",
      iconPurple: IconsAll.fastReportPurple,
      iconWhite: IconsAll.fastReportWhite,
    },
    {
      id: 3,
      title: "Anti-DDos",
      iconPurple: IconsAll.antiDdosPurple,
      iconWhite: IconsAll.antiDdosWhite,
    },
    {
      id: 4,
      title: "Auto-Scale",
      iconPurple: IconsAll.autoScalePurple,
      iconWhite: IconsAll.autoScaleWhite,
    },
    {
      id: 5,
      title: "AI Perform",
      iconPurple: IconsAll.aiPerformPurple,
      iconWhite: IconsAll.aiPerformWhite,
    },
    {
      id: 6,
      title: "Top Plugins+",
      iconPurple: IconsAll.topPluginsPurple,
      iconWhite: IconsAll.topPluginsWhite,
    },
  ];
  return (
    <>
      {dataStartGrowingToday.map((res) => (
        <a
          href="/"
          key={res.id}
          className={`flex flex-col items-center group justify-center py-10 gap-5 relative rounded-3xl hover:bg-primary bg-third transition-global overflow-hidden`}
        >
          <img
            src={res.iconPurple}
            alt={res.title}
            className={`group-hover:-translate-y-3 transition-global group-hover:brightness-200`}
          />
          <h2
            className={`text-primary group-hover:text-third transition-global text-lg font-bold group-hover:-translate-y-3 transition-global`}
          >
            {res.title}
          </h2>
          <span
            className={`text-base font-semibold text-[#8D90A8] absolute -bottom-5 opacity-0 group-hover:bottom-4 transition-global group-hover:opacity-100`}
          >
            Learn More
          </span>
          <div className="absolute w-2 rotate-[35deg] top-36 right-40 transition-global duration-1000 group-hover:right-14 h-[90px] group-hover:top-8 bg-third blur-xl"></div>
        </a>
      ))}
    </>
  );
};

export default StartGrowingTodayComponents;

{
  /* <img src={res.iconPurple} alt={res.title} className={`group-hover:opacity-0 opacity-100 group-hover:h-0 h-auto group-hover:-translate-y-3 transition-global group-hover:`} />
<img src={res.iconWhite} alt={res.title} className={`group-hover:opacity-100 h-0 group-hover:h-auto opacity-0 group-hover:-translate-y-3 transition-global group-hover:`} /> */
}
