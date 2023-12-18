import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Home from "./admin/Home.jsx";
import Homepage from "./components/Homepage.jsx";
import HowTo from "./components/HowTo.jsx";
import Footer from "./components/Footer.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <AuthProvider>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/admin" element={<Home />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/howTo" element={<HowTo />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/amen" element={<HomePage />} />
      </Routes>
      <Footer />
    </AuthProvider>
  </Router>
);
