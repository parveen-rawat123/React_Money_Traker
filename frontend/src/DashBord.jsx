import { useEffect, useState } from "react";
import Months from "./data/Data";
import { Link } from "react-router-dom";
const DashBord = () => {
    let [Days,setDays] = useState([]);
    useEffect(()=>{
        GenrateDay()
    },[]);
    function GenrateDay(){
        let arr = []
        for (let i = 1; i <= 30; i++) {
            arr.push(i)
        }
        setDays(arr)
    }
  return(
    <div className="grid grid-rows-12 grid-cols-12 h-screen w-screen gap-2">
    <div className=" border border-gray-800 row-start-1 row-end-3
    col-start-1 col-end-13 flex
    ">
        <div className="w-3/12 flex justify-center items-center">
     <Link to= "/">  
       <h1 className="text-2xl">Money Tarker</h1>
     </Link>
        </div>
       <div className="w-3/4 flex justify-evenly">
       <p className="w-1/2 pt-7">Total Saving  <span className=" text-[3rem]">3030.25</span></p>
       <p className="w-1/2 pt-7">Total Investment <span className=" text-[3rem]">3030.56</span></p>
       </div>
    </div>
    <div className="border border-gray-800 row-start-3 row-end-13 
    col-start-1 col-end-3 flex flex-col items-center gap-4">
        <h1 className=" text-5xl text-lime-700">2024</h1>
        <div>
      {Object.keys(Months).map((monthNum) => (
          <div key={monthNum} className="pt-2 text-center text-lg">{Months[monthNum]}</div>
        ))}
        </div>
        
    </div>
    <div className=" border border-gray-800 row-start-3 row-end-13 
    col-start-3 col-end-13 flex">
        <div className="w-full bg-slate-300 flex justify-center items-center">
            <div className=" bg-red-400 h-[20rem] w-[25rem]">
            <ul className="flex wrap gap-6 flex-wrap">
        <li className="">{Days} </li> 
            </ul>
            </div>
        </div>
        <div className="w-full">
            <div>
                <input type="text" name="" id=""  placeholder="enter Task"/>
            </div>
        </div>
    </div>
</div>
  )
}
export default DashBord
