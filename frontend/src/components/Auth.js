import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Projects from './Projects';
function Auth() {
  console.log('Auth component rendered');
  const redirect = useNavigate()
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [error, setError] = useState('')
const [userId, setUserId] = useState(null)

  function handleLogin(e){
    e.preventDefault(); 

    fetch('https://new-port.onrender.com/login',{
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
      setUserId(info.user.id)
      console.log(info.user.id)
      console.log(info.user.last_name)
      localStorage.setItem('userId', info.user.id)
      localStorage.setItem('userInfo', info.user.first_name, info.user.last_name)
      localStorage.setItem('userLastName', info.user.last_name)

      redirect('/')
    }).catch(error=>{
      console.log(error.message)
      console.log(error.response);
      setError(error.message)
    })
  }
  console.log('userId')
  return (
    <>
        <div className="login-form">
            <form action="" method='post' onSubmit={handleLogin}>
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

