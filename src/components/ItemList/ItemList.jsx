import React from 'react';
import Item from '../Item/Item';

const ItemList = ({items}) => {

  return (
    <div className="cardsContainer container">
      {
        items.map(item => <Item key={item.id} id={item.id} title={item.title} stock={item.stock} price={item.price} img={item.img} category={item.category} description={item.description} />)
      }
    </div>
  )
}

export default ItemList