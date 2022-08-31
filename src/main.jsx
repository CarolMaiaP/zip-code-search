import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ZipCodeContextProvider } from './contexts/ZipCodeContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ZipCodeContextProvider>
      <App />
    </ZipCodeContextProvider>
  </React.StrictMode>
)
