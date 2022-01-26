import React from 'react';
import logo from './logo.svg';
import './App.css';
import Richyshib from './views';
import MintAgain from './views/mintAgain';
// import 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  
  return (
    <BrowserRouter>
    <div id="particles">
      <Routes>
        <Route path="/" element={<Richyshib />} />
        <Route path="valid" element={<MintAgain />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
