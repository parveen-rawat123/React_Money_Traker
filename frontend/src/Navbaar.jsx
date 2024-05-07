import { Link } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import { useState } from "react";
const Navbaar = () => {
  const [color,setcolor] = useState(false)

  const changecolor = ()=>{
    if(window.scrollY >= 90){
 setcolor(true)
    }else{
      setcolor(false)
    }
  }
  window.addEventListener('scroll',changecolor)
  return (
    <>
      <div className={`w-full  h-[90px] flex justify-around items-center  text-green-400
       ${color ? 'header_bg': 'navbaar'}`}>
        <div className="flex gap-14  pr-48 ">
          <h2 className="text-[1.3rem]">ExpenseTrackr</h2>
          <a href="">Add Expense</a>
          <p>Monthly Expenses</p>
        </div>
        <div className="flex gap-20">
            <Link to="/LogIn" className="flex" 
            >
            <PersonIcon/> 
              </Link >
        </div>
      </div>
    </>
  );
};
export default Navbaar;
