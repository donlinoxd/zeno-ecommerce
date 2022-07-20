import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import http from "./config/axios.config";
import * as ROUTES from "./constant/routes.constant";

const Home = React.lazy(() => import("./pages/Home/Home"));
const Login = React.lazy(() => import("./pages/Login/Login"));
const Register = React.lazy(() => import("./pages/Register/Register"));
const Shop = React.lazy(() => import("./pages/Shop/Shop"));
const Product = React.lazy(() => import("./pages/Product/ProductPage"));
const Cart = React.lazy(() => import("./pages/Cart/Cart"));

const App = () => {
  useEffect(() => {
    http("/auth/sessions");
  }, []);

  return (
    <React.Suspense fallback={<div>Loading... </div>}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path={ROUTES.HOME} element={<Home />} />
            {
              // TODO: Make 404 not found page!
            }
            <Route path={ROUTES.SHOP} element={<Shop />} />
            <Route path={ROUTES.PRODUCT} element={<Product />} />
            <Route path={ROUTES.CART} element={<Cart />} />
            <Route path={ROUTES.NOTFOUND} element={<div>404 Not Found</div>} />
          </Route>
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.REGISTER} element={<Register />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};

export default App;
