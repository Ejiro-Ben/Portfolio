import { projects } from '../data/projects';

export const Portfolio = ({ onViewAll }) => {
  const webProjects = projects
    .slice(0, 3)
    .reverse();

  return (
    <section id="portfolio" className="py-20 md:py-32 px-4 md:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-2">My Projects</h2>
        <p className="text-lg text-gray-500 text-center mb-12">Explore my latest web development work</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {webProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button 
            className="bg-gray-900 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-gray-700 hover:scale-105 hover:shadow-xl"
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
    <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 transition-transform duration-300 hover:scale-105 cursor-pointer">
      <div className="relative w-full pt-[75%]">
        <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-90 flex flex-col justify-center items-center text-white px-8 text-center">
          <h3 className="text-2xl font-semibold mb-2 text-white">{project.title}</h3>
          {project.description && <p className="text-sm text-gray-300 mb-4">{project.description}</p>}
          <a href={project.url} target="_blank" rel="noopener noreferrer" className="bg-white text-gray-900 px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-110 hover:bg-gray-200 inline-block">
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};
