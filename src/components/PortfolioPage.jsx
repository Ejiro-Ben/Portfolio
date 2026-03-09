import { projects } from '../data/projects';
import '../styles/Portfolio.css';

export const PortfolioPage = ({ onBack }) => {
  return (
    <div className="portfolio-page">
      <nav className="portfolio-back-nav">
        <button className="back-button" onClick={onBack}>← Back</button>
      </nav>
      <section className="portfolio-full">
        <div className="container">
          <h2 className="section-title">All Projects</h2>
          <p className="section-subtitle">Complete portfolio of my creative work</p>

          <div className="projects-grid">
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
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
