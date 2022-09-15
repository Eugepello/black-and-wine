import React, { createContext, useState } from 'react';


export const CartContext = createContext()

const CartProvider = ({children}) => {

  const [cart, setCart] = useState([]);

  const addToCart = (item, qty) => {
    if (alreadyInCart(item.id)) {
      addingItem(item, qty)
    } else {
      setCart([...cart, {...item, qty: qty}])
    }
  }

  const alreadyInCart = (id) => {
      return cart.some((prod) => prod.id === id)
    }

  const addingItem = (item, qty) => {
    const updateCart = cart.map((prod) => {
      if (prod.id === item.id) {
        const cartUpdated = {
          ...prod,
          qty: qty,
        };
        return cartUpdated;
      } else {
        return prod;
      }
    });
    setCart(updateCart)
  }

  const removeItem = (id) => {
    const filteredItems = cart.filter((item) => item.id !== id)
    setCart(filteredItems)
  }

  const emptyCart = () => {
    setCart([]);
  }

  const qtyItem = (id) => {
    const producto = cart.find((prod) => prod.id === id)
    return producto?.qty
  }

  const totalPrice = () => {
    let precio = 0
    cart.forEach((item) => precio += item.qty * item.price)
    return precio
  }

  return (
    <CartContext.Provider
      value={{ 
        addToCart,
        cart,
        emptyCart,
        removeItem,
        totalPrice,
        qtyItem}}>

      {children}

    </CartContext.Provider>
  )
}

export default CartProvider