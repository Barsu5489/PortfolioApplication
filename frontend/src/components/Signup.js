import React, { useState } from 'react'

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
        <form action="http://localhost:9292/signup" method="post"  onSubmit={handleSubmit}>
        <input type="email" name="email"  placeholder='email'required value={email} onChange={e=>setEmail(e.target.value)}/>
        <input type="name" name="first_name" placeholder='First name' value={first_name} onChange={(e)=>setFirstName(e.target.value)} required/>
        <input type="name" name="last_name" placeholder="Last name"  value={last_name} onChange={(e)=>setLastName(e.target.value)} required/>
        <input type="password" name='password' placeholder='password'value={password} onChange={(e)=>setPassword(e.target.value)}  required />
        <button type="submit">signup</button>
        <p style={{color:'red'}}>{error}</p>
        </form>

        </div>
    </div>
  )
}

export default Signup