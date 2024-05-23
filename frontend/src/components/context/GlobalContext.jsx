import axios from "axios";
import React, { useContext, useState,createContext } from "react";
const BASE_URL = "http://localhost:3000/api/v1/";
const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {
  const [income, setIncomes] = useState([]);
  const [expence, setexpences] = useState([]);
  const [error, seterror] = useState(null);

  const addIncome = async (income) => {

    const responce = await axios
      .post(`${BASE_URL}add-income`, income)
      .catch((err) => {
        seterror(err);
      });
  };
  return (
    <GlobalContext.Provider value={"hello"
    }>
      {children}
    </GlobalContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
