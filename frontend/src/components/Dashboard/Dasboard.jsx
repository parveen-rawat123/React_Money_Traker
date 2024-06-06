import styled from "styled-components";
import Chart from "../chart/Chart";
import { dollar } from "../../utils/Icons";
import { useGlobalContext } from "../context/GlobalContext";
import History from "../history/History";
import { useEffect } from "react";

const Dasboard = () => {
  const {
    totalIncome,
    totalExpense,
    totalBalance,
    getExpense,
    getIncome,
    income,
    expense,
  } = useGlobalContext();

  useEffect(() => {
    getExpense();
    getIncome();
  }, []);

  return (
    <DasboardStyled>
      <h1>All Transactions</h1>
      <div className="srats-con">
        <div className="chart-container">
          <Chart />
          <div className="amount-con">
            <div className="income">
              <h2>Total Income</h2>
              <p>
                {" "}
                {dollar} {totalIncome()}
              </p>
            </div>
            <div className="expense">
              <h2>Total Expense</h2>
              <p>
                {dollar} {totalExpense()}
              </p>
            </div>
            <div className="balnce">
              <h2>Total Balnce</h2>
              <p>
                {dollar}
                {totalBalance()}
              </p>
            </div>
          </div>
        </div>
        <div className="history-con">
          <History />
          <h2 className="salary-title">
            Min <span>Salary</span> Max
          </h2>
          <div className="salaryitem">
            <p>{Math.min(...income.map((item) => item.amount))}</p>
            <p>{Math.max(...income.map((item) => item.amount))}</p>
          </div>
          <h2 className="salary-title">
            Min <span>Expense</span> Max
          </h2>
          <div className="salaryitem">
            <p>{Math.min(...expense.map((item) => item.amount))}</p>
            <p>{Math.max(...expense.map((item) => item.amount))}</p>
          </div>
        </div>
      </div>
    </DasboardStyled>
  );
};
const DasboardStyled = styled.div`
  padding: 1rem;
  h1 {
    font-size: 1.6rem;
    font-weight: 600;
    color: black;
    padding-bottom: 0.3rem;
  }
  .srats-con {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2rem;
    .chart-container {
      grid-column: 1/4;
      height: 400px;
      .amount-con {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
        margin-top: 2rem;
        .income,
        .expense {
          grid-column: span 2;
        }
        .income,
        .expense,
        .balnce {
          background: #fcf6f9;
          border: 2px solid #ffffff;
          box-shadow: 0 0 7px 2px rgba(0, 0, 0, 0.2);
          border-radius: 20px;
          padding: 0.5rem 1rem;
          h2{
            font-size: 1rem;
            font-weight: 500;
          }
          p {
            font-size: 1.5rem;
            font-weight: 600;
            color: grey;
          }
        }
        .balnce {
          grid-column: 2/4;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 0;
          p {
            color: green;
            opacity: 0.6;
            font-size: 2rem;
          }
        }
      }
    }
    .history-con {
      grid-column: 4/-1;
      h2 {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .salary-title {
        font-size: 1rem;
        font-weight: 500;
        span {
          font-size: 1.5rem;
          font-weight: 500;
          font-family: "Poppins", sans-serif;
        }
      }
      .salaryitem {
        background-color: #fcf6f9;
        border: 2px solid #ffffff;
        padding: 1rem;
        border-radius: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 0 7px 2px rgba(0, 0, 0, 0.2);

        p {
          font-weight: 500;
          color: grey;
          font-size: 1.6rem;
        }
      }
    }
  }
`;

export default Dasboard;
