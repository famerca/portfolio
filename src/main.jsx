import React from "react";
import ReactDOM from "react-dom/client"; // ¡Asegúrate de importar 'client'!
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";


// Encuentra el elemento raíz en tu HTML
const root = ReactDOM.createRoot(document.getElementById("root"));

// Renderiza la aplicación dentro de la raíz
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();