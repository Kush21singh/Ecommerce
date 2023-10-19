// CartProvider.js
import React, { useState, } from "react";
import CartContext from "./Cart-Context";

export default function CartProvider(props) {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCartHandler = (item) => {
    // Check if the item is already in the cart
    const existingItemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id);

    if (existingItemIndex !== -1) {
      // If the item exists, update its quantity
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].amount += 1;
      setCartItems(updatedCartItems);
    } else {
      // If the item is not in the cart, add it
      setCartItems((prevCartItems) => [...prevCartItems, { ...item, amount: 1 }]);
    }
  };

  const removeItemFromCartHandler = (id) => {
    // Remove the item from the cart
    setCartItems((prevCartItems) => prevCartItems.filter((item) => item.id !== id));
  };

  const clearCartHandler = () => {
    // Clear the entire cart
    setCartItems([]);
  };

  const cartContextValue = {
    cartItems,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearCart: clearCartHandler,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {props.children}
    </CartContext.Provider>
  );
}
