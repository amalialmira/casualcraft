import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
// import Home from './pages/Home.jsx'
import App from './App.jsx'
// import Details from './pages/Details.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <Details /> */}
  </React.StrictMode>,
)
