// Cart.js
import React from "react";

const Cart = ({ cart }) => {
  // Calculate total price
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b py-4"
            >
              <div className="flex items-center gap-4">
                <img src={item.images[0]} alt={item.name} className="w-20" />
                <div>
                  <h2 className="font-semibold">{item.model}</h2>
                  <p className="text-gray-600 text-sm">{item.soles[0]?.text}</p>
                </div>
              </div>
              <p className="font-bold">${item.price}</p>
            </div>
          ))}

          {/* Cart Total */}
          <div className="mt-6 flex justify-between font-bold text-lg">
            <span>Total:</span>
            <span>${total}</span>
          </div>

          <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-md">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
