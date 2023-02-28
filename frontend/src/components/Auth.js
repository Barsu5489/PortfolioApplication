import React from 'react'

function Auth() {
  return (
    <>
    <div className='authenticate'>
        <div className="login-form">
        <input type="email" name="" id="" placeholder='email'/>
        <input type="name" name="" id="" placeholder='username'/>
        <input type="password" placeholder='password'/>
        <button type="submit">Login</button>
        </div>
        <div className="signup-form">
        <input type="email" name="" id="" placeholder='email'/>
        <input type="name" name="" id="" placeholder='username'/>
        <input type="password" placeholder='password'/>
        <input type="password" placeholder='confirm password'/>
        <button type="submit">signup</button>

        </div>

    </div>
    </>
  )
}

export default Auth

