import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from "./context/AuthContext"
import { FormProvider } from './context/FormContext.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <FormProvider>
            <AuthProvider>
                <App />
            </AuthProvider>
        </FormProvider>
    </BrowserRouter>
)
