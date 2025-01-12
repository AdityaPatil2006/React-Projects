import React from 'react'
import Card from './Card'
import resumeGenImg from '../assets/resumeGenImg.png'
import todoImg from '../assets/todoImg.png'
import weatherImg from '../assets/weatherImg.png'
import virtualRImg from '../assets/virtualRImg.png'
import ticTacToeImg from '../assets/ticTacToeImg.png'
import codersCoffeeImg from '../assets/codersCoffeeImg.png'
import docsMiniImg from '../assets/docsMiniImg.png'
import reactProjects from '../assets/reactProjects.png'

const ProjectSection = () => {
  const projects = [
    {
      title: 'Resume Generator',
      description: 'A tool to create and download professional resumes easily.',
      image: resumeGenImg,
      projectLink: 'https://resume-gen-eight.vercel.app/',
      codeLink: 'https://github.com/AdityaPatil2006/ResumeGen',
    },
    {
      title: 'Todo App',
      description: 'A simple and interactive app to manage daily tasks efficiently.',
      image: todoImg,
      projectLink: 'https://to-do-react-web.netlify.app/',
      codeLink: 'https://github.com/AdityaPatil2006/Todo-app',
    },
    {
      title: 'Weather App',
      description: 'A weather forecasting app built with React and OpenWeather API.',
      image: weatherImg,
      projectLink: 'https://weather-react-webs.netlify.app/',
      codeLink: 'https://github.com/AdityaPatil2006/Weather-App',
    },
    {
      title: 'Virtual R',
      description: 'A React-based website showcasing immersive virtual experience built with cutting-edge technology, offering interactive and engaging features.',
      image: virtualRImg,
      projectLink: 'https://virtual-r-mocha.vercel.app/',
      codeLink: 'https://github.com/AdityaPatil2006/VirtualR',
    },
    {
      title: 'Tic-Tac-Toe',
      description: 'A classic Tic-Tac-Toe game with a sleek interface and smooth animations.',
      image: ticTacToeImg,
      projectLink: 'https://tic-tac-toe-react-web.netlify.app/',
      codeLink: 'https://github.com/AdityaPatil2006/Tic-Tac-Toe-React',
    },
    {
      title: 'React Projects',
      description:
        'A React-based website showcasing my React Projects. This site includes a variety of interactive and dynamic web applications, each demonstrating different React features and concepts such as state management, hooks, and routing.',
      image: reactProjects,
      projectLink: 'https://react-projects-pi-ivory.vercel.app/',
      codeLink: 'https://github.com/AdityaPatil2006/React-Projects',
    },
    {
      title: "Coder's Coffee",
      description: 'A React-based website showcasing coffee options tailored for developers, with a modern and sleek design.',
      image: codersCoffeeImg,
      projectLink: 'https://coderscoffee-react.netlify.app/',
      codeLink: 'https://github.com/AdityaPatil2006/Coders-Coffee',
    },
    {
      title: 'Mini Docs',
      description: 'A React-based project that is created only to use and practice the concepts of React.',
      image: docsMiniImg,
      projectLink: 'https://mini-docs.netlify.app/',
      codeLink: 'https://github.com/AdityaPatil2006/Docs-mini-Project',
    },
  ]

  return (
    <div className="w-full py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-redRose text-3xl font-bold text-white mb-8 text-center">My Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} title={project.title} description={project.description} image={project.image} projectLink={project.projectLink} codeLink={project.codeLink} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectSection
