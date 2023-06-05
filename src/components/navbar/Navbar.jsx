import React,{useState} from 'react';

import './navbar.css';
import Vector1 from '../../assests/Vector1.png';
import Checkup from '../../assests/Checkup.png';
import bell from '../../assests/bell.png';
import Ellipse1 from '../../assests/Ellipse1.png';
import Ellipse2 from '../../assests/Ellipse2.png';
import { Link } from 'react-router-dom';




const Navbar = () => {
  let up='https://cdn-icons-png.flaticon.com/512/271/271239.png';

  let down='https://cdn-icons-png.flaticon.com/128/32/32195.png';
  const[state,setstate]=useState(false);
  const[image_url,seturl]=useState(up);
  const openmenu=()=>{
      if(state){
          seturl(up);
      }
      else{
          seturl(down);
      }
      setstate(!state);
  
  }
  return (
    <>
<nav className="navbar">
  <Link  to="/">
    <img src={Vector1}  alt="logo" className="vector"/>
    <img src={Checkup} alt="Checkup" className="Checkup"/>
  </Link>
    <div>
    <img src={bell}  alt="Bell" className="Bell"/>
    <img src={Ellipse1} alt="RedDot" className="Ellipse1"/>
    </div>
    <div>
    <img src={Ellipse2} className='Img' alt="Profile" />
    </div>
    <div className='imgtext'>
    <h3 className='h3'>Aman Shukla</h3>
    </div>

    <div className='dropdown'>
    <img id ="menu-arrow" onClick={openmenu} src={image_url} alt="Menu"/>
    </div>
</nav>
<div className='dropdown'>
    <div className="menu">
      { state && <ul>
      <li><button onClick={openmenu}><Link to="/">Sign out</Link></button></li><hr></hr>
      <li><button onClick={openmenu}><Link to="/">Edit Profile</Link></button></li>
  </ul> }
  </div> 
</div>
</>
)
}
export default Navbar

