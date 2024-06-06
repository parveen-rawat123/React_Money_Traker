import axios from "axios";
import { useContext, useState, createContext } from "react";
const BASE_URL = "http://localhost:3000/api/v1/";
const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [income, setIncome] = useState([]);
  const [expense, setexpences] = useState([]);
  const [message, setmessage] = useState("");
  const [error, seterror] = useState("");
  const [deletMessage, setdeletMessage] = useState("");

  
  //income fucntion
  const addIncome = async (income) => {
    const response = await fetch(`${BASE_URL}add-income`, {
      method: "POST",
      body: JSON.stringify(income),
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await response.json();
    if (response.status === 200) {
      setmessage(data.message);
    } else if (response.status === 400) {
      seterror(data.error);
    } else if (response.status === 500) {
      seterror(data.error);
    }
    getIncome();
  };

  //getIncome
  const getIncome = async () => {
    const responce = await axios.get(`${BASE_URL}get-income`);
    setIncome(responce.data);
  };

  //deleteIncome
  const DeleteIncome = async (id) => {
    try {
      const responce = await axios.delete(`${BASE_URL}delete-income/${id}`);
      console.log(responce);
      if (responce.status === 201) {
        setdeletMessage(responce.data.message);
      }
    } catch (error) {
      console.log("delete income error", error);
    }
    getIncome();
  };

  //setTotalIncome
  const totalIncome = () => {
    let total = 0;
    income.forEach((income) => {
      total += income.amount;
    });
    return total;
  };

  //Expense fucntion
  // Add Expense
  const addExpense = async (expense) => {
    const responce = await fetch(`${BASE_URL}add-expense`, {
      method: "POST",
      body: JSON.stringify(expense),
      headers: {
        "content-type": "application/json",
      },
    });
    let data = await responce.json();
    if (responce.status === 200) {
      setmessage(data.message);
    } else if (responce.status === 400) {
      seterror(data.error);
    } else if (responce.status === 500) {
      seterror(data.error);
    }
    getExpense();
  };

  //getExpense
  const getExpense = async () => {
    const responce = await axios.get(`${BASE_URL}get-expense`);
    setexpences(responce.data);
  };

  //deleteExpense
  const DeleteExpense = async (id) => {
    try {
      const responce = await axios.delete(`${BASE_URL}delete-expense/${id}`);
      if (responce.status === 200) {
        setdeletMessage(responce.data.message);
      }
    } catch (error) {
      console.log("delete income error", error);
    }
    getExpense();
  };

  //get Total Expense
  const totalExpense = () => {
    let total = 0;
    expense.forEach((expense) => {
      total += expense.amount;
    });
    return total;
  };

  const totalBalance = () => {
    return totalIncome() - totalExpense();
  };

  const transactionHistory = () => {
    const history = [...income, ...expense];
    history.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
    return history.slice(0, 3);
  };

  return (
    <GlobalContext.Provider
      value={{
        addIncome,
        getIncome,
        income,
        DeleteIncome,
        totalIncome,
        addExpense,
        getExpense,
        DeleteExpense,
        totalExpense,
        expense,
        totalBalance,
        transactionHistory,
        setmessage,
        message,
        error,
        deletMessage,
        seterror,
        setdeletMessage,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
