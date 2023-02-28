import React from 'react'

function Projects() {
  return (
//     <>
//     {/* <div className='projectsArea'>
//     <section class="projects">
//   <h1>My Projects</h1>
//   <div class="project-list">
//     <div class="project">
//       <img src="project1.jpg" alt="Project 1"/>
//       <h2>Project 1</h2>
//       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//       <a href="#">Learn more</a>
//     </div>
//     <div class="project">
//       <img src="project2.jpg" alt="Project 2"/>
//       <h2>Project 2</h2>
//       <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
//       <a href="#">Learn more</a>
//     </div>
//     <div class="project">
//       <img src="project3.jpg" alt="Project 3"/>
//       <h2>Project 3</h2>
//       <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
//       <a href="#">Learn more</a>
//     </div>
//   </div>
// </section>
// <section class="skills">
//   <h2>Skills</h2>
//   <div class="skill-list">
//     <div class="skill">
//       <h3>HTML</h3>
//       <div class="skill-bar html"></div>
//     </div>
//     <div class="skill">
//       <h3>CSS</h3>
//       <div class="skill-bar css"></div>
//     </div>
//     <div class="skill">
//       <h3>JavaScript</h3>
//       <div class="skill-bar js"></div>
//     </div>
//   </div>
// </section>
//     </div> */}

//     </>
<>
<div class="project-page">
  <h1 class="project-page__title">My Projects</h1>

  <div class="project">
    <div class="project__header">
      <h2 class="project__title">Project Title</h2>
      <p class="project__date">January 1, 2023</p>
    </div>
    <p class="project__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo metus euismod, vehicula velit vel, pellentesque urna. Donec venenatis, sem eu malesuada dapibus, lectus tellus ultricies arcu, ut convallis dolor massa vel metus.</p>
    <div class="project__footer">
      <ul class="project__skills">
        <li class="project__skill">Skill 1</li>
        <li class="project__skill">Skill 2</li>
        <li class="project__skill">Skill 3</li>
      </ul>
      <div class="project__buttons">
        <button class="project__button project__button--edit">Edit</button>
        <button class="project__button project__button--delete">Delete</button>
      </div>
    </div>
  </div>
</div>


</>
  )
}

export default Projects