import { useState } from "react";
import FrequentlyAskedQuestionsComponent from "./FrequentlyAskedQuestionsComponent";

interface IisOpen {
    WhydoweneedtouseKapp: boolean,
    Doweneedtopay6monthsperitem: boolean,
    Howtomigratefromotherservice: boolean,
    Whatifdatadoesntgetstored: boolean,
    Canweguaranteenoanylossatall: boolean,
    [key: string]: boolean
}

const FrequentlyAskedQuestions = () => {
    const [isOpen, setIsOpen] = useState<IisOpen>({
        WhydoweneedtouseKapp: false,
        Doweneedtopay6monthsperitem: false,
        Howtomigratefromotherservice: false,
        Whatifdatadoesntgetstored: false,
        Canweguaranteenoanylossatall: false,
      });

      const handleOpenClick = (question: string): void => {
        setIsOpen({...isOpen, [question]: !isOpen[question]})
      }
    return (
        <FrequentlyAskedQuestionsComponent isOpen={isOpen} handleOpenClick={handleOpenClick} />
    )
}

export default FrequentlyAskedQuestions