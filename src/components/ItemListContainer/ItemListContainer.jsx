import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { productos } from '../../mock/productos';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({bienvenida}) => {

	const [items, setItems] = useState([]);

	const { categoryName } = useParams();
	console.log(categoryName);

	useEffect(() => {
		const getItems = () => new Promise((resolve) => {
			const filteredItems = productos.filter((prod) => prod.category === categoryName);

			setTimeout(() => resolve(categoryName ? filteredItems : productos), 1000)
		});

		getItems()
		.then(data => setItems(data))
		.catch(error => console.error(error))
	}, [categoryName])

	return (
		<main className="container-fluid mainContainer">
			<h2 className="titulo">{bienvenida}</h2>
			<ItemList items={items} />
		</main>
	)
}

export default ItemListContainer