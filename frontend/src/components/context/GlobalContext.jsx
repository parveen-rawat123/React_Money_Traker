import axios from "axios";
import { useContext, useState, createContext } from "react";
const BASE_URL = "http://localhost:3000/api/v1/";
const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [income, setIncome] = useState([]);
  const [expense, setexpences] = useState([]);
  const [tost , settost] = useState([]);
  const [error, seterror] = useState([]);
  const [delet, setdelet] = useState([]);


  //income fucntion
  const addIncome = async (income) => {
      const response = await fetch(`${BASE_URL}add-income`,{
        method : "POST",
        body : JSON.stringify(income),
        headers: {
          "content-type": "application/json",
        },
      });
      const data = await response.json()
      console.log(data)
      console.log(response, "response");
      if (response.status === 200) {
        settost(data.message)
      } else if (response.status === 400) {
        seterror(data.error)
      } else if (response.status === 500) {
        seterror(data.error)
      }
    getIncome();
  };
  

  const getIncome = async () => {
    const responce = await axios.get(`${BASE_URL}get-income`)
    setIncome(responce.data)
  }

  const DeleteIncome = async (id) => {
    try {
      const responce = await axios.delete(`${BASE_URL}delete-income/${id}`)
      console.log(responce)
      if(responce.status === 200){
        setdelet(responce.data.message)
      }
    } catch (error) {
      console.log("delete income error", error)
    }
    getIncome()
  }

  const totalIncome = () => {
    let total = 0
    income.forEach((income) => {
      total += income.amount
    })
    return total;
  }

  //Expense fucntion
  const addExpense = async (expense) => {
    try {
      const responce = await axios.post(`${BASE_URL}add-expense`, expense, {
        headers: {
          "content-type": "application/json",
        },
      })
      console.log(responce)
      console.log(responce.data)
    } catch (err) {
      console.log(err)
    }
    getExpense()
  };  

  const getExpense = async () => {
    const responce = await axios.get(`${BASE_URL}get-expense`)
    setexpences(responce.data)
  }

  const DeleteExpense = async (id) => {
    try {
      const responce = await axios.delete(`${BASE_URL}delete-expense/${id}`)
      console.log(responce)
      console.log('Delete item with id:', id);
    } catch (error) {
      console.log("delete income error", error)
    }
    getExpense()
  }

  const totalExpense = () => {
    let total = 0
    expense.forEach((expense) => {
      total += expense.amount
    })
    return total;
  }

const totalBalance = ()=>{
  return totalIncome() - totalExpense()
}

const transactionHistory = ()=>{
  const history = [...income, ...expense]
  history.sort((a,b)=>{
 return new Date(b.createdAt) - new Date(a.createdAt) 
  })
  return history.slice(0,3)
}

  return (
    <GlobalContext.Provider value={{
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
      tost,
      error,
      delet
    }
    }>
      {children}
    </GlobalContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
