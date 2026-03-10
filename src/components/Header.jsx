import '../styles/Header.css';
import { useState } from 'react';


export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          Ejiro Ben
          <p>Professional Designer</p>
        </div>
        {/* Main nav for large screens */}
        <nav className="nav nav-desktop">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </nav>
        {/* Hamburger menu for mobile */}
        <button
          className={`menu-toggle${isMenuOpen ? ' active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        {/* Mobile nav */}
        <nav className={`nav nav-mobile${isMenuOpen ? ' active' : ''}`}>
          <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#portfolio" onClick={() => setIsMenuOpen(false)}>Portfolio</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </nav>
      </div>
    </header>
  );
};
