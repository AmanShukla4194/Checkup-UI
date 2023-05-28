import React from "react";
import './first.css'
import Vector1 from '../../assests/Vector1.png'
import CheckupText from '../../assests/CheckupText.png'


const First = () => {
  return (
    <div>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
      <header>
        <h1 className="header" style={{ textAlign: 'center' }}>Let's Get Started!</h1>
      </header>
      </div>
      <div className='image1' style={{ justifyContent: 'center', flexGrow: 1 }}>
        <img src={Vector1} alt="vec" width="90" height="100"/>
        </div>
      <div className='image2' style={{ justifyContent: 'center', flexGrow: 1 }}>
      <img src={CheckupText} alt="vec" width="200" height="100"/>
        </div>

        
      <footer className="footer" >
        <div>
        <button class = "btn btn-light" type="button" > <a href="/Navbar"><h1>Login</h1></a></button>
        </div>
      </footer>
    </div>
  )
}

export default First
