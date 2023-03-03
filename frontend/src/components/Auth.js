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
    
        <div className="login-form">
            <form action="http://localhost:9292/login" method='post' onSubmit={handleLogin}>
            <h1>Log in to portfolio App</h1>
            <div className="form-group">
            <label>Email</label>
        <input type="email" name="email" className="form-control"  id="" placeholder='email' value={email} onChange={e=>setEmail(e.target.value)}/>
        </div>
        <div className="form-group">
        <label>Password</label>
        <input type="password" className="form-control"  name="password" id="" placeholder='password' value={password} onChange={e=>setPassword(e.target.value)}/>
        </div>
        <button type="submit" className="btn btn-primary">Log In</button>
        <div class="forgot-password">
        <span><p>Don't have an account?</p></span> <a> <span onClick={()=>redirect('/signup')}>Create!</span></a>
    </div>
        <p style={{color:'red'}}>{error}</p>
        
        </form>
        </div>



    </>
  )
}

export default Auth

