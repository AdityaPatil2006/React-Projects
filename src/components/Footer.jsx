import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 md:px-8">
        <div className="text-center md:text-left">
          <p className="text-sm md:text-base">
            © 2025 React Projects. Designed by{' '}
            <a href="https://www.linkedin.com/in/aditya-patil-801273336/" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-500">
              Aditya Patil
            </a>
          </p>
        </div>
        <div className="flex items-center gap-6 mt-4 md:mt-0">
          <a
            href="https://github.com/AdityaPatil2006"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <FaGithub className="w-6 h-6 text-black" />
          </a>
          <a
            href="https://www.linkedin.com/in/aditya-patil-801273336/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <FaLinkedin className="w-6 h-6 text-blue-700" />
          </a>
          <a
            href="https://www.instagram.com/aditya_patil727/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <FaInstagram className="w-6 h-6 text-pink-600" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
