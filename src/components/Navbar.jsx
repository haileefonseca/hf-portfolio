
import { FaGithub } from "react-icons/fa"
  


const Navbar = () => {
  return <nav className=" mb-5 flex py-">
    <div className="m-8 flex items-center justify-between w-full gap-8 text-2xl">
    <div className="flex flex-shrink-0">
        <a href="https://github.com/haileefonseca?tab=repositories" target="_blank" rel="noreferrer noopener"><FaGithub className="text-emerald-800"/></a>
        
    </div>

    <div className="flex flex-shrink-0 space-x-3 ml-auto">
        <a className="pr-10 text-gray-400" href="#about">About</a>
        <a className="pr-10 text-gray-400" href="#projects">Projects</a>
        <a className="text-gray-400 lg:pr-8" href="#contact">Contact</a>
        
    </div>
    </div> 
    
  </nav>
}

export default Navbar
