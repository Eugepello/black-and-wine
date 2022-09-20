import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import Button from '../Button/Button';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({items}) => {

	const [cantidad, setCantidad] = useState(0);
	const { addToCart, qtyItem } = useContext(CartContext)

	const qty = qtyItem(items.id)

	const onAdd = (quantity) => {
		setCantidad(quantity)
		addToCart(items, quantity)
	}

  return (
		<div className='card card-detail'>
			<h4 className='nameProduct'>{items.title}</h4>
			<img className='img-fluid' src={items.img} alt={items.title}/>
			<p className='categoryProduct'>{items.category}</p>
			<h3 className='priceProduct'>$ {items.price}</h3>
			<p className='descriptionProduct'>{items.description}</p>
			{
				cantidad === 0
				? <ItemCount stock={items.stock} initial={qty} onAdd={onAdd}/>
				: <Link to='/cart'><Button value="Ir al carrito"/></Link>
			}
		</div>
	)
}

export default ItemDetail