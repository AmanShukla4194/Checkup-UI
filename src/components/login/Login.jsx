import React, { Component } from "react";
import Layer2 from '../../assests/Layer2.png'
import './login.css' 
import { Link } from "react-router-dom";

class Login extends Component {
  state = {
    isPasswordShown: false
  };
  
    togglePasswordVisiblity = () => {
      const { isPasswordShown } = this.state;
      this.setState({ isPasswordShown: !isPasswordShown });
    };
    render = () => {
      const { isPasswordShown } = this.state;
  return (
    <>
    <img src ={Layer2} alt='img' className='Layer2' />
    <h1 className='h1'>Log In</h1>
    <div>
    <form className="form-signin" method="post" action="/login">
        <label htmlFor="inputEmail" className="sr-only"></label>
        <input type="text" id="inputEmail" name="username" className="form-control" placeholder="Email" required
        autoFocus/>
        <label htmlFor="inputPassword" className="sr-only"></label>
        <input id="inputPassword" name="password" className="form-control" placeholder="Password" type={isPasswordShown ? "text" : "password"} required/>
        <div className='show'  onClick={this.togglePasswordVisiblity} ><p>Show</p></div>
        <Link to='/Forgotpassword'><h3 className="forgot-password"> Forgot password?</h3> </Link>
        <button className="button" type="submit">Log in</button>
    </form>
    </div>
    </>
  );
};
}

export default Login

  