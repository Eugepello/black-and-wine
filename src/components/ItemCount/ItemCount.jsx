import React, { useState} from 'react';
import Button from '../Button/Button';

const ItemCount = ({stock}) => {

	const onAdd = () => {
		console.log("Producto agregado al carrito");
	}

	const [counter, setCounter] = useState(1);

	const suma = () => {
		counter < stock && setCounter(counter + 1);
	};

	const resta = () => {
		setCounter(counter - 1);
		counter < 2 && setCounter(1);
	};

  return (
			<div className="itemCounter">
				<p className="cantidad">{counter}</p>
				<div id="suma-resta">
					<button onClick={suma} className="symbolBtn">+</button>
					<button onClick={resta} className="symbolBtn">-</button>
				</div>
				<div onClick={onAdd}>
					<Button value="Agregar al carrito"/>
				</div>
			</div>
  )
};

export default ItemCount;