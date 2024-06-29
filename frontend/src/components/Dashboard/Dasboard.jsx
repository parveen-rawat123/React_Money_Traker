import styled from "styled-components";
import Chart from "../chart/Chart";
import { dollar } from "../../utils/icons/Icons";
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
      <div className="stats-con">
        <div className="chart-container">
          <Chart />
          <div className="amount-con">
            <div className="income">
              <h2>Total Income</h2>
              <p>
                {dollar} {totalIncome()}
              </p>
            </div>
            <div className="expense">
              <h2>Total Expense</h2>
              <p>
                {dollar} {totalExpense()}
              </p>
            </div>
            <div className="balance">
              <h2>Total Balance</h2>
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
          <div className="salary-item">
            <p>{Math.min(...income.map((item) => item.amount))}</p>
            <p>{Math.max(...income.map((item) => item.amount))}</p>
          </div>
          <h2 className="salary-title">
            Min <span>Expense</span> Max
          </h2>
          <div className="salary-item">
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
  color: white;
  h1 {
    font-size: 1.8rem;
    font-weight: 600;
    color:white;
    padding-bottom: 1.3rem;
  }
  
  .stats-con {
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
        .balance {
          background: #fcf6f9;
          background-image: linear-gradient(to right, #2d79e5, #5eacf4); 
          box-shadow: 0 0 7px 2px rgba(0, 0, 0, 0.2);
          border-radius: 10px;
          padding: 0.5rem 1rem;

          h2 {
            font-size: 1rem;
            font-weight: 500;
          }

          p {
            font-size: 1.5rem;
            font-weight: 600;
            color: red;
          }
        }

        .balance {
          grid-column: 2/4;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          p {
            font-weight: 600;
            color: black;
            opacity: 0.6;
            font-size: 1.5rem;
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
        margin-top: 2rem;
        font-size: 1rem;
        font-weight: 500;

        span {
          font-size: 1.5rem;
          font-weight: 500;
          font-family: "Poppins", sans-serif;
        }
      }
      .salary-item {
        background-image: linear-gradient(to right, #1fa458, #43cf7e); 
        padding: 1rem;
        border-radius: 10px;
        color: black;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 0 7px 2px rgba(0, 0, 0, 0.2);

        p {
          font-weight: 500;
          font-size: 1.2rem;
        }
      }
    }
  }

  @media (max-width: 900px) {
    .stats-con {
      display: flex;
      flex-direction: column;

      .chart-container {
        grid-column: 1/-1;
      }

      .history-con {
        grid-column: 1/-1;
      }
    }
  }
`;

export default Dasboard;
