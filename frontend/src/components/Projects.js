import React, { useEffect, useState } from 'react'

function Projects() {
  const userId = localStorage.getItem('userId');
  console.log(userId)
  const [projects, setProject] = useState([])
  const [editingId, setEditingId] = useState(null);
  const [editingTitle, setEditingTitle] = useState('');
  const [editingDescription, setEditingDescription] = useState('');

  function handleDelete(id) {
    fetch(`https://new-port.onrender.com/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      if (res.ok) {
        setProject(projects.filter(project => project.id !== id))
      }
    })
  }

  function handleEdit(id) {
    setEditingId(id);
    setEditingTitle(projects.find(project => project.id === id).title);
    setEditingDescription(projects.find(project => project.id === id).description);
  }

  function handleSave(id, title, description) {
    fetch(`https://new-port.onrender.com/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, description })
    }).then((res) => {
      if (res.ok) {
        setEditingId(null);
        setProject(projects.map(project => project.id === id ? { ...project, title, description } : project))
      }
    })
  }

  useEffect(() => {
    fetch(`https://new-port.onrender.com/${userId}`)
      .then(res => res.json()
        .then(data => {
          return setProject(data)
        }
        ))
  }, [])


  const userProject = projects.map((project) => {
    const projectTime = new Date(project.created_at)
    const month = projectTime.toLocaleString('default', { month: 'long' })
    const day = projectTime.getDate()
    const year = projectTime.getFullYear();
    const timeString = `${month} ${day} ${year}`
    return (
      <div className="project" key={project.id}>
        <div className="project__header">
          {editingId === project.id ? (
            <input className="project__title" value={editingTitle} onChange={(e) => setEditingTitle(e.target.value)} />
          ) : (
            <h2 className="project__title">{project.title}</h2>
          )}
          <p className="project__date">{timeString}</p>
        </div>
        <img src={project.image_url} alt="missing" srcSet="" />
        {editingId === project.id ? (
          <textarea className="project__description" value={editingDescription} onChange={(e) => setEditingDescription(e.target.value)}></textarea>
        ) : (
          <p className="project__description">{project.description}</p>
        )}
        <div className="project__footer">
          <ul className="project__skills">
            <li className="project__skill"><a href={project.repo_url}>{project.repo_url}</a></li>
            <li className="project__skill">Skill 2</li>
            <li className="project__skill">Skill 3</li>
          </ul>
          <div className="project__buttons">
            {editingId === project.id ? (
              <button className="project__button project__button--
save" onClick={() => handleSave(project.id, editingTitle, editingDescription)}>Save</button>
            ) : (
              <button onClick={() =>
handleEdit(project.id)} className="project__button project__button--edit">Edit</button>
            )}
            <button onClick={() => handleDelete(project.id)} className="project__button project__button--delete">Delete</button>
          </div>
        </div>
      </div>
    )
  })

  return (
    <>
      <div className="project-page">
        <h1 className="project-page__title">My Projects  <span><button>Add project</button></span></h1>

  

{userProject}
</div>


</>
  )
}

export default Projects

