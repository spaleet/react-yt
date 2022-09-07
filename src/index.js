import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import darkTheme from './utils/theme/darkTheme';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ThemeProvider theme={darkTheme} >
        <CssBaseline />
        <App />
    </ThemeProvider>
);