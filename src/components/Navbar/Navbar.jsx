import React from 'react';
import { NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import logo from '../../assets/img/logo-wine.png';

const Navbar = () => {
  return (
    <nav className='nav-bar container-fluid'>
      <NavLink to='/'><img src={logo} alt='Logo' className='logo'/></NavLink>
      <ul className='panel'>
        <li>
          <NavLink to='/' className='menuItem'>Inicio</NavLink>
        </li>
        <li>
          <NavLink to='/category/tintos' className='menuItem'>Tintos</NavLink>
        </li>
        <li>
          <NavLink to='/category/blancos' className='menuItem'>Blancos</NavLink>
        </li>
        <li>
          <NavLink to='/category/rosados' className='menuItem'>Rosados</NavLink>
        </li>
        <li>
          <NavLink to='/cart'><CartWidget/></NavLink>
        </li>
      </ul>
    </nav>
  )
};

export default Navbar;
