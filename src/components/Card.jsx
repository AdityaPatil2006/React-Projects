import React from 'react'

const Card = ({ title, description, image, projectLink, codeLink }) => {
  return (
    <div className="w-full max-w-sm bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-5">
        <h3 className="text-2xl font-bold text-gray-800 font-roboto">{title}</h3>
        <p className="text-gray-600 text-base mt-3 font-roboto">{description}</p>
        <div className="flex justify-between items-center mt-5">
          <a href={projectLink} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition font-roboto">
            View Project
          </a>{' '}
          <a href={codeLink} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gray-500 text-white text-sm rounded-lg hover:bg-gray-600 transition font-roboto">
            View Code
          </a>{' '}
        </div>
      </div>
    </div>
  )
}

export default Card
