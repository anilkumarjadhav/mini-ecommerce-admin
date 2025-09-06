import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
const Login = lazy(() => import("../pages/Login"));
const Products = lazy(() => import("../pages/Products"));
const Register = lazy(() => import("../pages/Register"));
const CreateProduct = lazy(() => import("../pages/admin/CreateProduct"));
const ProductDetails = lazy(() => import("../pages/admin/ProductDetails"));
const UserProfile = lazy(() => import("../pages/user/UserProfile"));
const PageNotFound = lazy(() => import("../PageNotFound"));
const AuthWrapper = lazy(() => import("./AuthWrapper"));
const UnAuthWrapper = lazy(() => import("./UnAuthWrapper"));
const Cart = lazy(() => import("../pages/Cart"));

const MainRoutes = () => {
  const { users } = useSelector((state) => state.userReducer);

  return (
    <Routes>
      <Route path="/" element={<Products />} />

      <Route
        path="/login"
        element={
          <UnAuthWrapper>
            <Login />
          </UnAuthWrapper>
        }
      />
      <Route
        path="/register"
        element={
          <UnAuthWrapper>
            <Register />
          </UnAuthWrapper>
        }
      />

      <Route
        path="/admin/create-product"
        element={
          <AuthWrapper>
            <CreateProduct />
          </AuthWrapper>
        }
      />
      <Route
        path="/user-profile"
        element={
          <AuthWrapper>
            <UserProfile />
          </AuthWrapper>
        }
      />
      <Route
        path="/product/:id"
        element={
          <AuthWrapper>
            <ProductDetails />
          </AuthWrapper>
        }
      />
      <Route
        path="/cart"
        element={
          <AuthWrapper>
            <Cart />
          </AuthWrapper>
        }
      />

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default MainRoutes;
