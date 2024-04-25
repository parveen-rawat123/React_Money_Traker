import { Link } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';

const Navbaar = () => {
  
  return (
    <>
      <div className="w-full  h-[11vh] flex justify-around items-center Homepage text-green-400">
        <div className="flex gap-14  pr-48 ">
          <h2 className="text-[1.3rem]">ExpenseTrackr</h2>
          <a href="">Add Expense</a>
          <p>Monthly Expenses</p>
        </div>
        <div className="flex gap-20">
            <Link to="/LogIn" className="flex" 
           
            >
            <PersonIcon /> 
              </Link>
        </div>
      </div>
    </>
  );
};
export default Navbaar;
