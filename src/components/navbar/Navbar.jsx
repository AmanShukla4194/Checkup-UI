import React from 'react';
import './navbar.css';
import Vector1 from '../../assests/Vector1.png';
import Checkup from '../../assests/Checkup.png';
import bell from '../../assests/bell.png';
import Ellipse1 from '../../assests/Ellipse1.png';
import Ellipse2 from '../../assests/Ellipse2.png';
import Doctor from '../../assests/Doctor.png';



const Navbar = () => {
  return (
    <div>
<nav className="navbar">
  <a  href="/">
    <img src={Vector1}  alt="logo" className="vector"/>
    <img src={Checkup} alt="Checkup" className="Checkup"/>
    <img src={bell}  alt="Bell" className="Bell"/>
    <img src={Ellipse1} alt="RedDot" className="Ellipse1"/>
    <img src={Ellipse2} alt="Profile" className="Ellipse2"/>
    <img src={Doctor} alt="doctor" className="Doctor"/>
  </a>
</nav>
</div>
  )
}

export default Navbar

