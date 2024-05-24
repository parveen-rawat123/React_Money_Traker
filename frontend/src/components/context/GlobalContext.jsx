import axios from "axios";
import React, { useContext, useState, createContext } from "react";
const BASE_URL = "http://localhost:3000/api/v1/";
const GlobalContext = createContext();
import { toast } from "react-toastify";
export const GlobalProvider = ({ children }) => {
  const [income, setIncomes] = useState([]);
  const [expence, setexpences] = useState([]);
  const [error, seterror] = useState(null);

  const addIncome = async (income) => {
    try {
      const responce = await axios.post(`${BASE_URL}add-income`, income ,{
        headers: {
          "content-type": "application/json",
        },
      })
      
      console.log("responce jai ", responce)
      console.log("income",income)
      if (responce.status === 400) {
        console.log(responce.error)
        toast.error(responce.error)
      } else if (responce.status === 500) {
        toast.error(responce.error)
      } else if (responce.status === 200) {
        toast.success(responce.message)
      }
      setIncomes([...responce])
      console.log("after",income)
    } catch (err) {
      seterror(err);
    }
  };

  return (
    <GlobalContext.Provider value={{ income, expence, error, addIncome }
    }>
      {children}
    </GlobalContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
