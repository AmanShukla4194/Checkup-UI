import React from 'react';
import {Link} from "react-router-dom"; 
import './sidebar.css';
import appointement from '../../assests/appointement.png';
import GroupPt from '../../assests/GroupPt.png';


const Sidebar = () => {
  return (
    <>
      <div className="details-box">
      <div className="rectangle1"> 
      <Link to='/AppFullPage'> 
      <img src={appointement} alt="app" className='appointement'></img><h3>Appointements</h3></Link> 
      </div>
      <div className="rectangle2"> 
      <Link to="https://www.facebook.com/"> 
      <img src={GroupPt} alt="app" className='patient'></img><h3>Patient Details</h3></Link> 
      </div>
    </div>
  </>
  )
}

export default Sidebar
