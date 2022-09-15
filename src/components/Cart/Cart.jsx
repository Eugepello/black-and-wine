import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Form from '../Form/Form';

const Cart = () => {

  const { cart, emptyCart, removeItem, totalPrice } = useContext(CartContext);

  const total = totalPrice();

  console.log(cart);

  return (
    <div className='cartContainer container'>
      <h2>Carrito de compras</h2>
      {cart.map((prod) => (
        <div key={prod.id}>
          <h2>{prod.title}</h2>
          <h4>{prod.cantidad}</h4>
          <img src={prod.img} alt={prod.title} />
          <button onClick={() => removeItem(prod.id)} className='btn btn-danger'>Eliminar producto</button>
        </div>
        ))}
      <button onClick={emptyCart} className='btn btn-danger'>Vaciar carrito</button>
      <h3>Total: ${total}</h3>
      <button className='btn btn-success'>Finalizar compra</button>

      <Form/>
    </div>
  )
}

export default Cart