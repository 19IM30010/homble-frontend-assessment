import React from "react";
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import ProductListingPage from "./screens/ProductListingPage";
import ProductDetailPage from "./screens/ProductDetailPage";
import "./App.css";
import Dashboard from "./components/DashBoard/Dashboard";
const AppRouter = () => {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-light bg-white fixed-top shadow-sm">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">Homble Foods</a>
            <Link className="nav-link" to="/dashboard">Dashboard</Link>
          </div>
      </nav>
      <div className="content">
        <Routes>
          <Route path="/" element={<ProductListingPage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </div>
      
    </BrowserRouter>
  );
};

export default AppRouter;
