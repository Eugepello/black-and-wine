import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartDetail = ({id, title, img, qty, price}) => {

  const { removeItem } = useContext(CartContext);

  return (
    <div className='cardCart' key={id}>
      <h3>{title}</h3>
      <img src={img} alt={title} />
      <p style={{fontSize: '22px'}}>${price.toLocaleString()}</p>
      <h4>{qty}</h4>
      <button className='btn btn-secondary remover' onClick={() => removeItem(id)}>Eliminar producto</button>
    </div>
  )
}

export default CartDetail