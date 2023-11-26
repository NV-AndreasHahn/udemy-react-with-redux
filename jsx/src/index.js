// 1) Import React and React Dom
import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App';

// 2) Get a reference to the root element 
const el = document.getElementById('root');

// 3) Tell React to take control of root element
const root = ReactDom.createRoot(el);

// 5) Show the Component on Screen
root.render(<App/>)