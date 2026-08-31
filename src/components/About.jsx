import profilePic from '../assets/profilepic.jpeg';

export const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 px-4 md:px-8 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-2">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center mt-8">
          <div className="order-2 md:order-1 text-base leading-relaxed">
            <p className="text-gray-600 mb-6">
              Hello! I'm a passionate web developer with over 5 years of experience building functional, well-crafted digital experiences for brands and businesses.
            </p>
            <p className="text-gray-600 mb-6">
              I specialize in building responsive websites and web applications using modern technologies like Next.js, Typescript, React, JavaScript, and Tailwind CSS, along with back-end tools like Node.js and SQL.
            </p>
            <p className="text-gray-600 mb-8">
              I believe that great development is not just about writing code, it's about solving problems and creating meaningful experiences. I'm committed to delivering work that is both reliable and performant.
            </p>
            <div className="mt-8">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">Design & Development Skills</h3>
              <div className="flex flex-wrap gap-3">
                <span className="bg-gray-100 text-gray-800 border border-gray-200 px-5 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 hover:bg-gray-900 hover:text-white hover:-translate-y-0.5 cursor-default">Next.js</span>
                <span className="bg-gray-100 text-gray-800 border border-gray-200 px-5 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 hover:bg-gray-900 hover:text-white hover:-translate-y-0.5 cursor-default">Typescript</span>
                <span className="bg-gray-100 text-gray-800 border border-gray-200 px-5 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 hover:bg-gray-900 hover:text-white hover:-translate-y-0.5 cursor-default">React</span>
                <span className="bg-gray-100 text-gray-800 border border-gray-200 px-5 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 hover:bg-gray-900 hover:text-white hover:-translate-y-0.5 cursor-default">JavaScript</span>
                <span className="bg-gray-100 text-gray-800 border border-gray-200 px-5 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 hover:bg-gray-900 hover:text-white hover:-translate-y-0.5 cursor-default">Tailwind CSS</span>
                <span className="bg-gray-100 text-gray-800 border border-gray-200 px-5 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 hover:bg-gray-900 hover:text-white hover:-translate-y-0.5 cursor-default">Web Design</span>
                <span className="bg-gray-100 text-gray-800 border border-gray-200 px-5 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 hover:bg-gray-900 hover:text-white hover:-translate-y-0.5 cursor-default">Node.js</span>
                <span className="bg-gray-100 text-gray-800 border border-gray-200 px-5 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 hover:bg-gray-900 hover:text-white hover:-translate-y-0.5 cursor-default">SQL</span>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center items-center">
            <div className="w-72 h-96 rounded-2xl overflow-hidden shadow-lg ring-1 ring-gray-200">
              <img src={profilePic} alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
