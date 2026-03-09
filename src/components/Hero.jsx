import '../styles/Hero.css';

export const Hero = ({ onViewPortfolio }) => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Creative Design Solutions</h1>
        <p className="hero-subtitle">Visual storytelling through design</p>
        <button className="cta-button" onClick={onViewPortfolio}>View My Projects</button>
      </div>
      <div className="hero-background">
        <div className="gradient-shape shape-1"></div>
        <div className="gradient-shape shape-2"></div>
      </div>
    </section>
  );
};
