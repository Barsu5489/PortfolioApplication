import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Projects from './Projects';
function Auth() {

  const redirect = useNavigate()
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [error, setError] = useState('')
const [userId, setUserId] = useState(null)

  function handleLogin(e){
    e.preventDefault(); 

    fetch('http://localhost:9292/login',{
      method: 'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    }).then((res)=>{
      if(res.ok){
        console.log(res.ok)
        console.log(res)
        return res.json()
      }else{
        throw new Error('Invalid email or Password')
      }
    }).then((info)=>{
      console.log(info.user.id)
      setUserId(info.user.id)
      redirect('/')
    }).catch(error=>{
      console.log(error.message)
      console.log(error.response);
      setError(error.message)
    })
  }
  return (
    <>
    <Projects userId ={userId}/>
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
        <div className="forgot-password">
        <span><p>Don't have an account?</p></span> <p> <span onClick={()=>redirect('/signup')}>Create!</span></p>
    </div>
        <p style={{color:'red'}}>{error}</p>
        
        </form>
        </div>



    </>
  )
}

export default Auth

