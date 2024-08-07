
import Navbaar from "./components/navigation/Navbaar";
import Hero from "./Hero";
import "./App.css"
import Feature from "./Feature";
import ScrollToTop from "./utils/icons/ScrollToTop";
import Footer from "./components/navigation/Footer";
import ShowFeedback from "./components/feedback/ShowFeedback";
import Faq from "./components/Faq/Faq"

const HomePage = () => {
  return (
    <>
      <Navbaar />
      <Hero />
      <Feature />
      <ShowFeedback />
       <Faq/>
      <ScrollToTop />
      <Footer />
    </>
  );
};
export default HomePage;
