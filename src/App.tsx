import Navbar from "./components/Navbar";
import Banner from "./components/sections/Banner";
import Footer from "./components/sections/Footer/Index";
import FrequentlyAskedQuestions from "./components/sections/FrequentlyAskedQuestions/Index";
import LogoCompany from "./components/sections/LogoCompany";
import OurShowCase from "./components/sections/OurShowcase/OurShowcase";
import { WeHaveVeryStrong } from "./components/sections/WeHaveVeryStrong";
import { YourBestChoice } from "./components/sections/YourBestChoice";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <LogoCompany />
      <YourBestChoice />
      <WeHaveVeryStrong />
      <OurShowCase />
      <FrequentlyAskedQuestions />
      <Footer />
    </>
  );
}

export default App;
