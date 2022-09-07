import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import './index.css';
import { appTheme } from './utils/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ThemeProvider theme={appTheme} >
      <React.StrictMode>
          <App />
      </React.StrictMode>
    </ThemeProvider>
  );