import axios from "axios";
import  { useContext, useState, createContext } from "react";
const BASE_URL = "http://localhost:3000/api/v1/";
const GlobalContext = createContext();
import { toast } from "react-toastify";
export const GlobalProvider = ({ children }) => {
  const [income, setIncome] = useState([]);
  const [expence, setexpences] = useState([]);
  const [error, seterror] = useState(null);

  const addIncome = async (income) => {
    try {
      const responce = await axios.post(`${BASE_URL}add-income`, income, {
        headers: {
          "content-type": "application/json",
        },
      })
      console.log("responce jai ", responce)
      console.log("income", income)
      if (responce.status === 400) {
        console.log(responce.error)
        toast.error(responce.error)
      } else if (responce.status === 500) {
        toast.error(responce.error)
      } else if (responce.status === 200) {
        toast.success(responce.message)
      }
    } catch (err) {
      seterror(err);
    }
    getIncome()
  };

  const getIncome = async () => {
    const responce = await axios.get(`${BASE_URL}get-income`)
    setIncome(responce.data)
  }

const DeleteIncome = async (id)=>{
  try {
    const responce =  await axios.delete(`${BASE_URL}delete-income/${id}`)
    console.log(responce)
  console.log('Delete item with id:', id);
  } catch (error) {
    console.log("delete income error", error)
  }
  getIncome()
}

const totalIncome = ()=>{
  let total = 0
  income.forEach((income)=>{
    total += income.amount
  })
  return total;
}



  return (
    <GlobalContext.Provider value={{ 
      addIncome,
      getIncome,
      income,
      DeleteIncome,
      totalIncome
     }
    }>
      {children}
    </GlobalContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
