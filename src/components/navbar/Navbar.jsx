import React from 'react';
import './navbar.css';
import Vector1 from '../../assests/Vector1.png';
import Checkup from '../../assests/Checkup.png';

const Navbar = () => {
  return (
    <div>
<nav className="navbar navbar-light bg-light">
  <a className="navbar-brand" href="/">
    <img src={Vector1} width="60" height="50" alt="logo"/>
    <img src={Checkup} width="100" height="50" alt="logo"/>
  </a>
</nav>
    </div>
  )
}

export default Navbar
