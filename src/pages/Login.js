import React, { useState } from 'react'
import Add from "../img/addAvatar.png"
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';


const Login = () => {

  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  // rather than using useEffect for each button we can use onSubmit and from that we an reach every elem
  const handleSubmit = async (e) => {
    e.preventDefault(); // to prevent refresh
    // console.log(e.target[0].value)
    const email = e.target[0].value;
    const password = e.target[1].value;
    

    try {
     
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
      
    } catch (error) {
      setErr(true);
    }
  };

  return (
    <div className='formContainer'>
      <div className='formWrapper'>
      <span className='logo'>Natter</span>
      <span className='title'>Login</span>
        <form onSubmit={handleSubmit}>

            <input type='email' placeholder='Email'/>
            <input type='password' placeholder='Password'/>
            
            <button>Sign In</button>
            {err && <span>Something went wrong</span>}
        </form>
        <p>You don't have an account? <Link to="/register">Register</Link></p>
      </div>
    </div>
  )
}

export default Login
