import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function Signup() {
    const redirect = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [error, setError] = useState('')
    function handleSubmit(e){
        e.preventDefault()
        fetch('http://localhost:9292/signup',{
            method: 'POST',
            header:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                email:email,
                first_name:first_name,
                last_name:last_name,
                password:password
            })
        }).then((res)=>{
            if(res.ok){
                return res.json()
            }else{
                throw new Error('Email already exists')
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
    <div>
        <div className="signup-form">    
        <h1>The Art of Portfoli-Oh Yeah!</h1>
        <form action="http://localhost:9292/signup" method="post"  onSubmit={handleSubmit}>
        <div className="form-group">
            <label>Email</label>
        <input type="email" name="email" className="form-control"  id="" placeholder='email' value={email} onChange={e=>setEmail(e.target.value)}/>
        </div>
        <div className="form-group">
            <label>First Name</label>
            <input type="name" name="first_name" className="form-control"  placeholder='First name' value={first_name} onChange={(e)=>setFirstName(e.target.value)} required/>
        </div>
        <div className="form-group">
            <label>Last Name</label>
            <input type="name" name="last_name" className="form-control"  placeholder="Last name"  value={last_name} onChange={(e)=>setLastName(e.target.value)} required/>
        </div>
        <div className="form-group">
            <label>Password</label>
            <input type="password" name='password' className="form-control"  placeholder='password'value={password} onChange={(e)=>setPassword(e.target.value)}  required />
        </div>
        <button type="submit" className="btn btn-primary">Signup</button>
        <div class="forgot-password">
        <span><p>Already have an account?</p></span> <a> <span onClick={()=>redirect('/auth')}>Login!</span></a>
    </div>
        <p style={{color:'red'}}>{error}</p>
        </form>

        </div>
    </div>
  )
}

export default Signup