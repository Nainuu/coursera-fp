import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../cartSlice";
import acera from "../assets/acera.jpg";
import moneyPlant from "../assets/moneyPlant.jpg";
import peacelily from "../assets/peacelily.jpg";
import bougainvillea from "../assets/bougainvillea.jpg";
import jasmine from "../assets/jasmine.jpg";    
import neem from "../assets/neem.jpg";
import aloevera from "../assets/aloevera.jpg";
import snake from "../assets/snake.jpg";
import cactus from "../assets/cactus.jpg";
import mango from "../assets/mango.jpg";
import guava from "../assets/guava.jpg";
import lemon from "../assets/lemon.jpg";



const products = [
  { id: 1, name: "Areca Palm", price: 300, image: acera , category: "Indoor" },
  { id: 2, name: "Money Plant", price: 200, image: moneyPlant , category: "Indoor" },
  { id: 3, name: "Peace Lily", price: 250, image: peacelily , category: "Indoor" },

  { id: 4, name: "Bougainvillea", price: 180, image: bougainvillea , category: "Outdoor" },
  { id: 5, name: "Jasmine (Motia)", price: 220, image: jasmine, category: "Outdoor" },
  { id: 6, name: "Neem Tree", price: 280, image: neem , category: "Outdoor" },

  { id: 7, name: "Aloe Vera", price: 150, image: aloevera , category: "Succulents" },
  { id: 8, name: "Snake Plant", price: 200, image: snake , category: "Succulents" },
  { id: 9, name: "Cactus (Desert Cactus)", price: 180, image: cactus , category: "Succulents" },

  { id: 10, name: "Mango Tree", price: 400, image: mango , category: "Fruits" },
  { id: 11, name: "Guava Tree", price: 350, image: guava , category: "Fruits" },
  { id: 12, name: "Lemon Tree", price: 250, image: lemon , category: "Fruits" },
];

const ProductListing = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.cart);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-4xl font-bold mb-6 text-center text-green-700">Pakistani Plants</h2>
      
      {["Indoor", "Outdoor", "Succulents", "Fruits"].map(category => (
        <div key={category} className="mb-10">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">{category} Plants</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.filter(product => product.category === category).map(product => {
              const isAdded = cart.some(item => item.id === product.id);
              
              return (
                <div key={product.id} className="bg-white p-5 flex flex-col justify-center items-center rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                  <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded" />
                  <h3 className="text-lg font-semibold mt-3">{product.name}</h3>
                  <p className="text-gray-600">Price: Rs {product.price}</p>
                  
                  <button
                    onClick={() => dispatch(addToCart(product))}
                    disabled={isAdded}
                    className={`mt-3 px-5 py-2 rounded text-white font-medium transition duration-300 ${
                      isAdded ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700 hover:cursor-pointer"
                    }`}
                  >
                    {isAdded ? "Added to Cart" : "Add to Cart"}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductListing;
