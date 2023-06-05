import React from 'react'
import { Link } from "react-router-dom";
import Layer3 from '../../assests/Layer3.png'
import './forgotpassword.css'

const Forgotpassword = () => {
  return (
   <>
   <img src ={Layer3} alt='img' className='Layer3' />
    <h1 className='forgot'>Forgot Password?</h1>

    <form className="form-signin2" method="post" action="/login">
        <label htmlFor="inputEmail" className="sr-only"></label>
        <input type="text" id="inputEmail" name="Email" className="form-control2" placeholder="Email" required
        autoFocus/>
        <button className="button2" type="submit">Submit</button>
        <p className='p'>Back to</p>
        <Link to = '/Login'><p className='backto'>Log in</p></Link>
    </form>
   </>
  )
}

export default Forgotpassword
