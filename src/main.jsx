// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import ReactDOM from "react-dom/client";
import CommingSoon from "./pages/user/LandingPage/CommingSoon.jsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <App />
    {/* <CommingSoon /> */}
  </BrowserRouter>
);
