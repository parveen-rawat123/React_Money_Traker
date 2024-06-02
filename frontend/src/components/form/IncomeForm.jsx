import { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from "../context/GlobalContext";
import Button from "../Button/Button";
import { plus } from "../../utils/Icons";
const Form = () => {
  const { addIncome, getIncome} = useGlobalContext();

  const [inputState, setInputState] = useState({
    title: "",
    amount: "",
    date: new Date(),
    category: "",
    description: "",
  });

  const { title, amount, date, category, description } = inputState;

  const handleInput = (e) => {
    getIncome();
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
    addIncome(inputState);
    setInputState({
      title: "",
      amount: "",
      date: new Date(),
      category: "",
      description: "",
    });
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <div className="input-control">
        <input
          type="text"
          value={title}
          name="title"
          placeholder="Salary Title"
          onChange={handleInput}
        />
      </div>

      <div className="input-control">
        <input
          type="number"
          value={amount}
          name="amount"
          placeholder="Salary Amount"
          onChange={handleInput}
        />
      </div>

      <div className="input-control">
        <DatePicker
          id="date"
          placeholderText="Enter a date"
          selected={date} // Ensure date is a Date object
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
          <option value="salary">Salary</option>
          <option value="freelancing">Freelancing</option>
          <option value="investment">Investment</option>
          <option value="stocks">Stocks</option>
          <option value="bitcoin">Bitcoin</option>
          <option value="bank">Bank</option>
          <option value="youtube">YouTube</option>
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
        ></textarea>
      </div>

      <div className="submit-btn">
        <Button
          name={"Add income"}
          icon={plus}
          bPad={".8rem 1.6rem"}
          bRed={"30px"}
          bg={"green"}
          color={"#fff"}
        />
      </div>
    </FormStyled>
  );
};

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  input,
  textarea,
  select {
    font-family: inherit;
    font-size: inherit;
    outline: none;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    border: 2px solid #fff;
    background: transparent;
    resize: none;
    box-shadow: 0px, 1px, 15px rgba(0, 0, 0, 0.06);
    color: rgba(34, 34, 96, 0.9);
    &::placeholder {
      color: rgba(34, 34, 96, 0.4);
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
    select {
      color: rgba(34, 34, 96, 0.4);
      &:focus,
      &:active {
        color: rgba(34, 34, 96, 1);
      }
    }
  }
  .submit-btn {
    button {
      box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
      &:hover {
        background: yellow !important;
      }
    }
  }
`;

export default Form;
