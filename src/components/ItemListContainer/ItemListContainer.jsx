import React, { useState, useEffect } from 'react';
import {productos} from '../../mock/productos';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({bienvenida}) => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		const getItems = () => new Promise((resolve, reject) => {
			setTimeout(() => resolve(productos), 2000)
		});

		getItems()
		.then(productos => setItems(productos))
		.catch(error => console.error(error))
	}, [])

	return (
		<main className="container-fluid mainContainer">
			<hr/>
			<h2 className="titulo">{bienvenida}</h2>
			<hr/>
			<ItemList items={items}/>
		</main>
	)
}

export default ItemListContainer