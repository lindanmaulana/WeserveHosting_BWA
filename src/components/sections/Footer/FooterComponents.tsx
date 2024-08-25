import React from "react";

type footerValue = {
  id: number | string,
  title: string
}

type valueProps = {
  footerTitle: string,
  footerMenu: footerValue[]
}


const FooterComponents: React.FC<valueProps> = (props) => {
  const {footerMenu, footerTitle} = props
  return (
    <>
      <div>
        <h3 className="text-lg font-bold text-third mb-[30px]">{footerTitle}</h3>
        <ul className="flex flex-col gap-4">
          {footerMenu.map((res: footerValue) => (
            <li key={res.id}>
              <a href="" className="text-base font-medium text-[#8D90A8] hover:brightness-50">
                {res.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FooterComponents;
