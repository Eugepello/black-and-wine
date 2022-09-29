import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <ul className='ulFooter'>
        <li>
          <NavLink to='/' className='footerItem'>Inicio</NavLink>
        </li>
        <li>
          <NavLink to='/category/tintos' className='footerItem'>Tintos</NavLink>
        </li>
        <li>
          <NavLink to='/category/blancos' className='footerItem'>Blancos</NavLink>
        </li>
        <li>
          <NavLink to='/category/rosados' className='footerItem'>Rosados</NavLink>
        </li>
      </ul>
      <p className='lorem'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum assumenda illum ab at nisi dolore numquam consequatur odio quam dolores. Ut et repellat officiis laboriosam cum, nihil placeat nisi odio?</p>
      <p></p>
    </footer>
  )
}

export default Footer