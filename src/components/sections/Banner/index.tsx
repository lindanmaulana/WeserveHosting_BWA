import { IconsAll } from "../../../assets/icons";
import { assets } from "../../../assets/images";

const Banner = () => {
    return (
        <section className="py-[100px]">
            <div className="container max-w-6xl h-[550px] flex flex-row p-[50px] gap-10">
                <div className="w-[60%] flex flex-col gap-10">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full w-80 bg-third">
                        <img
                            src={IconsAll.globe}
                            alt="Globe Icon"
                            className="w-6 h-6"
                        />
                        <h3 className="text-base font-semibold font-Poppins">
                            We host more than 120,000 websites
                        </h3>
                    </div>
                    <div className="flex flex-col gap-[10px]">
                        <h1 className="text-primary font-ClashDisplaySemiBold leading-none text-[70px]">
                            Grow Online Business Faster.
                        </h1>
                        <p className="w-[60%] text-base font-Poppins font-medium ">
                            We provide a variety of servers to grow your users
                            acquisition much user-friendly and boosting up
                            sales.
                        </p>
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
                <div className="w-[40%] relative ">
                    <img
                        src={assets.banner}
                        alt="Hero Banner"
                        className="absolute w-96 right-4 -top-6 -z-10"
                    />
                    <div className="absolute flex flex-row items-center gap-4 p-5  bg-third rounded-3xl -top-20 -left-10">
                        <img
                            src={IconsAll.cloud}
                            alt="Cloud icon"
                            className="w-[46px] h-[46px]"
                        />
                        <div className="font-Poppins">
                            <h1 className="text-lg font-bold">
                                Super Reliable
                            </h1>
                            <h2 className="text-base font-medium text-[#5D5D7C]">
                                24/7 Always Active
                            </h2>
                        </div>
                    </div>
                    <div className="absolute flex flex-col items-center gap-4 p-5  bg-third rounded-3xl bottom-6 -right-4">
                        <img
                            src={IconsAll.autoScaleWhite}
                            alt="Auto Scale icon"
                            className="w-[46px] h-[46px]"
                        />
                        <div className="font-Poppins">
                            <h1 className="text-2xl font-bold text-center">
                                +490%
                            </h1>
                            <h2 className="text-base font-medium text-[#5D5D7C]">
                                Engagements
                            </h2>
                        </div>
                    </div>
                    <div className="absolute p-5 rounded-full bg-secondary -right-6 top-7">
                        <img
                            src={IconsAll.globe2}
                            alt="Globe"
                            className="w-[46px] h-[46px] text-third"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
