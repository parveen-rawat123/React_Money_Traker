import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './App.css'
import { GlobalProvider } from "./components/context/GlobalContext";
import { SnackbarProvider } from './components/context/SnackbarContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SnackbarProvider>
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </SnackbarProvider>
  </React.StrictMode>
)
