import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import CartDetail from '../CartDetail/CartDetail';
import Form from '../Form/Form';

const Cart = () => {

  const { cart, emptyCart, totalPrice } = useContext(CartContext);

  const total = totalPrice();

  if (cart.length === 0) {
    return <Link style={{color: '#fff', textAlign: 'center'}} to="/">
        <h1 style={{marginTop: '5rem'}}>El carrito está vacío...</h1>
        <p style={{marginTop: '2rem', fontSize:'22px'}}>¡Volvé a la <strong>tienda</strong> para ver todos nuestros productos!</p>
      </Link>
  }

  return (
    <div className='cartContainer container'>
      <h2>Carrito de compras</h2>
      {
        cart.map((prod) => <CartDetail key={prod.id} id={prod.id} title={prod.title} img={prod.img} qty={prod.qty}
        />)
      }
      <button onClick={emptyCart} className='btn btn-danger vaciar'>Vaciar carrito</button>
      <h3>Total: ${total}</h3>
      <button className='btn btn-success'>Finalizar compra</button>

      <Form/>
    </div>
  )
}

export default Cart