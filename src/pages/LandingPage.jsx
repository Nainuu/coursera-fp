import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-between align-middle text-center bg-cover bg-center sm:px-20 " 
         style={{ backgroundImage: "url('/background.jpg')" }}>
      
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 max-w-3xl text-white">
        <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">Welcome To </h1>
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">Paradise Nursery</h1>
        <h1 className="text-4xl md:text-3xl font-bold drop-shadow-lg">----------</h1>
        <p className="text-lg md:text-2xl mt-4 drop-shadow-md">
          Find the perfect green companion for your space!
        </p>

        <Link to="/products">
          <button className="mt-6 px-6 py-3 bg-green-500 text-white text-lg hover:cursor-pointer  font-semibold rounded-lg hover:bg-green-700 transition duration-300">
            Get Started
          </button>
        </Link>
      </div>
      <div className="text-lg md:text-xl mt-4 drop-shadow-md text-white w-4xl ml-8 leading-relaxed">
      Bring nature indoors with the finest houseplants from our Pakistani nursery! From vibrant succulents to elegant indoor trees, we have the perfect green companion to brighten your space. Enhance your home or office with plants that not only look great but also improve air quality. Find your perfect plant today!
      </div>
    </div>
  );
};

export default LandingPage;
