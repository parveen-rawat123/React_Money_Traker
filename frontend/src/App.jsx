import  { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashBord from './userDashBord';
import SignUp from './components/auth/SignUp';
import LogIn from './components/auth/LogIn';
import HomePage from './HomePage';
import Forgetpassword from './components/auth/Forgetpassword';
import Getintouch from './components/navigation/GetinTouch';
import Feedback from './components/feedback/Feedback';
import About from './components/about/About';
import BeforeLoader from './utils/BeforeLoader';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <BeforeLoader />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/Dashbord' element={<DashBord />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/LogIn' element={<LogIn />} />
        <Route path='/Forgetpassword' element={<Forgetpassword />} />
        <Route path='/GetinTouch' element={<Getintouch />} />
        <Route path='/Feedback' element={<Feedback />} />
        <Route path='/About' element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
