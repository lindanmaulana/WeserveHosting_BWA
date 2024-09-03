import { IconsAll } from "../../../assets/icons";
import { assets } from "../../../assets/images";

type WeHaveVeryStrongProps = {
    id: number;
    title: string;
    description: string;
    icon: string;
};

export const WeHaveVeryStrong = () => {

    const data: WeHaveVeryStrongProps[] = [
        {
            id: 1,
            title: "$880 Mio",
            description: "Company budget saved",
            icon: IconsAll.heart,
        },{
            id: 2,
            title: "450,392",
            description: "All servers available",
            icon:IconsAll.fastReportPurple
        },{
            id: 3,
            title: "189 Mio",
            description: "Websites are running good",
            icon: IconsAll.cloud
        }
    ];

    return (
        <section className="pb-[200px]">
            <div className="container max-w-6xl h-[550px] flex flex-row-reverse justify-between p-[50px] gap-10">
                <div className="w-[55%] flex flex-col gap-10">
                    <div className="w-[450px] flex flex-col gap-[10px]">
                        <h1 className="text-primary font-ClashDisplaySemiBold leading-none text-[46px]">
                            We Have Very Strong Ecosystem
                        </h1>
                        <p className="w-[350px] text-base font-Poppins font-medium ">
                            We provide a variety of servers to grow your users
                            acquisition much user-friendly and boosting up
                            sales.
                        </p>
                        <div className="flex flex-col gap-5">
                            {data.map((items) => {
                                return(
                                    <div key={items.id} className="flex flex-row items-center gap-5 p-5 bg-third rounded-xl">
                                        <img src={items.icon} alt={items.title} className="w-[46px] h-[46px]" />
                                        <div className="flex flex-col">
                                            <h1 className="font-Poppins font-bold text-[22px]">{items.title}</h1>
                                            <p className="text-base font-medium font-Poppins">{items.description}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="flex flex-row items-center gap-4">
                        <button className="px-10 py-4 bg-secondary text-third text-[18px] rounded-full font-Poppins font-bold">
                            Try Free Trial
                        </button>
                        <button className="flex flex-row items-center justify-center gap-2 text-base text-secondary font-Poppins">
                            <img
                                src={IconsAll.message2}
                                alt="Icon"
                                className="w-6 h-6"
                            />
                            Schedule a Demo
                        </button>
                    </div>
                </div>
                <div className="w-[45%] relative ">
                    <img
                        src={assets.aside}
                        alt="Aside Banner"
                        className="absolute w-96 right-4 top-14 -z-10"
                    />
                    <div className="absolute flex flex-row items-center gap-4 p-5 bg-third -bottom-6 -right-4 rounded-3xl">
                        <img
                            src={IconsAll.aiAutomation}
                            alt="Cloud icon"
                            className="w-[46px] h-[46px]"
                        />
                        <div className="font-Poppins">
                            <h1 className="text-lg font-bold">AI Automation</h1>
                            <h2 className="text-base font-medium text-[#5D5D7C]">
                                Working Faster
                            </h2>
                        </div>
                    </div>
                    <div className="absolute flex flex-col items-center gap-5 p-5 bg-third rounded-3xl top-24 -left-10">
                        <img
                            src={IconsAll.autoScalePurple}
                            alt="Auto Scale icon"
                            className="w-[46px] h-[46px]"
                        />
                        <div className="font-Poppins">
                            <h1 className="text-xl font-bold text-center">
                                5/5 Growth
                            </h1>
                            <img src={IconsAll.rating} alt="Rating" />
                        </div>
                    </div>
                    <div className="absolute p-5 rounded-full bg-secondary -right-6 top-8">
                        <img
                            src={IconsAll.topPlugin2}
                            alt="Globe"
                            className="w-[46px] h-[46px] text-third"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}