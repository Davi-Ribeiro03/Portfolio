import Pokedex from "../img/pokedex.jpeg"
import Eletronic from "../img/Eletronic_Image.png"
import "../styles/components/projectscontainer.sass"
import Projects from "../img/ProjectsImg.jpg"


const ProjectsContainer = () => {
    
    const projects = [
        {project:Pokedex,link:'https://pokedex-react-git-develop-felipebarreto-osfdigital.vercel.app/'},
        {project:Eletronic,link:"https://eletronic.vercel.app/Home"},
        {project:Projects,link:"#"}
    ];
  return (
    <section className="projects-container">
        <h2>Projetos</h2>

    <div>
        {Array.from({length:projects.length}).map((_,index) => 
        <a key={index} href={projects[index].link}>
            <img src={projects[index].project} className='projects-img' alt='Projects' />
        </a>)}
    </div>
        <a href="#" className='btn'>
            Ver Projetos
        </a>

    </section>
  )
}

export default ProjectsContainer