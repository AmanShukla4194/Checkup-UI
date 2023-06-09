import React,{useState} from 'react'
import { Link } from "react-router-dom";
import Layer3 from '../../assests/Layer3.png'
import './forgotpassword.css'
import Fullpage from '../pages/FullPage'

const Forgotpassword = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [main,setmain] = useState(false);

  const forgot = async (e) => {
    e.preventDefault();

    const data = {
      email: email,
    };

  try {
    const response = await fetch('http://192.168.43.180:5000/api/login/forgotpassword', {
    method: 'POST',headers: {'Content-Type': 'application/json'},body: JSON.stringify(data)});
    console.log(email)

    const responseData = await response.json();
    console.log(responseData)
    
    // Handle the API response
    if (response.ok) {
      setmain(true);
      console.log('Correct Email');
      alert('Email is correct');
    } else {
      console.log('Invalid Email');
      alert('Invalid Email');

    }
  } 
  catch (error) {
    setMessage('An error occurred');
    console.error(error);
  }
};
  
  return (
   <>
   {main && <Fullpage/>}

   {!main && <div>
   <img src ={Layer3} alt='img' className='Layer3' />
    <h1 className='forgot'>Forgot Password?</h1>

    <form className="form-signin2" method="post" action="/login">
        <label htmlFor="inputEmail" className="sr-only"></label>
        <input onChange={(e)=>setEmail(e.target.value)} type="text" id="inputEmail" name="Email" className="form-control2" placeholder="Email" required
        autoFocus/>
        <button onClick={(e)=>{forgot(e)}} type="submit" className="button2">Submit</button>
        
        <p className='p'>Back to</p>
        <Link to = '/Login'><p className='backto'>Log in</p></Link>
    </form>
    </div>
}
</>
)
}

export default Forgotpassword
