import React, { Component } from "react";
import Layer2 from '../../assests/Layer2.png'
import './login.css' 

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
    <img src ={Layer2} alt='img' className='layer' />
    <h1 className='h1'>Log In</h1>
    <div>
    <form className="form-signin" method="post" action="/login">
        <label htmlFor="inputEmail" className="sr-only"><h2>Email</h2></label>
        <input type="text" id="inputEmail" name="username" className="form-control" placeholder="Username" required
        autoFocus/>
        <label htmlFor="inputPassword" className="sr-only"><h2>Password</h2></label>
        <input id="inputPassword" name="password" className="form-control" placeholder="Password" type={isPasswordShown ? "text" : "password"} required/>
        <div className='show'  onClick={this.togglePasswordVisiblity} ><p>Show</p></div>
        <button className="button" type="submit">Log in</button>
    </form>
    </div>
    </>
  );
};
}

export default Login

  
