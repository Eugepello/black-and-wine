import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
  
	return (
    <div>
      <span className="material-symbols-outlined cartLogo">shopping_cart</span>
    </div>
  )
}

export default CartWidget