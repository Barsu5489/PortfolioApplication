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
            <form action="http://localhost:9292/users" method="post" >
        <input type="email" name="email"  placeholder='email'required/>
        <input type="name" name="first_name" placeholder='First name'/>
        <input type="name" name="last_name" placeholder="Last name"/>
        <input type="password" name='password' placeholder='password'/>
        <button type="submit">signup</button>
        </form>

        </div>

    </div>
    </>
  )
}

export default Auth

