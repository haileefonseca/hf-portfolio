
import { FaGithub } from "react-icons/fa"

const Navbar = () => {
  return <nav className=" mb-20 flex items-center justify-center py-6">
    <div className="flex flex-shrink-0 items-center">
    </div> 
    <div className="m-8 flex items-end justify-end gap-8 text-2xl">
        <a href="https://github.com/haileefonseca" target="_blank" rel="noreferrer noopener"><FaGithub className="text-teal-800"/></a>
        
    </div>
  </nav>
}

export default Navbar
