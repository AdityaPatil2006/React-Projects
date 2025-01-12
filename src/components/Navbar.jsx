import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div id="nav" className="w-full h-16 flex justify-between items-center py-10 bg-black">
      <div className="font-rochester text-4xl bg-gradient-to-r from-[#21D7DE] to-[#0045F3] bg-clip-text text-transparent px-9 cursor-pointer">React Projects</div>

      <div className="h-full flex items-center gap-6 bg-[#024FF2] p-10 rounded-tl-[45px]">
        {[
          {
            href: 'https://github.com/AdityaPatil2006',
            icon: <FaGithub className="w-6 h-6 text-black" />,
            color: 'bg-white hover:bg-gray-200',
          },
          {
            href: 'https://www.linkedin.com/in/aditya-patil-801273336/',
            icon: <FaLinkedin className="w-6 h-6 text-blue-700" />,
            color: 'bg-white hover:bg-gray-200',
          },
          {
            href: 'https://www.instagram.com/aditya_patil727/?hl=en',
            icon: <FaInstagram className="w-6 h-6 text-pink-600" />,
            color: 'bg-white hover:bg-gray-200',
          },
        ].map((link, index) => (
          <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${link.color}`}>
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  )
}

export default Navbar
