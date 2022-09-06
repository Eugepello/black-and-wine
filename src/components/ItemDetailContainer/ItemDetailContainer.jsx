import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { productos } from '../../mock/productos';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
  const [items, setItems] = useState({});

  const { idItem } = useParams();

  const idItemNum = Number(idItem);

  console.log(idItemNum);

  useEffect(() => {
    const getItems = () => new Promise(resolve => {
      setTimeout(() => {
        resolve(productos.find((productos => productos.id === idItemNum)))
      }, 500)
    })

    getItems()
    .then(data => setItems(data))
    .catch((error) => console.error(error))
  }, [idItemNum]);

  return (
    <div className="cardsContainer container">
      <ItemDetail items={items}/>
    </div>
  )
};

export default ItemDetailContainer