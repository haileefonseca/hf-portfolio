import React from 'react'
import Navbar from './components/navbar'
import Home from './components/home'
import About from './components/about'
import Projects from './components/projects'
import Contact from './components/contact'



const App = () => {
  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-teal-800 selection:text-white'>
      <div className='fixed top-0 -z-10 h-full w-full'>
      <div class="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#0d421b_100%)]"></div>
      </div>
        
          <div className='container mx-auto px-8'>
            <Navbar/>
            <Home />
            <About />
            <Projects />
            <Contact />
          </div>
    </div>
  )
}

export default App