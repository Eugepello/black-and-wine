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
    const updateCart = cart.map((prod) => prod.id === item.id ? {...prod, qty: prod.qty + qty} : prod)
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

  const totalWidget = () => {
    let quantity = 0
    cart.forEach((product) => quantity += product.qty)
    return quantity
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
        totalWidget,
        qtyItem}}>

      {children}

    </CartContext.Provider>
  )
}

export default CartProvider