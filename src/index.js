import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css'

// Get the DOM element for the element with id 'root' located on the public/index.html file.
const root = ReactDOM.createRoot(document.getElementById('root'))

// We inject our app component (from App.js file) inside that element.
root.render(<App/>)