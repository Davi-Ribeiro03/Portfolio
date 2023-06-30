import React from 'react'
import Avatar from "../img/foto.jpg"
import "../styles/components/projectscontainer.sass"
import Projects from "../img/ProjectsImg.jpg"

const ProjectsContainer = () => {
    const qtdProjects = 3;
  return (
    <section className="projects-container">
        <h2>Projetos</h2>

    <div>
        {Array.from({length:qtdProjects}).map((_,index) => 
        <a key={index} href='#'>
            <img src={Projects} className='projects-img' alt='Projects' />
        </a>)}
    </div>
        <a href="#" className='btn'>
            Ver Projetos
        </a>

    </section>
  )
}

export default ProjectsContainer