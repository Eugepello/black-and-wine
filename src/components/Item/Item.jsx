import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

const Item = ({id, title, img, stock, description, price, category}) => {

  return (
    <div key={id} className="card">
			<h4 className="nameProduct">{title}</h4>
			<p className="descriptionProduct">{description}</p>
			<img src={img} alt="Imagen del producto" className="img-fluid"/>
			<p className="categoriaProduct">{category}</p>
			<h3 className="priceProduct">$ {price.toLocaleString()}</h3>
			<ItemCount stock={stock}/>
		</div>
  )
}

export default Item