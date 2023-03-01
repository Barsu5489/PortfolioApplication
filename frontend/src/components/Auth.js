import React from 'react'

function Auth() {
  return (
    <>
    <div className='authenticate'>
        <div className="login-form">
            <form action="http://localhost:9292/login" method='post'>
        <input type="email" name="email" id="" placeholder='email'/>
        <input type="name" name="username" id="" placeholder='username'/>
        <input type="password" name='password' placeholder='password'/>
        <button type="submit">Login</button>
        </form>
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

