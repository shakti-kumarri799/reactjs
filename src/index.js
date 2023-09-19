import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
import Abc, {About, Contactus}  from './Test';
import { Abcd, Xyz } from './Test';
import "./style.css";
import Myclassducat from './Any'; 


import reportWebVitals from './reportWebVitals';
import { Home } from './Cond';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Mybs from './Navbs';
import Reactnav from './Reactnab';
import Uimaterial from './Uimaterial';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Uimaterial/>
    <Mybs/>
    <Reactnav/>
      <Abc></Abc>
    <Abcd></Abcd>
    <Xyz></Xyz>
    <Contactus/> 
    <About/> 
    <Home/>

    <Myclassducat/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

