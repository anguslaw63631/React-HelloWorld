import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Clock from './Clock/Clock'
import ClickCounter from './ClickCounter/ClickCounter';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>


    <Clock />
    <ClickCounter></ClickCounter>


  </React.StrictMode>
);
