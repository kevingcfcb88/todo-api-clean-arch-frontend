import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import './components/layout/Sidebar';
import { Sidebar } from './components/layout/Sidebar';
import { Content } from './components/layout/Content';

ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <Sidebar />
      <Content />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
