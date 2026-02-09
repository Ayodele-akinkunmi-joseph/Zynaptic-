const Hero = () => {
  return (
   <section id="home" className="relative min-h-screen w-full overflow-hidden bg-black">
      
      {/* Grid Pattern Background */}
      <div 
        className="absolute inset-0 -z-10 opacity-10 md:opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-black via-cyan-900/5 to-black md:via-cyan-900/10"></div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between px-4 sm:px-6 md:px-12 lg:px-20 py-20 lg:py-0">

        {/* Left Side - Typography */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          {/* Status Indicator */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/20 rounded-xl p-3 md:p-4 mb-6 md:mb-8 inline-block">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-white font-mono text-xs md:text-sm">
                STATUS: <span className="text-cyan-400">OPEN FOR PROJECTS</span>
              </span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-tight mb-4 md:mb-6">
            CODE.
            <br />
            <span className="text-cyan-400">DEPLOY.</span>
            <br />
            <span className="text-orange-500">SECURE.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 md:mb-8 font-mono">
            <span className="text-white">ZYNAPTIC</span>:// FULL_STACK_SOLUTIONS
          </p>

          {/* CTA Button */}
          <button className="group relative w-full sm:w-auto px-6 py-3 md:px-10 md:py-4 bg-transparent border-2 border-cyan-400 text-white font-bold text-base md:text-lg rounded-full hover:border-cyan-300 transition-all duration-300 overflow-hidden">
            <span className="relative z-10">INITIATE PROJECT</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Right Side - Live Terminal */}
        <div className="lg:w-2/5 w-full mt-8 lg:mt-0">
          <div className="backdrop-blur-xl bg-black/60 border border-white/20 rounded-xl md:rounded-2xl overflow-hidden shadow-xl md:shadow-2xl">
            {/* Terminal Header */}
            <div className="bg-black/80 border-b border-white/10 px-3 py-2 md:px-4 md:py-3 flex items-center gap-2">
              <div className="w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full"></div>
              <div className="w-2 h-2 md:w-3 md:h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full"></div>
              <span className="text-white/80 font-mono text-xs md:text-sm ml-2 md:ml-4">terminal@zynaptic:~</span>
            </div>
            
            {/* Terminal Content */}
            <div className="p-4 md:p-6 font-mono text-xs md:text-sm">
              <div className="mb-3 md:mb-4">
                <span className="text-green-400">zynaptic@portfolio</span>
                <span className="text-white">:</span>
                <span className="text-cyan-400">~$</span>
                <span className="text-white"> npm run dev</span>
              </div>
              
              <div className="text-gray-400 mb-3 md:mb-4">
                <div className="whitespace-nowrap overflow-x-auto"> Starting development server...</div>
                <div> Next.js 14.2.0</div>
                <div> TypeScript 5.3.0</div>
                <div> TailwindCSS 3.4.0</div>
              </div>
              
              <div className="text-green-300">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <div className="whitespace-nowrap overflow-x-auto"> Ready on http://localhost:3000</div>
                </div>
              </div>
              
              <div className="mt-4 md:mt-6 border-t border-white/10 pt-3 md:pt-4">
                <div className="text-cyan-300 mb-2 text-xs md:text-sm"> ENVIRONMENT:</div>
                <div className="grid grid-cols-2 gap-1 md:gap-2 text-xs">
                  <div className="text-gray-300 truncate">Stack: <span className="text-white">FULL_STACK_ACTIVE</span></div>
                  <div className="text-gray-300 truncate">Region: <span className="text-white">WAT (NG)</span></div>
                  <div className="text-gray-300 truncate">Status: <span className="text-green-400">ACTIVE</span></div>
                  <div className="text-gray-300 truncate">Deploy: <span className="text-cyan-400">Vercel</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-5 h-8 md:w-6 md:h-10 backdrop-blur-sm bg-white/10 border border-white/20 rounded-full flex justify-center items-center">
            <div className="w-1 h-2 md:w-1 md:h-3 bg-cyan-400 rounded-full"></div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;