import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import App from "./App";
import { BrowserRouter } from "react-router-dom";


console.log('env:', process.env.REACT_APP_env)
ReactDOM.render(
    <BrowserRouter basename={'/video'}>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);

reportWebVitals();
