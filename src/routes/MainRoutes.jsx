import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Cart from "../pages/Cart";
import Products from "../pages/Products";
import Register from "../pages/Register";
import CreateProduct from "../pages/admin/CreateProduct";
import ProductDetails from "../pages/admin/ProductDetails";
import { useSelector } from "react-redux";
import UserProfile from "../pages/user/UserProfile";

const MainRoutes = () => {
  const { users } = useSelector((state) => state.userReducer);

  return (
    <Routes>
      <Route path="/" element={users ? <Products /> : <Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/register" element={<Register />} />

      <Route path="/admin/create-product" element={<CreateProduct />} />
      <Route path="/admin/user-profile" element={<UserProfile />} />
      <Route path="/product/:id" element={<ProductDetails />} />
    </Routes>
  );
};

export default MainRoutes;
