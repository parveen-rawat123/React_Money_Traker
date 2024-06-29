import { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from "../context/GlobalContext";
import Button from "../Button/Button";
import { plus } from "../../utils/icons/Icons";
import Loader from "../../utils/Loader"
const ExpenseForm = () => {
  const { addExpense, ExpenseLoading } = useGlobalContext();

  const [inputState, setInputState] = useState({
    title: "",
    amount: "",
    date: new Date(),
    category: "",
    description: "",
  });

  const { title, amount, date, category, description } = inputState;

  const handleInput = (e) => {
    let name = e.target.name;
    let val = e.target.value;
    setInputState({
      ...inputState,
      [name]: val,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputState);
    addExpense(inputState);
    setInputState({
      title: "",
      amount: "",
      date: new Date(),
      category: "",
      description: "",
    });
  };

  return (
    <ExpenseFormStyled onSubmit={handleSubmit}>
      <div className="input-control">
        <input
          type="text"
          value={title}
          name="title"
          placeholder="Expense Title"
          onChange={handleInput}
        />
      </div>

      <div className="input-control">
        <input
          type="number"
          value={amount}
          name="amount"
          placeholder="Expense Amount"
          onChange={handleInput}
        />
      </div>

      <div className="input-control">
        <DatePicker
          id="date"
          placeholderText="Enter a date"
          selected={date}
          dateFormat="dd/MM/yyyy"
          onChange={(date) => {
            setInputState({ ...inputState, date: date });
          }}
        />
      </div>

      <div className="selects input-control">
        <select
          value={category}
          name="category"
          id="category"
          onChange={handleInput}
        >
          <option value="" disabled>
            Select option
          </option>
          <option value="education">Education</option>
          <option value="groceries">Groceries</option>
          <option value="health">Health</option>
          <option value="subscriptions">Subscriptions</option>
          <option value="takeaways">Takeaways</option>
          <option value="clothing">Clothing</option>
          <option value="travelling">Travelling</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="input-control">
        <textarea
          name="description"
          id="description"
          value={description}
          onChange={handleInput}
          placeholder="add a refrence"
          cols={30}
          maxLength={20}
        ></textarea>
      </div>

      <div className="submit-btn">
        <Button
          name={ExpenseLoading ? <Loader /> : "Add Expense"}
          icon={ExpenseLoading ? '' : plus}
          bPad={".7rem 0.8rem"}
          bRed={"30px"}
          bg={"green"}
          color={"#fff"}
        />
      </div>
    </ExpenseFormStyled>
  );
};

const ExpenseFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  input,
  textarea,
  select {
    font-family: inherit;
    font-size: inherit;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    border: 1px solid #1b52ba;
    background: transparent;
    resize: none;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    background-color: #071739;
    &::placeholder {
      color: grey;
      font-family: "Nunito", sans-serif;
    }
  }
  .input-control {
    input {
      width: 100%;
    }
  }
  .selects {
    display: flex;
  }
  .submit-btn {
    button {
      box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
      &:hover {
        background: #18a518 !important;
      }
    }
  }
`;

export default ExpenseForm;
