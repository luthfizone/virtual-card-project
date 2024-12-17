import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./components/styles/index.css";
import App from "./App.jsx";

/**
 * Entry point of the application. Renders the App component into the DOM.
 */
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
