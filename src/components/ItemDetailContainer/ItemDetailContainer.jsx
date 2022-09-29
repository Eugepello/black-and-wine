import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import ClockLoader from 'react-spinners/ClockLoader';
import { db } from '../../services/firebaseConfig';
import { getDoc, doc, collection } from 'firebase/firestore';

const ItemDetailContainer = () => {
  const [items, setItems] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { idItem } = useParams();

  useEffect(() => {
    const itemCollection = collection(db, 'productos');
    const refer = doc(itemCollection, idItem);
    getDoc(refer).then((data) => {
      setItems({
        id: data.id,
        ...data.data(),
      });
      setIsLoading(false);
    });
  }, [idItem]);

  return (
    <div className='cardsContainer container'>
      {isLoading ? (
        <ClockLoader className='loader' color={'#fff'} size={200} />
      ) : (
        <ItemDetail items={items} />
      )}
    </div>
  );
};

export default ItemDetailContainer;
