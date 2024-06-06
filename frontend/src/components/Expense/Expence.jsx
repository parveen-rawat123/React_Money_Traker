import styled from "styled-components";
import { useGlobalContext } from "../context/GlobalContext";
import IncomeItem from "../incomeitem/IncomeItem";
import ExpenseForm from "../form/ExpenseForm";
import { useEffect } from "react";
import { toast } from "react-toastify";

const Expense = () => {
  const {
    getExpense,
    expense,
    DeleteExpense,
    totalExpense,
    message,
    error,
    deletMessage,
    seterror,
    setmessage,
    setdeletMessage,
  } = useGlobalContext();

  useEffect(() => {
    if (message) {
      toast.success(message);
      setmessage("");
    }
  }, [message]);

  
  useEffect(() => {
    if (error) {
      toast.error(error);
      seterror('')
    }
  }, [error]);


  useEffect(() => {
    if (deletMessage) {
      toast.info(deletMessage);
      setdeletMessage('')
    }
  }, [deletMessage]);


  useEffect(() => {
    getExpense();
  }, []);

  return (
    <ExpenseStyled>
      <h1>Expenses</h1>
      <h2 className="total-income">
        {" "}
        Total Expense <span>${totalExpense()}</span>
      </h2>
      <div className="income-content">
        <div className="form-container">
          <ExpenseForm />
        </div>
        <div className="income">
          {expense.map((item) => {
            const { _id, title, amount, date, category, description, type } =
              item;
            return (
              <IncomeItem
                key={_id}
                id={_id}
                title={title}
                description={description}
                amount={amount}
                date={date}
                type={type}
                category={category}
                indicaterColor={"green"}
                deleteitem={DeleteExpense}
              />
            );
          })}
        </div>
      </div>
    </ExpenseStyled>
  );
};
const ExpenseStyled = styled.div`
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
export default Expense;
