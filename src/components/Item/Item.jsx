import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

const Item = ({title, img, category, id}) => {

  return (
		<div key={id} className="card">
			<Link className="link" to={`/detail/${id}`}>
				<h4 className="nameProduct">{title}</h4>
			</Link>
			<Link className="link" to={`/detail/${id}`}>
				<img src={img} alt="Imagen del producto" className="img-fluid"/>
			</Link>
			<p className="categoryProduct">{category}</p>
			<Link to={`/detail/${id}`}><Button value={"Ver detalle"}/></Link>
		</div>
  )
}

export default Item