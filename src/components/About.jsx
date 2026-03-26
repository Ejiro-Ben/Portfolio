import profilePic from '../assets/profilepic.jpeg';

export const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 px-4 md:px-8 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gold-400 text-center mb-2">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center mt-8">
          <div className="order-2 md:order-1 text-base leading-relaxed">
            <p className="text-gray-300 mb-6">
              Hello! I'm a passionate creative professional with expertise in both graphic design and web development. With over 5 years of experience, I create compelling visual solutions and functional digital experiences for brands and businesses.
            </p>
            <p className="text-gray-300 mb-6">
              My design expertise spans logo design, branding, poster design, and digital art. On the development side, I specialize in building responsive websites and web applications using modern technologies.
            </p>
            <p className="text-gray-300 mb-8">
              I believe that great design is not just about aesthetics—it's about solving problems and creating meaningful experiences. I'm committed to delivering work that is both beautiful and functional.
            </p>
            <div className="mt-8">
              <h3 className="text-xl md:text-2xl font-semibold text-gold-300 mb-4">Design & Development Skills</h3>
              <div className="flex flex-wrap gap-3">
                <span className="bg-gold-600 text-black px-5 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 hover:bg-gold-400 hover:-translate-y-0.5 cursor-default">Adobe Creative Suite</span>
                <span className="bg-gold-600 text-black px-5 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 hover:bg-gold-400 hover:-translate-y-0.5 cursor-default">Photoshop</span>
                <span className="bg-gold-600 text-black px-5 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 hover:bg-gold-400 hover:-translate-y-0.5 cursor-default">Figma</span>
                <span className="bg-gold-600 text-black px-5 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 hover:bg-gold-400 hover:-translate-y-0.5 cursor-default">CorelDraw</span>
                <span className="bg-gold-600 text-black px-5 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 hover:bg-gold-400 hover:-translate-y-0.5 cursor-default">Branding</span>
                <span className="bg-gold-600 text-black px-5 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 hover:bg-gold-400 hover:-translate-y-0.5 cursor-default">UI/UX Design</span>
                <span className="bg-gold-600 text-black px-5 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 hover:bg-gold-400 hover:-translate-y-0.5 cursor-default">React</span>
                <span className="bg-gold-600 text-black px-5 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 hover:bg-gold-400 hover:-translate-y-0.5 cursor-default">JavaScript</span>
                <span className="bg-gold-600 text-black px-5 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 hover:bg-gold-400 hover:-translate-y-0.5 cursor-default">Tailwind CSS</span>
                <span className="bg-gold-600 text-black px-5 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 hover:bg-gold-400 hover:-translate-y-0.5 cursor-default">Web Design</span>
                <span className="bg-gold-600 text-black px-5 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 hover:bg-gold-400 hover:-translate-y-0.5 cursor-default">Node.js</span>
                <span className="bg-gold-600 text-black px-5 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 hover:bg-gold-400 hover:-translate-y-0.5 cursor-default">Illustration</span>
                <span className="bg-gold-600 text-black px-5 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 hover:bg-gold-400 hover:-translate-y-0.5 cursor-default">SQL</span>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center items-center">
            <div className="w-72 h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img src={profilePic} alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
