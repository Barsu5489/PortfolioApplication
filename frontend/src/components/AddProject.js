import React, { useState } from 'react'

function AddProject() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [repo_url, setRepo_url] = useState('')
    
  return (
    <div>AddProject</div>
  )
}

export default AddProject