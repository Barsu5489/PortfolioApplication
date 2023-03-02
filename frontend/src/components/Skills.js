
import React, { useEffect, useState } from 'react'
function Skills() {
const [skills, setSkills] = useState([])

useEffect(()=>{
  fetch('http://localhost:9292/skills')
  .then((res)=> res.json())
  .then((skills)=>{
    return setSkills(skills)
  })
},[])
console.log(skills)
const skill = skills.map((skill)=>{
  return (
    <div className="skills" key={skill.id}>
    <ul className="skills__list">
      <li className="skills__item">{skill.name} <span><button className='project__button project__button--delete'>Delete</button></span></li> 
    </ul>
  </div>

  )
})

  return (
    <>
    {skill}
    <button className="skills__button" >Add Skill</button>
    </>
    
  )
}

export default Skills