import styled from "styled-components";
import { useGlobalContext } from "../context/GlobalContext";
import Form from "../form/IncomeForm";
import { useEffect } from "react";
import IncomeItem from "../incomeitem/IncomeItem";

const Income = () => {
  const {
    getIncome,
    income,
    DeleteIncome,
    totalIncome,
  } = useGlobalContext();


  useEffect(() => {
    getIncome();
  }, []);

  return (
    <IncomeStyled>
      <h1>Incomes</h1>
      <h2 className="total-income">
        {" "}
        Total Income <span>${totalIncome()}</span>
      </h2>
      <div className="income-content">
        <div className="form-container">
          <Form />
        </div>
        <div className="income">
          {income.map((item) => {
            const { _id, title, amount, date, category, description } = item;
            return (
              <div key={item._id} className="income-item">
                <IncomeItem
                  key={_id}
                  id={_id}
                  title={title}
                  description={description}
                  amount={amount}
                  date={date}
                  category={category}
                  deleteitem={DeleteIncome}
                />
              </div>
            );
          })}
        </div>
      </div>
    </IncomeStyled>
  );
};
const IncomeStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 14px 30px;
  color: white;
  .income-content {
    display: flex;
    gap: 2rem;
    margin-top: 1rem;
    @media (max-width: 900px) {
    flex-direction: column;
  }
  }
  .income{
    flex: 1;
    height: 452px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 5px;
    }
    
    &::-webkit-scrollbar-thumb {
      background-color: #0000ff5e;
      border-radius: 4px;
    }
    .income-item{
      padding: 20px 10px;
    }
  }
  h1 {
    font-size: 1.9rem;
    font-weight: 600;
  }
  .total-income {
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 10px;
    background-color: #1b52ba;
    padding: 0.5rem;
    margin: 0.7rem 0;
    font-size: 1.3rem;
    gap: 0.5rem;
    font-weight: 600;
    span {
      font-size: 2.2rem;
      color: green;
      font-weight: 600;
    }
  }
`;
export default Income;
