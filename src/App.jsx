import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ProductListing from "./pages/ProductListing";
import ShoppingCart from "./pages/ShoppingCart";
import { useSelector } from "react-redux";
import plant from "./assets/plantBG.jpg";

const App = () => {
  const cartCount = useSelector(state =>
    state.cart.cart.reduce((total, item) => total + item.quantity, 0)
  );

  return (
    <div
      className="min-h-screen bg-gray-900 bg-cover bg-center"
    >
      <header className="bg-green-900 text-white text-xl font-semibold p-6 flex justify-between px-6 bg-opacity-90">
        <nav className="flex gap-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/products" className="hover:underline">Products</Link>
        </nav>
        <Link to="/cart" className="hover:underline">Cart ({cartCount})</Link>
      </header>
      <div className="backdrop-blur-md bg-black/10 min-h-screen  bg-cover"
      style={{ backgroundImage: `url(${plant})` }}
      >

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<ProductListing />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
