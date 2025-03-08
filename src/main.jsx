import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { AppProvider } from './context/globalState.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* App component needs to be wrapped by the AppProvider in order to have access to global state*/}
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>,
)
