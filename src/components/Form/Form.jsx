import React, { useState } from 'react';
import { db } from '../../services/firebaseConfig';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

const Form = ({total, cart, emptyCart, idFinal}) => {

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = e => {
    e.preventDefault()
    const order = {
      buyer: {name, lastName, age, email, phone},
      items: cart,
      total,
      date: serverTimestamp()
    }

    const orderCollection = collection(db, 'orders');

    addDoc(orderCollection, order)
    .then((data) => {
      idFinal(data.id);
      emptyCart();
    })
  }

  const handleChangeName = e => setName(e.target.value);

  const handleChangeLastName = e => setLastName(e.target.value);

  const handleChangeAge = e => setAge(e.target.value);

  const handleChangeEmail = e => setEmail(e.target.value);

  const handleChangePhone = e => setPhone(e.target.value);

  return (
    <div className='formulario'>
      <form action='' onSubmit={handleSubmit}>
        <input type='text' placeholder='Nombre...' name='name' value={name} onChange={handleChangeName} className='form-control'/>
        <input type='text' placeholder='Apellido...' name='lastName' value={lastName} onChange={handleChangeLastName} className='form-control'/>
        <input type='number' placeholder='Edad...' name='age' value={age} onChange={handleChangeAge} className='form-control'/>
        <input type='text' placeholder='Email...' name='email' value={email} onChange={handleChangeEmail} className='form-control'/>
        <input type='tel' placeholder='Teléfono...' name='mobile' value={phone} onChange={handleChangePhone} className='form-control'/>
        <button className='btn btn-success'>Finalizar compra</button>
      </form>
    </div>
  )
}

export default Form