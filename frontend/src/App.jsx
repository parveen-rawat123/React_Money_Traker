
import './App.css'
import DashBord from './userDashBord'
import SignUp from './components/auth/SignUp';
import LogIn from './components/auth/LogIn';
import {BrowserRouter,Route, Routes,} from "react-router-dom";

import HomePage from './HomePage';
import Forgetpassword from './components/auth/Forgetpassword';
import Getintouch from './components/navigation/GetinTouch';
import Feedback from './components/feedback/Feedback';
import About from "./components/about/About"
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route  
      path='/' 
      element = {<HomePage/>}
      />
      <Route  
      path='/Dashbord' 
      element = {<DashBord/>}
      />
       <Route  
      path='/SignUp' 
      element = {<SignUp/>}
      />
      <Route  
      path='/LogIn' 
      element = {<LogIn/>}
      />
      <Route  
      path='/Forgetpassword' 
      element = {<Forgetpassword/>}
      />
      <Route  
      path='/GetinTouch' 
      element = {<Getintouch/>}
      />
      <Route  
      path='/Feedback' 
      element = {<Feedback/>}
      />
      <Route  
      path='/About' 
      element = {<About/>}
      />
    </Routes>
    </BrowserRouter>
      </>

   
)
}
export default App
