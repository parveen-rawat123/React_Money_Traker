
import './App.css'
import HomePage from './HomePage'
import DashBord from './DashBord'
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
    </Routes>
    </BrowserRouter>
    </>
)
}
export default App
