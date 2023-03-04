import React, { useEffect, useState } from 'react'


function Projects() {
  const userId = localStorage.getItem('userId');
  console.log(userId)
  const [projects, setProject] = useState([])

function handleDelete(id){
  fetch(`http://localhost:9292/projects/${id}`,{
    method: 'DELETE',
    headers:{
      'Content-Type': 'application/json'
    }
  }).then((res)=>{
    if (res.ok){
      setProject(projects.filter(project=>project.id !== id))
    }
  })
}

  useEffect(()=>{
    fetch(`http://localhost:9292/projects/${userId}`)
    .then(res => res.json()
    .then(data=> {
     return setProject(data)
    }
      ))
  },[])
  console.log(projects)

  const userProject = projects.map((project)=>
  {
    const projectTime = new Date(project.created_at)
    const month = projectTime.toLocaleString('default',{month: 'long'})
    const day = projectTime.getDate()
    const year = projectTime.getFullYear();
    const timeString = `${month} ${day} ${year}` 
    return (

      <div className="project" key={project.id}>
      <div className="project__header">
        <h2 className="project__title">{project.title}</h2> <span><button>Add project</button></span>
        <p className="project__date">{timeString}</p>
      </div>
      <img src= {project.image_url}alt="missing" srcSet="" />
      <p className="project__description">{project.description}</p>
      <div className="project__footer">
        <ul className="project__skills">
          <li className="project__skill"><a href={project.repo_url}>{project.repo_url}</a></li>
          <li className="project__skill">Skill 2</li>
          <li className="project__skill">Skill 3</li>
        </ul>
        <div className="project__buttons">
          <button className="project__button project__button--edit">Edit</button>
          <button onClick={()=>handleDelete(project.id)}
          className="project__button project__button--delete">Delete</button>
        </div>
      </div>
    </div>
    )
  })

  return (
<>
<div className="project-page">
  <h1 className="project-page__title">My Projects</h1>

{userProject}
</div>


</>
  )
}

export default Projects

