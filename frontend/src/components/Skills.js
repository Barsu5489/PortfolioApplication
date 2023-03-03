
import React, { useEffect, useState } from 'react'
function Skills() {
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
  fetch('http://localhost:9292/skills')
    .then((res) => res.json())
    .then((data) => setSkills(data))
    .catch((error) => {
      console.error(error);
    });
}, []);

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
    <input type="text" placeholder="Add a skill" />
    <button>Add</button>
    </div>
  </div>
  </div>
    </>
    
  )
}

export default Skills