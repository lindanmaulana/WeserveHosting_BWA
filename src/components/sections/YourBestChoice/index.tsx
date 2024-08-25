import { IconsAll } from "../../../assets/icons";

type YourBestChoiceProps = {
    id: number,
    name: string,
    description: string,
    icon: string
}

export const YourBestChoice = () => {

    const data : YourBestChoiceProps[] = [
        {
            id: 1,
            name: "Extra Layer",
            description: "Making your project more secure avoiding DDoS",
            icon: IconsAll.extraLayer,
        },
        {
            id: 2,
            name: "Customizable",
            description: "Only install what your business needs to grow",
            icon: IconsAll.cube,
        },
        {
            id: 3,
            name: "AI Automation",
            description: "Decide the business flow based on latest reports",
            icon: IconsAll.autoScalePurple,
        },
        {
            id: 4,
            name: "Auto-Scaling",
            description: "Have a long weekend without worrying any loss",
            icon: IconsAll.autoScalling,
        },
    ];
    return (
        <section className="pb-[100px]">
            <h1 className="text-center font-ClashDisplaySemiBold text-[46px] pb-7">Your Best Choice</h1>
            <div className="flex flex-row gap-8 px-[50px]">
                {data.map((items) => {
                    return (
                        <div className="relative flex flex-col items-start w-64 gap-8 px-5 py-8 overflow-hidden transition-colors duration-300 bg-third hover:bg-primary rounded-2xl group">
                            <img
                                src={items.icon}
                                alt="Icon"
                                className="w-[46px] h-[46px] z-10 group-hover:brightness-200 transition-colors duration-500"
                            />
                            <div className="z-10 transition-colors duration-500 group-hover:text-third/95">
                                <h3 className="text-2xl font-bold font-Poppins pb-2x">
                                    {items.name}
                                </h3>
                                <p className="text-lg font-medium font-Poppins">
                                    {items.description}
                                </p>
                            </div>
                            <button className="z-10 text-lg font-semibold transition-colors text-secondary font-Poppins group-hover:text-third/95 duration-400">
                                Learn More
                            </button>
                            <div className="w-16 h-40 bg-third rotate-[40deg] absolute top-[300px] right-72    group-hover:top-8 group-hover:right-16 rounded-full blur-2xl transition-all duration-1000 "></div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};
