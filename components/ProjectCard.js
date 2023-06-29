import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div id="project-card" className="shadow-lg rounded-lg bg-gray-800 p-6 my-4">
      <img src={project.image} alt={project.title} className="w-full h-64 object-cover object-center rounded-lg" />
      <div className="mt-4">
        <h2 className="text-lg font-semibold text-white">{project.title}</h2>
        <p className="mt-2 text-gray-300">{project.description}</p>
      </div>
      <div className="mt-4">
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-600 underline">View Project</a>
      </div>
    </div>
  );
};

export default ProjectCard;