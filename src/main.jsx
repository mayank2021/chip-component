import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChipContextProvider } from "./context/ChipContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChipContextProvider>
      <App />
    </ChipContextProvider>
  </React.StrictMode>
);
