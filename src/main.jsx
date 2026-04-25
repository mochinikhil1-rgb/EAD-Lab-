import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Counterapp from './assets/components/timer.jsx'
import Garage from './assets/components/stateprops.jsx'
import ReactForm from './assets/components/controlForm.jsx'
import RouterComp from './assets/components/router.jsx'
import {First, Home, About} from './assets/components/router2.jsx'
import PasswordStrengthChecker from './assets/components/password.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PasswordStrengthChecker />
    <First />
    <RouterComp />
    <ReactForm />
    <Counterapp />
    <Garage />
    <App />
  </StrictMode>,
)
