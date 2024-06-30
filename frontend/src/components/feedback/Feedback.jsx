import { useState } from "react";
import Navbaar from "../navigation/Navbaar";
import Footer from "../navigation/Footer";
import { useGlobalContext } from "../context/GlobalContext";
import Loader from "../../utils/Loader"
const Feedback = () => {
    let [Formdata, setFormdata] = useState({ username: '', feedback: '' });
     const {Feedback, setfeedbackloading} = useGlobalContext()
 

      const HandleForm = (e)=>{
        let val = e.target.value;
        let name = e.target.name;
        setFormdata({
            ...Formdata,
            [name] : val,
        })
    };
    const handleSubmit= async(e)=>{
        e.preventDefault();
        Feedback(Formdata)
        setFormdata({ username: '', feedback: '' })
    }
    
    return (
        <>
            <Navbaar />
            <div className=" w-full  paramain py-6 lg:py-12">
                <div className=" flex flex-col justify-center items-center gap-4 px-4">
                    <h2 className="font-bold text-4xl text-center text-[#5b666d]">We Value Your Feedback</h2>
                    <p className=" text-lg font-semibold text-center lg:px-52 text-[#5b666d]">We appreciate your visit and would love to hear your thoughts.  Please take a moment  to provide your valuable feedback.</p>
                </div>


                <div className="px-4 lg:px-80  md:px-40 py-8">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <div>
                            <label htmlFor="name" className="block text-md font-medium mb-2 ml-2 text-[#5b666d]">Name</label>
                            <input
                                className="appearance-none border rounded-3xl w-full py-3 px-5"
                                type="text"
                                value={Formdata.username}
                                id="name"
                                onChange={HandleForm}
                                name="username"
                            />
                        </div>
                        <div>
                            <label htmlFor="feedback" className="block text-md font-medium mb-2 ml-2 text-[#5b666d]">Feedback</label>
                            <textarea
                                className="appearance-none border rounded-xl w-full py-3 px-5 h-32"
                                id="feedback"
                                onChange={HandleForm}
                                value={Formdata.feedback}
                                maxLength="200"
                                name="feedback"
                            ></textarea>
                        </div>
                        <div className="flex justify-start">
                            <button type="submit"
                             className="px-6 py-2 bg-blue-500 hover:bg-blue-700 text-white border rounded-3xl font-semibold text-md
                             ">
                           {setfeedbackloading ? <Loader/> : "Add Feedback"}
                            </button>
                        </div>        
                        </form>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Feedback;
