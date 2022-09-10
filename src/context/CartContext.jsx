import React, { createContext, useState } from 'react';


export const CartContext = createContext()

const CartProvider = ({children}) => {

  const [cart, setCart] = useState([]);

  const addToCart = (items, cantidad) => {
    setCart(items, cantidad)
  }

  return (
    <CartContext.Provider value={cart}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider