import React, { Component,useState} from "react";
import Layer2 from '../../assests/Layer2.png'
import './login.css' 
import { Link } from "react-router-dom";
import Fullpage from '../pages/FullPage'

function Login () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [main,setmain] = useState(false);
  const[isPasswordShown,setShow]=useState()

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const data = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch('http://192.168.43.180:5000/api/login/', {
      method: 'POST',headers: {'Content-Type': 'application/json'},body: JSON.stringify(data)});
      console.log(email+password)

      const responseData = await response.json();
      console.log(responseData)
      
      // Handle the API response
      if (response.ok) {
        setmain(true);
        console.log('Login successful');
        alert('Login Successful');
      } else {
        console.log('Invalid email or password');
        alert('Invalid email or password');
      }
    } catch (error) {
      setMessage('An error occurred');
      console.error(error);
    }
  };

  // state = {
  //   isPasswordShown: false
  // };
  
  //   togglePasswordVisiblity = () => {
  //     const { isPasswordShown } = this.state;
  //     this.setState({ isPasswordShown: !isPasswordShown });
  //   };
  //   render = () => {
  //     const { isPasswordShown } = this.state;

  return (
    <>
    {main && <Fullpage/>}
    
    {!main && <div><img src ={Layer2} alt='img' className='Layer2' />
    <h1 className='h1'>Log In</h1>
    <div>
    <form className="form-signin">
        <label htmlFor="inputEmail" className="sr-only"></label>
        <input onChange={(e)=>setEmail(e.target.value)}  type="text" id="inputEmail" name="username" className="form-control" placeholder="Email" required
        autoFocus/>
        <label htmlFor="inputPassword" className="sr-only"></label>
        <input onChange={(e)=>setPassword(e.target.value)} id="inputPassword" name="password" className="form-control" placeholder="Password" type={isPasswordShown ? "text" : "password"} required/>
        <div className='show' ><p onClick={()=>setShow(!isPasswordShown)}>Show</p></div>
        <Link to='/Forgotpassword'><h3 className="forgot-password"> Forgot password?</h3></Link>
        <button className="button" type="submit" onClick={(e)=>{handleSubmit(e)}}>Log in</button>
    </form>
    </div>
    </div>
}
</>
);
};


export default Login

  