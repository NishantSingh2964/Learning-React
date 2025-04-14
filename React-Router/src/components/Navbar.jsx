import React from 'react';
//import { Link } from 'react-router-dom'
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate();

  return (
    <div className='navbar'>
      <img src="https://reactrouter.com/splash/hero-3d-logo.webp" alt="" />
      <ul>
        <li><NavLink to='/' className={({isActive}) => isActive ? "active-link" : ""}>Home</NavLink></li>
        <li><NavLink to='/products' className={({isActive}) => isActive ? "active-link" : ""}>Products</NavLink></li>
        <li><NavLink to='/about' className={({isActive}) => isActive ? "active-link" : ""}>About</NavLink></li>
        <li><NavLink to='/contect' className={({isActive}) => isActive ? "active-link" : ""}>Contect</NavLink></li>
        <li><NavLink to='/job' className={({isActive}) => isActive ? "active-link" : ""}>Jobs</NavLink></li>
      </ul>
      <button onClick={ () => navigate('/contect', { replace: true }) }>Get Started</button>
    </div>
  )
};

export default Navbar;
