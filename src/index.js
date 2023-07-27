import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Exapmle from './Exapmle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='bg-myColor'>
    {/* <Exapmle/> */}
    <App />
  </div>
);
reportWebVitals();
