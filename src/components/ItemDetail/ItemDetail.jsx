import React from 'react';
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({items}) => {

  return (
		<div className="card card-detail">
			<h4 className="nameProduct">{items.title}</h4>
			<img src={items.img} alt={items.title} className="img-fluid"/>
			<p className="categoryProduct">{items.category}</p>
			<h3 className="priceProduct">$ {items.price}</h3>
			<p className="descriptionProduct">{items.description}</p>
			<ItemCount stock={items.stock}/>
		</div>
	)
}

export default ItemDetail