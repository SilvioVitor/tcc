import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home.js';
import App from './App.js';
import NotFound from './pages/NotFound.js';
import Question from './pages/Question..js';
import Analysis from './pages/Analysis.js';
import QuestionContextProvider from './context/QuestionContext.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QuestionContextProvider>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/app' element={<App />} />
          <Route path='/question' element={<Question />} />
          <Route path='/analysis' element={<Analysis />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </QuestionContextProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
