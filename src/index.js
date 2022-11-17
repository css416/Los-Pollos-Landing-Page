import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/stylesheets/index.css';
import App from './App';
import { GalleryContextProvider } from './context/GalleryContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <GalleryContextProvider>
        <App />
    </GalleryContextProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

