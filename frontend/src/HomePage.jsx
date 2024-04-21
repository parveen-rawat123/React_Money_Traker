import { Link } from "react-router-dom"
import Navbaar from "./Navbaar"
const HomePage = () => {
  return (
    <>
    <Navbaar/>
    <div className="h-[89vh] Homepage flex  justify-center items-center pb-16 md:w-full overflow-hidden relative">
        <div className="p-4 relative z-10 w-full text-center">
             <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Your Financial Dashboard
                </h1>
            <p className="mt-4 font-normal text-base md:text-lg  text-neutral-300">Effortlessly manage your finances with our intuitive dashboard. Gain insights, track expenses, and take control of your financial future. Whether budgeting for the month ahead or planning for the long term, our dashboard makes it easy to stay on top of your finances and achieve your financial goals. Start managing your finances with ease today.</p>
        <button className="mt-8 px-8 py-2 bg-white border border- rounded-full text-[1.2rem] text-gray-900 cursor-pointer hover:text-black"> <Link to="/DashBord">Get Started &gt;&gt;&gt;</Link></button> </div>
    </div>
    </>
  )
}
export default HomePage
