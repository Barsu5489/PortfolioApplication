import React from 'react'

function UserHome() {
  return (
    <>
    <div className='homeContainer'>
    <div className='currentJob'>
        <h1>DevOPS <br /> ENGINEEER</h1>
    </div>
    <div className='userImage'>
        <img style={{height:'25vh'}} src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" srcSet="" />
    </div>
    <div  className='userSummary'>
        
        <p style={{marginTop:'80px'}}>Lorem ipsum dolor sit amet consectetur,<br /> adipisicing elit. Unde distinctio, commodi iusto error quo <br /> accusamus dolore velit rerum recusandae cupiditate <br /> a sint tempora amet alias omnis aliquam expedita quibusdam suscipit.</p>
        <h1>Emmanuel <br /> Kipkemboi</h1>
    </div>
    </div>
    </>
  )
}

export default UserHome