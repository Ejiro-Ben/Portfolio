import { projects } from '../data/projects';
import '../styles/Portfolio.css';

export const Portfolio = ({ onViewAll }) => {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">Explore my latest projects and creative work</p>

        <div className="projects-grid">
          {featuredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="portfolio-actions">
          <button className="view-all-btn" onClick={onViewAll}>View All Projects</button>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={project.image} alt={project.title} />
        <div className="project-overlay">
          <h3>{project.title}</h3>
          <a href={project.image} target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
        </div>
      </div>
    </div>
  );
};
