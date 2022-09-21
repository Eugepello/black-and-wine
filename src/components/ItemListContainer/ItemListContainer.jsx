import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import ClockLoader from 'react-spinners/ClockLoader';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../services/firebaseConfig';

const ItemListContainer = ({bienvenida}) => {

	const [items, setItems] = useState([]);
	const [isLoading, setIsLoading] = useState(true)

	const { categories } = useParams();

	useEffect(() => {
		const itemCollection = collection(db, 'productos');
		const filtered = categories
		? query(itemCollection, where('category', '==', categories))
		: itemCollection

		getDocs(filtered)
		.then(data => {
			const products = data.docs.map((p) => {
				return {
					id: p.id,
					...p.data()
				}
			});
			setItems(products)
			setIsLoading(false)
		})
		.catch(error => console.error(error))
	}, [categories])

	return (
		<main className='container-fluid mainContainer'>
			{
				isLoading 
				?	<ClockLoader className='loader' color={'#fff'} size={200} />
				: <>
						<h2 className='titulo'>{bienvenida}</h2>
						<ItemList items={items} />
					</>
			}
		</main>
	)
}

export default ItemListContainer