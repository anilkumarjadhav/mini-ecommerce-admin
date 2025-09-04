import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Cart from "../pages/Cart";
import Products from "../pages/Products";
import Register from "../pages/Register";
import CreateProduct from "../pages/admin/CreateProduct";
import ProductDetails from "../pages/admin/ProductDetails";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/products" element={<Products />} />
      <Route path="/register" element={<Register />} />

      <Route path="/create-product" element={<CreateProduct />} />
      <Route path="/product/:id" element={<ProductDetails />} />
    </Routes>
  );
};

export default MainRoutes;
