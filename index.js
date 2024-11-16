import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.js"; // Note the .js extension
import "./styles.css";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  React.createElement(React.StrictMode, null,
    React.createElement(App)
  )
);
