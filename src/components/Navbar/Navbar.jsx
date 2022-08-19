/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import CartWidget from './CartWidget';
import logo from '/Users/eugep/Desktop/black-and-wine/src/assets/img/logo-wine.png';

const Navbar = () => {
  return (
    <nav className="nav-bar container-fluid">
    <img src={logo} alt="Logo" className="logo"/>
      <ul className="panel">
        <li>
          <a href="#" className="menuItem">Inicio</a>
        </li>
        <li>
          <a href="#" className="menuItem">Productos</a>
        </li>
        <li>
          <a href="#" className="menuItem">Sobre Nosotros</a>
        </li>
        <li>
          <a href="#" className="menuItem">Contacto</a>
        </li>
        <CartWidget/>
      </ul>
    </nav>
  )
};

export default Navbar;
