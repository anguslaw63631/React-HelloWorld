import React from 'react';
import ReactDOM from 'react-dom/client';

//Components
import Clock from './Clock/Clock'
import ClickCounter from './ClickCounter/ClickCounter';
import Calculator from './Calculator/Calculator';

//Css
import "../node_modules/bootstrap/dist/js/bootstrap"
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import './index.css';
import './css/style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>

    <div className='container'>

      <div className='card'>
        <h5 class="card-header">Clock</h5>
        <div className='card-body'><Clock /></div>
      </div>

      <div className='card'>
        <h5 class="card-header">Click Counter</h5>
        <div className='card-body'><ClickCounter /></div>
      </div>

      <div className='card'>
        <h5 class="card-header">Calculator</h5>
        <div className='card-body'><Calculator /></div>
      </div>
      
    </div>

  </React.StrictMode>
);
