import React from 'react';
import './sidebar.css';
import appointement from '../../assests/appointement.png';


const Sidebar = () => {
  return (
    <div>
      <div className="details-box">
      <div className="rectangle"> 
      <a href="/"> 
      <img src={appointement} alt="app" className='appointement'></img> <h2 >Appointements</h2></a> </div>
    </div>
  </div>
  )
}

export default Sidebar
