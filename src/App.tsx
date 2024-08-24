import Navbar from "./components/Navbar";
import Banner from "./components/sections/Banner";
import FrequentlyAskedQuestions from "./components/sections/FrequentlyAskedQuestions/Index";
import LogoCompany from "./components/sections/LogoCompany";
import OurShowCase from "./components/sections/OurShowcase/OurShowcase";
import StartGrowingToday from "./components/sections/StartGrowingToday/Index";
import { YourBestChoice } from "./components/sections/YourBestChoice";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <LogoCompany />
      <YourBestChoice />
      <OurShowCase />
      <FrequentlyAskedQuestions />
      <StartGrowingToday />
    </>
  );
}

export default App;
