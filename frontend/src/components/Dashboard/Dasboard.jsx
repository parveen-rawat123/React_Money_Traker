import styled from "styled-components";
import { InnerLayout } from "../../styles/Layout";
import  Chart  from "../chart/Chart";
import { dollar} from "../../utils/Icons"
import { useGlobalContext } from "../context/GlobalContext";

const Dasboard = () => {
const {totalIncome,totalExpense, } =   useGlobalContext()
  return (
    <DasboardStyled>
      <InnerLayout>
        <h1>All Transactions</h1>
        <div className="srats-con">
          <div className="chart-container">
            <Chart/>
          </div>
          <div className="amount-con">
           <div className="income">
            <h1>Total Income</h1>
            <p> {dollar}</p>
           </div>

          </div>
        </div>
      </InnerLayout>
    </DasboardStyled>
  );
};
const DasboardStyled = styled.div``;

export default Dasboard;
