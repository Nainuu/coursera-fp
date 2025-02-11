import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateQuantity, removeFromCart } from "../cartSlice";
import { Link } from "react-router-dom";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const { cart, totalCost } = useSelector(state => state.cart);

  return (
    <div className="p-6 flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold mb-4">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="font-semibold">Your cart is empty.</p>
      ) : (
        <ul className="space-y-4">
          {cart.map((item) => (
            <li key={item.id} className="bg-slate-300 p-4 rounded-lg w-3xl shadow-2xl border-2 border-slate-800  flex justify-between">
              <img src={item.image} alt={item.name} className="w-20 h-20 object-cover" />
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p>Price: Rs {item.price} x {item.quantity}</p>
                <div className="flex gap-2">
                  <button onClick={() => dispatch(updateQuantity({ id: item.id, amount: 1 }))} className="px-3 py-1 bg-green-500 hover:cursor-pointer text-white rounded">+</button>
                  <button onClick={() => dispatch(updateQuantity({ id: item.id, amount: -1 }))} className="px-3 py-1 bg-red-500 hover:cursor-pointer text-white rounded">-</button>
                  <button onClick={() => dispatch(removeFromCart(item.id))} className="px-3 py-1 bg-gray-800 hover:bg-gray-700 hover:cursor-pointer text-white rounded">Remove</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
      <h3 className="text-xl font-bold mt-4 text-center bg-slate-300 shadow-2xl border-2 border-slate-800 rounded-2xl w-sm py-1 ">Total Cost: Rs {totalCost ? totalCost.toFixed(2) : "0.00"}</h3>
      <Link to="/products">
        <button className="m-4  px-6 py-2 bg-blue-800 font-semibold text-white rounded-lg border-2 border-slate-800 ">Continue Shopping</button>
      </Link>
      <button onClick={() => alert("Coming Soon!")} className="ml-4 px-6 py-2 bg-yellow-500 font-semibold text-white rounded-xl border-2 border-slate-800 ">Checkout</button>
    </div>
  );
};

export default ShoppingCart;
