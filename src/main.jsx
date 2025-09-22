import React from 'react';
import ReactDOM from 'react-dom/client'; // ReactDOMをインポート
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import './index.css'

// ReactDOMオブジェクトからcreateRootを呼び出す
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)