import { IconsAll } from "../../../assets/icons";
import StartGrowingTodayComponents from "./StartGrowingTodayComponents";

const StartGrowingToday = () => {
  return (
    <section className="-mt-[350px]">
      <div className="container max-w-6xl bg-secondary rounded-3xl p-[50px]">
        <div className="flex items-center justify-center gap-[60px]">
          <div className="flex flex-col w-1/2 gap-10">
            <h4 className="flex items-center gap-[6px] text-base font-semibold px-4 py-2 rounded-full bg-third">
              <img src={IconsAll.globe} alt="Globe" />
              We host more than 120,000 websites
            </h4>
            <div>
              <h2 className="text-[46px] font-semibold text-third">
                Start Growing Today
              </h2>
              <p className="text-base font-medium text-third">We provide a variety of servers to grow your users <br />
              acquisition much user-friendly and boosting up sales.</p>
            </div>
            <div className="flex items-center gap-5">
                <button className="bg-[#FFD15A] py-4 px-10 rounded-full text-lg font-bold text-primary  ">Explore More</button>
                <button className="flex items-center gap-[6px] text-base text-third font-semibold"><img src={IconsAll.message} alt="Message" />Schedule a Demo</button>
            </div>
          </div>
          <div className="grid w-1/2 grid-cols-3 gap-5">
            <StartGrowingTodayComponents />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartGrowingToday;
