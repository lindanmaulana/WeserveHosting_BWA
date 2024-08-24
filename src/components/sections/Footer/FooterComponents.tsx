
type footerValue = {
  id: number | string,
  title: string
}

type footerProps = footerValue[]

const FooterComponents = (props: footerProps) => {
  const {dataFooter} = props
  return (
    <>
      <div>
        <h3 className="text-lg font-bold text-third mb-[30px]">Products</h3>
        <ul className="flex flex-col gap-4">
          {dataFooter.map((res: footerValue) => (
            <li>
              <a href="" className="text-base font-medium text-[#8D90A8]">
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
