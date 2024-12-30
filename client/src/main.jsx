import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./Context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <BrowserRouter
        future={{
          v7_startTransition: true, // Enable startTransition for smoother updates
          v7_relativeSplatPath: true, // Enable updated splat path resolution
        }}
      >
        <App />
      </BrowserRouter>
    </AuthContextProvider>
  </React.StrictMode>
);
