import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import ProjectSection from './components/ProjectSection'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="w-full h-full bg-gradient-to-r from-[#21D7DE] to-[#0045F3] overflow-x-hidden overflow-y-hidden">
      <Navbar />
      <Home />
      <ProjectSection />
      <Footer />
    </div>
  )
}

export default App
