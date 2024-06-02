import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import { useState } from "react";

// export const changeIcone = ()=>{
//   const  [icone,seticone ] = useState(false)
//   const changecolor = ()=>{
//     seticone(true)
//   } 
// };

export const Navbaar = () => {
  const [color, setcolor] = useState(false);

  const changecolor = () => {
    if (window.scrollY >= 100) {
      setcolor(true);
    } else {
      setcolor(false);
    }
  };
  window.addEventListener("scroll", changecolor);
  return (
    <>
      <div
        className={`w-full  h-[70px] flex justify-around items-center  text-white text-bold para
       ${color ? "header_bg" : "navbaar"}`}
      >
        <div className="flex gap-14  pr-48">
          <h2 className="text-[1.7rem] pr-16 pt-4 hover:text-green-400 cursor-pointer">
            ExpenseTrackr
          </h2>
        </div>
        <div className="flex gap-20 pt-6 paramain">
          <a href="" className="text-[1.1rem]">
            Add Expense
          </a>
          <a href="" className="text-[1.1rem]">
            Monthly Expenses
          </a>
          <Link to="/LogIn" className="flex">
            <PersonIcon className="profile" />
          </Link>
        </div>
      </div> 
    </>
  );
};
export default Navbaar;
