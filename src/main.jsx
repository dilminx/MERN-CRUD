import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter as Router} from 'react-router-dom';
import Search from './navbar/Search.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

  <Router>
    <Search/>
    <App />
  </Router>

  </React.StrictMode>,
)
