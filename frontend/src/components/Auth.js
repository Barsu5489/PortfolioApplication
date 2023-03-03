import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Auth() {

  const redirect = useNavigate()
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [error, setError] = useState('')

  function handleLogin(e){
    e.preventDefault(); 

    fetch('http://localhost:9292/login',{
      method: 'POST',
      headers:{
        'Contetnt-Type':'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    }).then((res)=>{
      if(res.ok){
        return res.json()
      }else{
        throw new Error('Invalid email or Password')
      }
    }).then((info)=>{
      console.log(info)
      redirect('/')
    }).catch(error=>{
      console.log(error.message)
      setError(error.message)
    })
  }
  return (
    <>
    <div className='authenticate'>
        <div className="login-form">
            <form action="http://localhost:9292/login" method='post' onSubmit={handleLogin}>
        <input type="email" name="email" id="" placeholder='email' value={email} onChange={e=>setEmail(e.target.value)}/>
        <input type="name" name="username" id="" placeholder='username' value={password} onChange={e=>setPassword(e.target.value)}/>
        <input type="password" name='password' placeholder='password'/>
        <button type="submit" >Login</button>
        <p style={{color:'red'}}>{error}</p>
        </form>
        </div>


    </div>
    </>
  )
}

export default Auth

