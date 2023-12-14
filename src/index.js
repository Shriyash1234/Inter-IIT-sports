import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Routes, Route } from "react-router-dom";

import Home from './components/home';
import AquaticsSchedule from './components/AquaticsSchedule';
import AquaticsResults from './components/AquaticsResults';
import About from './components/about';
import Schedule from './components/schedule'
import Results from './components/results';

import './index.css';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/About" element={<About />} />
        <Route index path="/Aquatics/Schedule" element={<AquaticsSchedule />} />
        <Route index path="/Aquatics/Results" element={<AquaticsResults />} />
        <Route index path="/Schedule" element={<Schedule />} />
        <Route index path="/Results" element={<Results />} />
      </Routes>
    </HashRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
