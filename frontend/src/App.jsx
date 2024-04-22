
import './App.css'
import HomePage from './HomePage'
import DashBord from './DashBord'
import SignUp from './SignUp';
import LogIn from './LogIn';
import {BrowserRouter,Route, Routes,} from "react-router-dom";
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
    </Routes>
    </BrowserRouter>
    </>
)
}
export default App
