import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import { ThemeProvider } from './context/theme-context';
import { UserDataProvider } from './context/user-data-context';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <UserDataProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UserDataProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);