import "./style/index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { FullSizeImageContextProvider } from "./FullSizeImageContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <FullSizeImageContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </FullSizeImageContextProvider>
  </BrowserRouter>
);
