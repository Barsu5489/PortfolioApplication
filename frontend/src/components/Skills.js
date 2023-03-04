
import React, { useEffect, useState } from 'react'

function Skills() {
  const userId = localStorage.getItem('userId')
const [skills, setSkills] = useState([])

function handleDelete(id){
  fetch(`http://localhost:9292/skills/${id}`,{
    method: 'DELETE',
    headers:{
      'Content-Type': 'application/json'
    }
  })
  .then((res)=> {
    if(res.ok){
      setSkills(skills => skills.filter(skill=>skill.id !== id))
      console.log(skills)
    }
  })
}
  
useEffect(() => {
  fetch(`http://localhost:9292/skills/${userId}`)
    .then((res) => res.json())
    .then((data) => setSkills(data))
    .catch((error) => {
      console.error(error);
    });
}, []);

function handleAddNewSkill(e){
  e.preventDefault()
  const formData = new FormData(e.target);
fetch(`http://localhost:9292/skills/${userId}`,{
  method:'POST',
  body:formData
}).then((res)=>res.json())
.then((info)=>{
  console.log(info)
  setSkills(skills=>[...skills, info])

})
}
 if (skills === []){
  return
 }
const skill = skills.map((skill)=>{
  return (
    
    <div className="skills" key={skill.id}>
    <ul className="skills__list">
      <li className="skills__item">{skill.name} <span>
        <button onClick={()=>handleDelete(skill.id)}
        className='project__button project__button--delete'
        >Delete</button></span></li> 
    </ul>
  </div>

  )
})
  return (
    <>
    <div className='skillContainer'>
      <div className='skills__contain'>
    {skill}
    </div>

      <div className="add-skill">
        <div style={{marginRight:'50%'}}>

          <form action={`http://localhost:9292/skills/${userId}`} onSubmit={handleAddNewSkill}>
    <input type="text" name='name' placeholder="Add a skill" required/>
    <button type="submit">Add</button>
    </form>
    </div>
  </div>
  </div>
    </>
    
  )
}

export default Skills