import { Link } from "react-router-dom"
import Navbaar from "./Navbaar"
const HomePage = () => {
  return (
    <>
    <Navbaar/>
    <div className="h-[89vh] Homepage flex pt-[60px] pl-[75px]">
        <div className="w-[50vw]">
             <h1 className=" text-white text-[4.6rem] font-semibold">Your Financial <br /> 
             <span>Dashboard</span>
                </h1>
            <p className="text-[1.3rem] text-white mt-2 pr-[2rem] text-2xl">Effortlessly manage your finances with our intuitive dashboard. Gain insights, track expenses, and take control of your financial future.</p>
        <button className="mt-8 px-8 py-2 bg-white border border- rounded-full text-[1.2rem] text-gray-900 cursor-pointer hover:text-black"> <Link to="/DashBord">Get Started &gt;&gt;&gt;</Link></button> </div>
        <div className="w-[50vw]">hello </div>
    </div>
    </>
  )
}
export default HomePage
