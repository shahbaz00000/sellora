import React from 'react'
import { useNavigate } from 'react-router-dom';

const CartSummary = ({ carts = [] }) => {

  let totalPrice = 0;

  for (let cart of carts) {
    totalPrice += cart.product.price;
  }

  const tax = totalPrice * 0.18;
  const shipping = totalPrice >= 500 ? 0 : 100;
  const grandTotal = totalPrice + tax + shipping;

  const navigate = useNavigate();
  const handleContinue = (e) => {
    e.preventDefault();
    navigate("/address");
  }

  return (
    <div className="bg-white border rounded-2xl shadow-lg p-6 space-y-4 h-fit">

      {/* Title */}
      <h1 className="text-xl font-bold text-gray-800 border-b pb-3">
        Cart Summary
      </h1>

      <div className="space-y-2 text-sm">

        <div className="flex justify-between">
          <span className="text-gray-600">
            Subtotal
          </span>
          <span className="font-semibold">
            ₹{totalPrice}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600">
            Tax (18%)
          </span>
          <span className="font-semibold">
            ₹{tax}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600">
            Shipping
          </span>
          <span className="font-semibold">
            {shipping === 0 ? "Free" : `₹${shipping}`}
          </span>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t pt-3 flex justify-between text-lg font-bold">
        <span>Total</span>
        <span className="text-blue-600">
          ₹{grandTotal}
        </span>
      </div>

      {/* Checkout Button */}
      <button onClick={handleContinue} className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition">
        Continue
      </button>

    </div>
  );
};




export default CartSummary
