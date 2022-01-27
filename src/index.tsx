import React from 'react';
import ReactDOM from 'react-dom';
import { DAppProvider } from "@usedapp/core";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';
import Richyshib from './views';
import MintAgain from './views/mintAgain';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <div id="particles">
      <Routes>
        <Route path="/" element={<DAppProvider config={{}}><Richyshib /></DAppProvider>} />
        <Route path="/valid" element={<MintAgain />} />
      </Routes>
    </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
