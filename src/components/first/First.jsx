import React from "react";
import './first.css'
import Vector1 from '../../assests/Vector1.png'
import CheckupText from '../../assests/CheckupText.png'
import {Link} from "react-router-dom"; 

const First = () => {
  return (
    <>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
      <header>
        <h1 className="header" style={{ textAlign: 'center' }}>Let's Get Started!</h1>
      </header>
      </div>
      <div className='image1' style={{ justifyContent: 'center', flexGrow: 1 }}>
        <img src={Vector1} alt="vec" width="90" height="100"/>
        </div>
      <div className='image2' style={{ justifyContent: 'center', flexGrow: 1 }}>
      <img src={CheckupText} alt="vec" width="250" height="75"/>
        </div>
      
      <button className = "footer" type="button" > <Link to="/FullPage"><h1>Login</h1></Link></button>
    </>
  )
}
export default First
