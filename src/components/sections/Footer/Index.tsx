import { IconsAll } from "../../../assets/icons"
import StartGrowingToday from "../StartGrowingToday/Index"
import FooterComponents from "./FooterComponents"

type footerValue = {
    id: number | string,
    title: string
}


const Footer = () => {
    const footerProducts: footerValue[] = [
        {
          id: 1,
          title: "Powerful Reports",
        },
        {
          id: 2,
          title: "Blockchain",
        },
        {
          id: 3,
          title: "Auto-Backup",
        },
        {
          id: 4,
          title: "Data Science",
        },
        {
          id: 5,
          title: "Auto-Scaling Up",
        },
      ];
    const footerResources: footerValue[] = [
        {
          id: 1,
          title: "Support 24/7",
        },
        {
          id: 2,
          title: "Help Center",
        },
        {
          id: 3,
          title: "How-to Instruction",
        },
        {
          id: 4,
          title: "Blog & Tips",
        },
        {
          id: 5,
          title: "About Us",
        },
      ];
    const footerCompany: footerValue[] = [
        {
          id: 1,
          title: "Privacy and Policy",
        },
        {
          id: 2,
          title: "Terms and Conditions",
        },
        {
          id: 3,
          title: "Investor Relations",
        },
        {
          id: 4,
          title: "Join With Us",
        },
        {
          id: 5,
          title: "Our Statistics",
        },
      ];
    return (
        <footer className="bg-primary pt-[100px]">
        <div className="container max-w-6xl">
          <StartGrowingToday />
          <div className="grid grid-cols-3 gap-[100px] mt-[68px]">
            <div className="col-span-1 grid gap-[30px] grid-rows-3">
              <img src={IconsAll.weserveLogo} alt="Weserve" />
              <p className="text-base font-medium text-[#8D90A8]">
                We host your empire business today <br /> using the latest
                technologies.
              </p>
              <div className="flex items-center gap-[14px]">
                <a href="" className="rounded-full w-11 h-11 bg-third">
                  <img
                    src={IconsAll.sms}
                    alt="Sms"
                    className="w-full h-full p-[10px]"
                  />
                </a>
                <a href="" className="rounded-full w-11 h-11 bg-third">
                  <img
                    src={IconsAll.global}
                    alt="Sms"
                    className="w-full h-full p-[10px]"
                  />
                </a>
                <a href="" className="rounded-full w-11 h-11 bg-third">
                  <img
                    src={IconsAll.call}
                    alt="Sms"
                    className="w-full h-full p-[10px]"
                  />
                </a>
                <a href="" className="rounded-full w-11 h-11 bg-third">
                  <img
                    src={IconsAll.videoPlay}
                    alt="Sms"
                    className="w-full h-full p-[10px] "
                  />
                </a>
              </div>
            </div>
            <div className="col-span-2 grid grid-cols-3 gap-[70px]">
                <FooterComponents footerMenu={footerProducts} footerTitle="Products" />
                <FooterComponents footerMenu={footerResources} footerTitle="Resources" />
                <FooterComponents footerMenu={footerCompany} footerTitle="Company" />
            </div>
          </div>
          <h2 className="text-base font-medium text-center text-third py-[50px]">
            All Rights Reserved • Copyright Weserve by BuildWithAngga 2024 in
            Bandung
          </h2>
        </div>
      </footer>
    )
}
export default Footer