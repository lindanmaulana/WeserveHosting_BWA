import { FaChevronRight } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

interface IDataQuestions {
  id: string | number;
  title: string;
  key: string;
  description: string;
}

interface IisOpen {
  WhydoweneedtouseKapp: boolean;
  Doweneedtopay6monthsperitem: boolean;
  Howtomigratefromotherservice: boolean;
  Whatifdatadoesntgetstored: boolean;
  Canweguaranteenoanylossatall: boolean;
  [key: string]: boolean;
}

interface FrequentlyProps {
  isOpen: IisOpen;
  handleOpenClick: (key: string) => void;
}

const FrequentlyAskedQuestionsComponent = (props: FrequentlyProps) => {
  const { handleOpenClick, isOpen } = props;

  const dataQuestions: IDataQuestions[] = [
    {
      id: 1,
      title: "Why do we need to use Kapp?",
      key: "WhydoweneedtouseKapp",
      description:
        "Kapp is able to develop by themselve without removing the parents permission and lorem dolor si amet fully run network at 100% avoiding data-loss at any moments",
    },
    {
      id: 2,
      title: "What if data doesnt get stored?",
      key: "Whatifdatadoesntgetstored",
      description:
        "Kapp is able to develop by themselve without removing the parents permission and lorem dolor si amet fully run network at 100% avoiding data-loss at any moments",
    },
    {
      id: 3,
      title: "Do we need to pay 6 months per item?",
      key: "Doweneedtopay6monthsperitem",
      description:
        "Kapp is able to develop by themselve without removing the parents permission and lorem dolor si amet fully run network at 100% avoiding data-loss at any moments",
    },
    {
      id: 4,
      title: "Can we guarantee no any loss at all?",
      key: "Canweguaranteenoanylossatall",
      description:
        "Kapp is able to develop by themselve without removing the parents permission and lorem dolor si amet fully run network at 100% avoiding data-loss at any moments",
    },
    {
      id: 5,
      title: "How to migrate from other service?",
      key: "Howtomigratefromotherservice",
      description:
        "Kapp is able to develop by themselve without removing the parents permission and lorem dolor si amet fully run network at 100% avoiding data-loss at any moments",
    },
  ];

  console.log(isOpen);
  return (
    <section className="pt[50px] pb-[300px]">
      <div className="container max-w-6xl">
        <h2 className="text-[46px] font-semibold text-primary text-center mb-[30px]">
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-2 gap-5">
          {dataQuestions.map((res) => (
            <div
              key={res.id}
              className={`${
                isOpen[res.key] ? "row-span-2" : "row-span-1"
              } p-5 rounded-lg bg-third  transition-global`}
            >
              <button
                onClick={() => handleOpenClick(res.key)}
                className="flex items-center justify-between w-full text-xl font-bold text-primary"
              >
                <span>{res.title} </span> <IoIosArrowDown className={`${isOpen[res.key] ? "rotate-180  bg-primary rounded-full text-third" : ""} transition-global`} />
              </button>
              <p
                className={`${
                  isOpen[res.key] ? "h-auto opacity-100" : "h-0 opacity-0"
                } transition-global`}
              >
                {res.description}
              </p>
            </div>
          ))}
          <div className={`p-5 rounded-lg   transition-global bg-primary`}>
            <button className="flex items-center justify-between w-full text-xl font-bold text-primary">
              <span className="text-third">
                {" "}
                Send e-mail to us for other questions{" "}
              </span>{" "}
              <FaChevronRight className="p-1 rounded-full text-primary bg-third" />
            </button>
            <p className={`transition-global`}></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrequentlyAskedQuestionsComponent;
