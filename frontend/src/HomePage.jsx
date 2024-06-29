
import Navbaar from "./components/navigation/Navbaar";
import Hero from "./Hero";
import "./App.css"
import Feature from "./Feature";
import ScrollToTop from "./utils/icons/ScrollToTop";
import Footer from "./components/navigation/Footer";
import ShowFeedback from "./components/feedback/ShowFeedback";

const HomePage = () => {
  return (
    <>
      <Navbaar />
      <Hero />
      <Feature />
      <ShowFeedback />
      <ScrollToTop />
      <Footer />
    </>
  );
};
export default HomePage;
