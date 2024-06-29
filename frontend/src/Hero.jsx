import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./App.css";

const Hero = () => {
    useEffect(() => {
        AOS.init({
            duration: "1500",
            delay: 500,
        });
    }, []);
    return (
        <>
            <div className="h-[89vh] Homepage flex  justify-center items-center pb-16  overflow-hidden relative w-full">
                <div className="p-4 relative  lg:w-4/5 text-center md:w-full">
                    <h1 className="text-4xl  font-bold tracking-tight  sm:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
                        data-aos="fade-down">
                        Take Control of Your Finances Today
                    </h1>

                    <p className="mt-6 leading-8  text-xl md:text-xl text-white lg:px-40 paramain"
                        data-aos="flip-up">
                        Effortlessly manage your finances with our intuitive dashboard. Gain
                        insights, track expenses, and take control of your financial future.
                        Whether budgeting for the month ahead or planning for the long term.
                    </p>

                    <button
                        className="mt-8 px-5 py-2 bg-white  border- rounded-full text-[1.2rem] text-gray-900 cursor-pointer  font-semibold btn"
                        data-aos="fade-up">
                        <Link to="/DashBord">
                            Get Started <span className="">&gt;&gt;&gt;</span>
                        </Link>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Hero;
