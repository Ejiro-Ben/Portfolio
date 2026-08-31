export const Hero = ({ onViewPortfolio }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100">
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating code brackets and design elements */}
        <div className="absolute text-gray-300 opacity-60 text-6xl font-bold -top-10 left-10 animate-[float_8s_ease-in-out_infinite]">&lt;</div>
        <div className="absolute text-gray-400 opacity-50 text-5xl font-bold top-32 right-20 animate-[float_12s_ease-in-out_infinite_reverse]" style={{ animationDelay: '0.5s' }}>/&gt;</div>
        <div className="absolute text-gray-300 opacity-60 text-4xl font-bold bottom-40 left-32 animate-[float_10s_ease-in-out_infinite]">{ }</div>
        <div className="absolute text-gray-400 opacity-50 text-5xl top-1/2 right-40 animate-[float_15s_ease-in-out_infinite_reverse]" style={{ animationDelay: '1s' }}>&lt;/&gt;</div>
        <div className="absolute text-gray-300 opacity-60 text-4xl bottom-20 right-16 animate-[float_9s_ease-in-out_infinite]">[ ]</div>
        
        {/* Design elements - circles and shapes */}
        <div className="absolute w-32 h-32 border-2 border-gray-300 rounded-full opacity-40 top-20 right-32 animate-[float_11s_ease-in-out_infinite_reverse]" style={{ animationDelay: '0.7s' }}></div>
        <div className="absolute w-24 h-24 border-2 border-gray-300 rounded-lg opacity-40 bottom-32 left-20 animate-[float_13s_ease-in-out_infinite]" style={{ animationDelay: '1.2s' }}></div>
        
        {/* Floating blurred circles background */}
        <div className="absolute w-96 h-96 bg-gray-200 opacity-40 rounded-full -top-24 -right-24 animate-[float_6s_ease-in-out_infinite] blur-3xl"></div>
        <div className="absolute w-80 h-80 bg-gray-200 opacity-40 rounded-full -bottom-12 -left-12 animate-[float_8s_ease-in-out_infinite_reverse] blur-3xl"></div>
      </div>
      <div className="relative z-10 text-center text-gray-900 max-w-6xl px-8 py-8 mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight animate-[slideUp_0.8s_ease-out_0.2s_both]">
          Design & Development Excellence
        </h1>
        <p className="text-xl md:text-2xl font-light mb-20 md:mb-8 text-gray-600 animate-[slideUp_0.8s_ease-out_0.4s_both]">
          Web Development Solutions
        </p>
        <button 
          className="bg-gray-900 text-white border-0 px-6 md:px-10 py-3 md:py-4 text-lg md:text-xl font-semibold rounded-full cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gray-700 animate-[slideUp_0.8s_ease-out_0.6s_both]"
          onClick={onViewPortfolio}
        >
          View My Portfolio
        </button>
      </div>
    </section>
  );
};
