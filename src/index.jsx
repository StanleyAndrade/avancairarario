import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
//import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Start from './assets/js/start';
import Home from './assets/js/home'
import Reset from './assets/js/reset';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "start",
    element: <Start/>
  },
  {
    path: "reset",
    element: <Reset/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
