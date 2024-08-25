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
            icon: IconsAll.autoScale,
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
                        <div className="w-64 bg-third hover:bg-primary flex flex-col gap-8 px-5 py-8 items-start rounded-2xl relative group overflow-hidden transition-colors duration-300">
                            <img
                                src={items.icon}
                                alt="Icon"
                                className="w-[46px] h-[46px] z-10 group-hover:brightness-200 transition-colors duration-500"
                            />
                            <div className="z-10 group-hover:text-third/95 transition-colors duration-500">
                                <h3 className="font-Poppins font-bold text-2xl pb-2x">
                                    {items.name}
                                </h3>
                                <p className="font-Poppins font-medium text-lg">
                                    {items.description}
                                </p>
                            </div>
                            <button className="text-secondary font-Poppins font-semibold text-lg z-10 group-hover:text-third/95 transition-colors duration-400">
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
