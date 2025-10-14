import React from "react";
import Navbar from "./components/navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { Routes, Route } from 'react-router-dom';
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/Product/:id' element={<ProductDetails />}  />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
