import axios from "axios";
import { useEffect } from "react";
import { useContext, useState, createContext } from "react";
import { useSnackbar } from "./SnackbarContext";
const AUTH_BASE_URL = "http://localhost:3000/api/v1/user/";
const TRANSACTION_BASE_URL = "http://localhost:3000/api/v2/transaction/";
const FEEDBACK_BASE_URL = "http://localhost:3000/api/v3/feedback/"
const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [income, setIncome] = useState([]);
  const [expense, setexpences] = useState([]);
  const [message, setmessage] = useState("");
  const [signuploading, setsignuploading] = useState(false);
  const [loginloading, setloginloading] = useState(false);
  const [feedbackloading, setfeedbackloading] = useState(false);
  const [getFeedbacks, setgetFeedbacks] = useState([])
  const [incomeLoading, setincomeLoading] = useState(false)
  const [ExpenseLoading, setExpenseLoading] = useState(false)
  const [changepassLoading, setchangepassLoading] = useState(false)
  const { showSnackbar } = useSnackbar();
  const [user, setuser] = useState({
    username: '', image: ''
  });

  //get user image from local storage
  useEffect(() => {
    const savedUser = localStorage.getItem("user")
    const userObject = savedUser ? JSON.parse(savedUser) : null
    if (userObject) {
      setuser(userObject)
    }
  }, []);



  //sign up user
  const SignUpUser = async (formData) => {
    setsignuploading(true);
    try {
      const response = await fetch(`${AUTH_BASE_URL}register`, {
        method: "POST",
        body: formData,
      });
      let data = await response.json();
      if (response.status === 201) {
        showSnackbar({ message: data.message })
        setmessage(data.message);
        const newuser = {
          username: data.data.username,
          image: data.data.avatar
        };
        localStorage.setItem("user", JSON.stringify(newuser));
        setuser(newuser);
      } else if ([400, 401, 402, 403, 404, 500].includes(response.status)) {
        showSnackbar({ error: data.message })
      }
    } catch (error) {
      showSnackbar({ error: "internal server error" })
    } finally {
      setsignuploading(false);
    }
  };

  //log in user 
  const loginUser = async (LogedIn) => {
    setloginloading(true);
    try {
      const response = await fetch(`${AUTH_BASE_URL}login`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(LogedIn),
        headers: {
          "content-type": "application/json",
        }
      });
      const data = await response.json();
      if (response.status === 200) {
        showSnackbar({ message: data.message })
        setmessage(data.message);
        const newuser = {
          username: data.data.loggedInUser.username,
          image: data.data.loggedInUser.avatar
        };
        localStorage.setItem("user", JSON.stringify(newuser));
        setuser(newuser);

      } else if ([400, 401, 402, 403, 500].includes(response.status)) {
        showSnackbar({ error: data.message })
      }
    } catch (error) {
      showSnackbar({ error: "internal server error" })
    } finally {
      setloginloading(false);
    }
  }

  //logout user 
  const logoutUser = async () => {
    const response = await fetch(`${AUTH_BASE_URL}logout`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
    const data = await response.json()
    console.log(data)
    localStorage.removeItem('user');
    setuser({ username: '', image: '' });
  }

  // Forget password
  const ForgetPassword = async (Formdata) => {
    setchangepassLoading(true);
    try {
      const response = await fetch(`${AUTH_BASE_URL}forgotpassword`, {
        method: "POST",
        body: JSON.stringify(Formdata),
        credentials: "include",
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      const data = await response.json();
      console.log(data)
      if (response.status === 200) {
        showSnackbar({ message: data.data });
      } else if ([400, 401, 403, 404, 402].includes(response.status)) {
        showSnackbar({ error: data.message });
      } 
    } catch (error) {
      showSnackbar({ error: "internal server error"});
    } finally {
      setchangepassLoading(false); 
    }
  };
  

  // feedback 
  const Feedback = async (feedback) => {
    setfeedbackloading(true)
    try {
      const response = await fetch(`${FEEDBACK_BASE_URL}addfeedback`, {
        method: "POST",
        body: JSON.stringify(feedback),
        credentials: "include",
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data)
      if (response.status === 200) {
        showSnackbar({ message: data.message })
      } else if ([400, 501].includes(response.status)) {
        showSnackbar({ error: data.message })
      }
    } catch (error) {
      showSnackbar({ error: "internal server error" })
    } finally {
      setfeedbackloading(false)
    }
    getFeedback();
  }

  //get feedback
  const getFeedback = async () => {
    try {
      const responce = await fetch(`${FEEDBACK_BASE_URL}getfeedback`)
      const data = await responce.json()
      setgetFeedbacks(data)
    } catch (error) {
      console.log(error)
    }
  }

  //income fucntion
  const addIncome = async (income) => {
    setincomeLoading(true);
    try {
      const response = await fetch(`${TRANSACTION_BASE_URL}add-income`, {
        method: "POST",
        body: JSON.stringify(income),
        credentials: "include",
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      if (response.status === 200) {
        showSnackbar({ message: data.message });
      } else if ([400, 500].includes(response.status)) {
        showSnackbar({ error: data.error || data.message });
      }
    } catch (error) {
      showSnackbar({ error: "internal server error" })
    } finally {
      setincomeLoading(false);
    }
    getIncome();
  };



  //getIncome
  const getIncome = async () => {
    const responce = await axios.get(`${TRANSACTION_BASE_URL}get-income`);
    setIncome(responce.data);
  };

  //deleteIncome
  const DeleteIncome = async (id) => {
    try {
      const responce = await axios.delete(
        `${TRANSACTION_BASE_URL}delete-income/${id}`
      );
      console.log(responce);
      if (responce.status === 201) {
        showSnackbar({ message: responce.data.message });
      }
    } catch (error) {
      showSnackbar({ error: error });
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
    setExpenseLoading(true);
    try {
      const response = await fetch(`${TRANSACTION_BASE_URL}add-expense`, {
        method: "POST",
        body: JSON.stringify(expense),
        credentials: "include",
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      if (response.status === 200) {
        showSnackbar({ message: data.message });
      } else if ([400, 500].includes(response.status)) {
        showSnackbar({ error: data.error || data.message });
      }
    } catch (error) {
      showSnackbar({ error: "internal server error" })
    } finally {
      setExpenseLoading(false);
    }
    getExpense();
  };


  //getExpense
  const getExpense = async () => {
    const responce = await axios.get(`${TRANSACTION_BASE_URL}get-expense`);
    setexpences(responce.data);
  };

  //deleteExpense
  const DeleteExpense = async (id) => {
    try {
      const responce = await axios.delete(
        `${TRANSACTION_BASE_URL}delete-expense/${id}`
      );
      if (responce.status === 200) {
        showSnackbar({ message: responce.data.message });
      }
    } catch (error) {
      showSnackbar({ error: error });
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
        SignUpUser,
        user,
        loginUser,
        logoutUser,
        ForgetPassword,
        signuploading,
        loginloading,
        Feedback,
        feedbackloading,
        getFeedback,
        getFeedbacks,
        incomeLoading,
        ExpenseLoading,
        changepassLoading
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
