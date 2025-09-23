import { useState,useContext } from "react";
import { CartContext } from "./CartContext";
const Cart = ({isOpen,onClose}) => {
    const { cart,setCart } = useContext(CartContext);
   
  // State to track quantities for each item


  // Increase quantity
  const increase = (index) => {
    const newCart = [...cart];
    newCart[index].quantity += 1;
    setCart(newCart);
  };
  // Decrease quantity
  const decrease = (index) => {
    const newCart = [...cart];
    if (newCart[index].quantity > 1) {
      newCart[index].quantity -= 1;
    } else {
      // remove item if quantity reaches 0
      newCart.splice(index, 1);
    }
    setCart(newCart);
  };

  // Calculate total dynamically
   const total = cart.reduce(
    (sum, item) => sum + Number(item.price) * item.quantity,
    0
  );

  return (
    <div
      className={`fixed overflow-y-auto top-0 right-0 w-1/3 max-w-5xl border-l-green-300
         border-l-2 md:max-w-full h-full z-50 flex  justify-center items-start  bg-opacity-50 transition-opacity duration-500
        ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
    >
      <div
        className={`bg-gray-50 mt-16 py-12 w-full h-full px-6 rounded-lg transform transition-transform duration-500
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      > <button
          className="absolute top-4 right-6 text-2xl font-bold"
          onClick={onClose}
        >
          ×
        </button>
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
                {/* Quantity Controls */}
                <div className="flex items-center gap-2 ml-4">
                  <button
                    onClick={() => decrease(index)}
                    className="bg-gray-300 px-3 rounded"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => increase(index)}
                    className="bg-black text-white px-3 rounded"
                  >
                    +
                  </button>
                </div>
              </div>
              <p className="font-bold">
                ${Number(item.price) * item.quantity}
              </p>
            </div>
          ))}

          {/* Cart Total */}
          <div className="mt-6 flex justify-between font-bold text-lg">
            <span>Total:</span>
            <span>${total}</span>
          </div>

          <button className="mt-4 mb-16 w-full bg-green-600 text-white py-2 rounded-md">
            Checkout
          </button>
        </div>
      )}
    </div>
    </div>
  );
};

export default Cart;
