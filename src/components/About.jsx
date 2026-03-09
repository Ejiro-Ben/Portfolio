import '../styles/About.css';
import profilePic from '../assets/profilepic.jpeg';

export const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hello! I'm a passionate graphic designer with over 5 years of experience creating
              compelling visual solutions for brands and businesses. My expertise spans from logo design
              and branding to web design and digital marketing materials.
            </p>
            <p>
              I believe that great design is not just about aesthetics—it's about solving problems
              and telling stories through visual communication. I'm committed to delivering designs
              that not only look beautiful but also drive results.
            </p>
            <div className="skills">
              <h3>Skills & Tools</h3>
              <div className="skills-list">
                <span className="skill">Adobe Creative Suite</span>
                <span className="skill">Photoshop</span>
                <span className="skill">CorelDraw</span>
                <span className="skill">Canva</span>
                <span className="skill">UI/UX Design</span>
                <span className="skill">Branding</span>
                <span className="skill">Web Design</span>
                <span className="skill">Figma</span>
                <span className="skill">Illustration</span>
                <span className="skill">Print Design</span>
                <span className="skill">Motion Graphics</span>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-placeholder">
              <img src={profilePic} alt="Profile" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
