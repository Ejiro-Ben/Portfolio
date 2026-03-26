import { useState } from 'react';
import { projects } from '../data/projects';

export const Portfolio = ({ onViewAll }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const filteredProjects = (activeCategory === 'All' 
    ? projects.slice(0, 3)
    : projects.filter(p => p.category === activeCategory).slice(0, 3)).reverse();

  return (
    <section id="portfolio" className="py-20 md:py-32 px-4 md:px-8 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gold-400 text-center mb-2">My Projects</h2>
        <p className="text-lg text-gray-300 text-center mb-12">Explore my latest graphic design and web development work</p>

        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          <button 
            onClick={() => setActiveCategory('All')}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              activeCategory === 'All' 
                ? 'bg-gold-500 text-black' 
                : 'border-2 border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-black'
            }`}
          >
            All
          </button>
          <button 
            onClick={() => setActiveCategory('Graphic Design')}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              activeCategory === 'Graphic Design' 
                ? 'bg-gold-500 text-black' 
                : 'border-2 border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-black'
            }`}
          >
            Graphic Design
          </button>
          <button 
            onClick={() => setActiveCategory('Web Development')}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              activeCategory === 'Web Development' 
                ? 'bg-gold-500 text-black' 
                : 'border-2 border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-black'
            }`}
          >
            Web Development
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button 
            className="bg-gold-500 text-black px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-gold-400 hover:scale-105 hover:shadow-xl"
            onClick={onViewAll}
          >
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer">
      <div className="relative w-full pt-[75%]">
        <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
        <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col justify-center items-center text-white px-8 text-center">
          <h3 className="text-2xl font-semibold mb-2 text-gold-300">{project.title}</h3>
          {project.description && <p className="text-sm opacity-90 mb-4">{project.description}</p>}
          <a href={project.url} target="_blank" rel="noopener noreferrer" className="bg-gold-500 text-black px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-110 hover:bg-gold-400 inline-block">
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};
