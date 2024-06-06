import styled from "styled-components";
import { useGlobalContext } from "../context/GlobalContext";
import Form from "../form/IncomeForm";
import { useEffect } from "react";
import IncomeItem from "../incomeitem/IncomeItem";
import { toast } from "react-toastify";

const Income = () => {
  const {
    getIncome,
    income,
    DeleteIncome,
    totalIncome,
    message,
    error,
    deletMessage,
    seterror,
    setmessage,
    setdeletMessage,
  } = useGlobalContext();

  useEffect(() => {
    if (error) {
      toast.error(error);
      seterror("");
    }
  }, [error]);

  useEffect(() => {
    if (message) {
      toast.success(message);
      setmessage("");
    }
  }, [message]);

  useEffect(() => {
    if (deletMessage) {
      toast.info(deletMessage);
      setdeletMessage("");
    }
  }, [deletMessage]);

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
              <IncomeItem
                key={_id}
                id={_id}
                title={title}
                description={description}
                amount={amount}
                date={date}
                category={category}
                indicaterColor={"green"}
                deleteitem={DeleteIncome}
              />
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
  .income-content {
    display: flex;
    gap: 2rem;
  }
  .income {
    flex: 1;
  }
  h1 {
    font-size: 1.9rem;
    font-weight: 600;
    color: #222260;
  }
  .total-income {
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 0.5rem;
    margin: 0.7rem 0;
    font-size: 1.5rem;
    gap: 0.5rem;
    font-weight: 600;
    color: #222260;
    span {
      font-size: 2.2rem;
      color: green;
      font-weight: 600;
    }
  }
`;
export default Income;
