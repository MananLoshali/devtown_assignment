import React from "react";
import Home from "./Pages/Home";
import AllProducts from "./Pages/AllProducts";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<AllProducts />} />
      </Routes>
    </>
  );
};

export default App;
