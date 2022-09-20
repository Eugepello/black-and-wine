import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {

  const { cart, totalWidget } = useContext(CartContext)

  if (cart.length === 0) return <span className="material-symbols-outlined cartLogo">shopping_cart</span>

	return (
    <>
      <span className="material-symbols-outlined cartLogo">shopping_cart</span>
      <span>{totalWidget()}</span>
    </>
  )
}

export default CartWidget