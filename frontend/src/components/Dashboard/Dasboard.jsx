import styled from "styled-components";
import { InnerLayout } from "../../styles/Layout";
import  Chart  from "../chart/Chart";
import { dollar} from "../../utils/Icons"
import { useGlobalContext } from "../context/GlobalContext";
import History from "../history/History";
import { useEffect } from "react";

const Dasboard = () => {
const {totalIncome,totalExpense, totalBalance ,getIncome,getExpense} =   useGlobalContext()

useEffect(()=>{
    getExpense()
    getExpense()
},[])

  return (
    <DasboardStyled>
      <InnerLayout>
        <h1>All Transactions</h1>
        <div className="srats-con">
          <div className="chart-container">
            <Chart/>
          <div className="amount-con">
           <div className="income">
            <h2>Total Income</h2>
            <p> {dollar} {totalIncome()}</p>
           </div>
           <div className="expense">
            <h2>Total Expense</h2>
            <p>{dollar} {totalExpense()}</p>
           </div>
            <div className="balnce">
              <h2>Total Balnce</h2>
              <p>
              {dollar}{totalBalance()}
              </p>
             </div>
          </div>
          </div>
          <div className="history-con">
            <History/>
            <div className="salaryitem">

              
            </div>
          </div>
        </div>
      </InnerLayout>
    </DasboardStyled>
  );
};
const DasboardStyled = styled.div`
    
`;

export default Dasboard;
