
import React, { useEffect, useState } from 'react'

function Skills() {
  const userId = localStorage.getItem('userId')
const [skills, setSkills] = useState([])
const [newSkill, setNewSkills] = useState('')
function handleDelete(id){
  fetch(`https://port-folio-xtgn.onrender.com/skills/${id}`,{
    method: 'DELETE',
    headers:{
      'Content-Type': 'application/json'
    }
  })
  .then((res)=> {
    if(res.ok){
      setSkills(skills => skills.filter(skill=>skill.id !== id))
    }
  })
}
  
useEffect(() => {
  fetch(`https://port-folio-xtgn.onrender.com/skills/${userId}`)
    .then((res) => res.json())
    .then((data) => setSkills(data.data))
    .catch((error) => error);
}, []);

function handleAddNewSkill(e){
  e.preventDefault()
  if(skills.length > 8){
    alert('Skills Limit reached')
  }
  const formData = new FormData(e.target);
fetch(`https://port-folio-xtgn.onrender.com/skills/${userId}`,{
  method:'POST',
  body:formData
}).then((res)=>res.json())
.then((info)=>{
  setSkills(skills=>[...skills, info.data])

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

          <form action={`https://port-folio-xtgn.onrender.com/skills/${userId}`} onSubmit={handleAddNewSkill}>
    <input type="text" name='name' placeholder="Add a skill" value={newSkill} onChange={(e)=>setNewSkills(e.target.value)} required/>
    <button type="submit">Add</button>
    </form>
    </div>
  </div>
  </div>
    </>
    
  )
}

export default Skills