import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom"
import "react-toastify/dist/ReactToastify.css"
import { Slide, ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <App />
        <ToastContainer
         position='bottom-right'
         autoClose={1600}
         hideProgressBar={true}
         theme='dark'
         transition={Slide}
        />

    

    </BrowserRouter>
  </StrictMode>,
)
