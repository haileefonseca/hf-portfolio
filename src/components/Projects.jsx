import {PROJECTS} from "../constants"

const Projects = () => {
  return (
    <section id="projects" classname="pb-20">
        <h1 className="my-20 ml-10 text-center text-4xl text-gray-700">Projects</h1>
        <div>{PROJECTS.map((project, index) => (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center"> 
                <div className="w-full lg:w-1/4">
                    <img src={project.image} width={175} height={175} alt={project.title} className="mb-6 rounded"></img>
                </div>
                <div className="w-full max-w-xl lg:w-3/4">
                    <h6 className="text-gray-700 text-2xl mb-4 font-semibold">{project.title}</h6>
                    <p className="text-gray-700 text-xl mb-2">{project.description}</p>
                    {project.technologies.map((tech, index) =>
                    <span key={index} className="mr-2 rounded bg-emerald-800 text-emerald-100 px-2 py-1 text-sm font-medium">{tech}</span>)}
                </div>
            </div>
        ))}</div>
    </section>
  )
}

export default Projects