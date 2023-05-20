import React from 'react'
import firebase from '../firebase';
import { useState } from 'react';
import { auth } from '../firebase';
import youtube from '../images/Shape.svg'
import '../index.css'
const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');
    const handleLogin = async (e) => {
      e.preventDefault();
      if (!email && !password) {
          setError('enter information')
      } else {
          try {
              await firebase.auth().signInWithEmailAndPassword(email, password);
          } catch (error) {
              if (error.code === 'auth/user-not-found') {
                  setError('user not found')
              } else if (error.code === 'auth/wrong-password') {
                  setError('password error')
              } else {
                  setError(error.message)
              }
          }
      }
  }
  return (
    <div>
       <div className="container1">
         
         <div className="register">
         <h3 className='err'>{error}</h3>
           <img src={youtube} alt="" />
           <h2>Login</h2>
           <div className="reginster_inputs">
           <form onSubmit={handleLogin}>
           <label>
               <input placeholder='Email' value={email} className='email' type="email" onChange={(e) => setEmail(e.target.value)}/>
             </label>
             <label>
               <input placeholder='Password' value={password} className='passwd' type="password" onChange={(e) => setPassword(e.target.value)}/>
             </label>
             <button type='submit'>Next</button>
           </form>
           </div>
         </div>
         </div>
    </div>
  )
}

export default Login
