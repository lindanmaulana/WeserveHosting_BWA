import { IconsAll } from "../../../assets/icons"

interface IStartGrowingToday {
    id: number | string,
    title: string,
    icon: string
}

const StartGrowingTodayComponents = () => {
    const dataStartGrowingToday: IStartGrowingToday[] = [
        {
            id: 1,
            title: "Web Crawl",
            icon: IconsAll.webCrawl
        },
        {
            id: 2,
            title:"Fast Report",
            icon: IconsAll.fastReport
        },
        {
            id: 3,
            title: "Anti-DDos",
            icon: IconsAll.antiDdos
        },
        {
            id: 4,
            title: "Auto-Scale",
            icon: IconsAll.autoScale
        },
        {
            id: 5,
            title: "AI Perform",
            icon: IconsAll.aiPerform
        },
        {
            id: 6,
            title: "Top Plugins+",
            icon: IconsAll.topPlugins
        },
    ]
  return (
    <>
      {dataStartGrowingToday.map(res => (
        <a href="/" key={res.id} className={`flex flex-col items-center group justify-center py-10 gap-5 relative  rounded-3xl ${res.id === 3  ? "bg-primary" : "bg-third"}`}>
            <img src={res.icon} alt={res.title} className={`group-hover:-translate-y-3 transition-global`} />
            <h2 className={`${res.id === 3 ? "text-third" : "text-primary"} text-lg font-bold group-hover:-translate-y-3 transition-global`}>{res.title}</h2>
            <span className={`text-base font-semibold text-[#8D90A8] absolute -bottom-5 opacity-0 group-hover:bottom-4 transition-global group-hover:opacity-100`}>Learn More</span>
        </a>
      ))}
    </>
  )
}

export default StartGrowingTodayComponents
