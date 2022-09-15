import React, { useState, useEffect } from 'react';
import Button from '../Button/Button';

const ItemCount = ({stock, onAdd, initial = 1}) => {

	const [counter, setCounter] = useState(initial);

	useEffect(() => {
		setCounter(initial)
	}, [initial]);

	const suma = () => {
		counter < stock && setCounter(counter + initial);
	};

	const resta = () => {
		setCounter(counter - initial);
		counter < 2 && setCounter(initial);
	};

	const addToCart = () => {
		onAdd(counter)
	}

  return (
		<div className="itemCounter">
			<p className="cantidad">{counter}</p>
			<div id="suma-resta">
				<button onClick={suma} className="symbolBtn">+</button>
				<button onClick={resta} className="symbolBtn">-</button>
			</div>
			<div onClick={addToCart}>
				<Button value="Agregar al carrito"/>
			</div>
		</div>
  )
};

export default ItemCount;