// React Imports
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// My Imports
import Home from "./pages/home";
import LoginPage from "./pages/loginPage";
import ProductPage from "./pages/productPage";
import RegisterPage from "./pages/registerPage";
import NoPage from "./pages/noPage";
import NavBar from "./components/common/navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="ProductPage" element={<ProductPage />} />
          <Route path="LoginPage" element={<LoginPage />} />
          <Route path="RegisterPage" element={<RegisterPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
