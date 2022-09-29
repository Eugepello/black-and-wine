import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import ClockLoader from 'react-spinners/ClockLoader';
import CartDetail from '../CartDetail/CartDetail';
import Form from '../Form/Form';

const Cart = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [buyerId, setBuyerId] = useState('');
  const { cart, emptyCart, totalPrice } = useContext(CartContext);

  const total = totalPrice();

  const idFinal = id => setBuyerId(id)
  
  useEffect(() => {
    setIsLoading(false)
  }, []);
  
  if (buyerId) return <h2 className='titulo'>Gracias por tu compra, tu código de seguimiento es: {buyerId}</h2>

  if (cart.length === 0) {
    return <Link style={{color: '#fff', textAlign: 'center'}} to="/">
        <h1 style={{marginTop: '5rem', marginBottom: '2rem'}}>El carrito está vacío...</h1>
        <p style={{fontSize:'22px', marginBottom: '15rem'}}>¡Volvé a la <strong>tienda</strong> para ver todos nuestros productos!</p>
      </Link>
  }

  return (
    <div className='cartContainer container'>
      {
        isLoading
        ? <ClockLoader className='loader' color={'#fff'} size={200} />
        : <>
            <h2>Carrito de compras</h2>
            {
              cart.map((prod) => <CartDetail key={prod.id} id={prod.id} title={prod.title} img={prod.img} qty={prod.qty} price={prod.price}
              />)
            }
            <button onClick={emptyCart} className='btn btn-danger vaciar'>Vaciar carrito</button>
            <h3>Total: ${total}</h3>

            <Form idFinal={idFinal} cart={cart} total={total} emptyCart={emptyCart} />
          </>
      }
    </div>
  )
}

export default Cart