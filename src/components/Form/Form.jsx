import React, { useState } from 'react'

const Form = () => {

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [mobile, setMobile] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleChangeName = (e) => {
    setName(e.target.value);
  }

  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
  }

  const handleChangeAge = (e) => {
    setAge(e.target.value);
  }

  const handleChangeMobile = (e) => {
    setMobile(e.target.value);
  }

  return (
    <div className='formulario'>
      <form action='' onSubmit={handleSubmit}>
        <input type='text' placeholder='Nombre...' name='name' value={name} onChange={handleChangeName} className='form-control'/>
        <input type='text' placeholder='Apellido...' name='lastName' value={lastName} onChange={handleChangeLastName} className='form-control'/>
        <input type='number' placeholder='Edad...' name='age' value={age} onChange={handleChangeAge} className='form-control'/>
        <input type='tel' placeholder='Teléfono...' name='mobile' value={mobile} onChange={handleChangeMobile} className='form-control'/>
        <button className='btn btn-secondary' >Enviar</button>
      </form>
    </div>
  )
}

export default Form