import { Link } from "react-router-dom";
import Navbaar from "./Navbaar";
import Section_two from "./Section_two";
const HomePage = () => {
  return (
    <>
      <Navbaar />
      <div className="h-[89vh] Homepage flex  justify-center items-center pb-16 md:w-full overflow-hidden relative">
        <div className="p-4 relative z-10 w-4/5 text-center md:max-w-full">
          <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Your Financial Dashboard
          </h1>
          <p className="mt-4 font-sans  md:text-xl  px-28 text-neutral-300 font-semibold">
            Effortlessly manage your finances with our intuitive dashboard. Gain
            insights, track expenses, and take control of your financial future.
            Whether budgeting for the month ahead or planning for the long term.
          </p>
          <button className="mt-8 px-8 py-[0.55rem] bg-white  border- rounded-full text-[1.2rem] text-gray-900 cursor-pointer hover:text-white font-semibold btn">
            <Link to="/DashBord">Get Started &gt;&gt;&gt;</Link>
          </button>
        </div>
      </div>
      <Section_two />
    </>
  );
};
export default HomePage;
