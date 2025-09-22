// CartContext.js
import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add item (with quantity handling)
 const addToCart = (item) => {
  setCart((prevCart) => {
    const existingItemIndex = prevCart.findIndex((p) => p.id === item.id);

    if (existingItemIndex !== -1) {
      // Item already exists → increase its quantity
      const updatedCart = [...prevCart];
      updatedCart[existingItemIndex].quantity += 1;
      return updatedCart;
    } else {
      // Add new item with quantity = 1
      return [...prevCart, { ...item, quantity: 1 }];
    }
  });
};
  

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
