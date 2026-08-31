import { useState } from 'react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between gap-4 md:gap-8">
        <div className="text-xl md:text-2xl font-bold text-gray-900 tracking-wide flex flex-col items-start">
          Ejiro Ben
          <p className="text-xs md:text-sm font-normal text-gray-500 mt-1">Expert Web Developer</p>
        </div>
        {/* Main nav for large screens */}
        <nav className="hidden md:flex gap-6 lg:gap-10 items-center">
          <a href="#home" className="text-gray-600 font-medium text-base lg:text-lg relative transition-colors hover:text-gray-900 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-gray-900 after:transition-all hover:after:w-full">Home</a>
          <a href="#about" className="text-gray-600 font-medium text-base lg:text-lg relative transition-colors hover:text-gray-900 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-gray-900 after:transition-all hover:after:w-full">About</a>
          <a href="#portfolio" className="text-gray-600 font-medium text-base lg:text-lg relative transition-colors hover:text-gray-900 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-gray-900 after:transition-all hover:after:w-full">Portfolio</a>
          <a href="#contact" className="text-gray-600 font-medium text-base lg:text-lg relative transition-colors hover:text-gray-900 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-gray-900 after:transition-all hover:after:w-full">Contact</a>
        </nav>
        {/* Hamburger menu for mobile */}
        <button
          className={`md:hidden flex flex-col gap-1.5 bg-transparent border-0 cursor-pointer`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className={`w-7 h-0.5 bg-gray-900 rounded transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-7 h-0.5 bg-gray-900 rounded transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-7 h-0.5 bg-gray-900 rounded transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
        {/* Mobile nav */}
        <nav className={`md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg px-6 py-8 flex flex-col gap-4 items-start z-40 transition-all duration-300 border-b border-gray-200 ${isMenuOpen ? 'flex' : 'hidden'}`}>
          <a href="#home" onClick={() => setIsMenuOpen(false)} className="w-full text-gray-800 font-medium text-lg py-2">Home</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)} className="w-full text-gray-800 font-medium text-lg py-2">About</a>
          <a href="#portfolio" onClick={() => setIsMenuOpen(false)} className="w-full text-gray-800 font-medium text-lg py-2">Portfolio</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)} className="w-full text-gray-800 font-medium text-lg py-2">Contact</a>
        </nav>
      </div>
    </header>
  );
};
