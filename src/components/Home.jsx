import React from 'react'
import homeImg from '../assets/homeImg.png'

const Home = () => {
  return (
    <div className="w-full h-auto flex flex-col md:flex-row text-white justify-center items-center p-4">
      <div className="w-full md:w-1/2 text-center md:text-left md:pl-[50px] text-black">
        <h1 className="font-redRose text-4xl md:text-5xl mb-4">React Projects</h1>
        <p className="font-nunitoSans text-base md:text-lg mb-6">
          Explore a collection of innovative web applications built using React, showcasing the power of modern JavaScript libraries. Each project is designed with creativity and functionality in
          mind, demonstrating my skills in developing interactive user interfaces.
        </p>
        <a href="https://legacy.reactjs.org/docs/getting-started.html" target="_blank" rel="noopener noreferrer">
          <button className="px-6 py-3 bg-[#21D7DE] text-black rounded-lg font-semibold text-base md:text-lg hover:bg-[#0045F3] shadow-lg hover:shadow-lg hover:text-white transition duration-300">
            Get Started
          </button>
        </a>
      </div>

      <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
        <img src={homeImg} className="w-[80%] md:w-[600px] max-w-[90%] object-contain" alt="React Projects" />
      </div>
    </div>
  )
}

export default Home
