"use client";

import { Box, BookOpen, Terminal, Cpu, Database, Smartphone, Cloud, Zap, Code, Layers, Users, Target, MessageSquare } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="min-h-screen pt-32 px-4 sm:px-6 md:px-12 lg:px-20 relative overflow-hidden">
      f50
      {/* Dark Background - NO WHITE */}
      <div className="absolute inset-0 -z-10 bg-black">
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-cyan-900/5 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-purple-900/5 to-transparent"></div>
      </div>

      {/* Main Container */}
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Page Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 backdrop-blur-xl bg-black/60 border border-white/20 rounded-full px-6 py-3 mb-6">
            <Terminal className="w-4 h-4 text-white" />
            <span className="text-cyan-400 font-mono text-sm">ABOUT_ZYNAPTIC</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              BEHIND THE CODE
            </span>
            <span className="block text-2xl md:text-3xl text-gray-400 mt-4 font-mono">
              _DEVELOPER_ARCHITECT_MENTOR
            </span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Full Stack Developer, 3D Modeler, and passionate mentor helping others master modern technology.
          </p>
        </div>

        {/* Main Content Card */}
        <div className="backdrop-blur-xl bg-black/60 border border-white/20 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
          
          <div className="flex flex-col lg:flex-row">
            
            {/* Left Side - Profile & Stats */}
            <div className="lg:w-2/5 p-6 md:p-8 lg:p-12 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/10">
              
              {/* Profile Image - UPDATED WITH DISTINCT BORDER */}
              <div className="relative mb-8">
                {/* Outer glow effect */}
                <div className="absolute -inset-6 bg-gradient-to-br from-cyan-500/20 via-transparent to-purple-500/20 rounded-full blur-xl"></div>
                
                {/* Profile Container with distinct border */}
                <div className="relative">
                  {/* Inner gradient border effect */}
                  <div className="absolute -inset-1 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full opacity-30 blur-sm"></div>
                  
                  {/* Main profile container */}
                  <div className="relative backdrop-blur-md bg-black/80 border-[6px] border-black rounded-full p-4">
                    {/* Gradient border ring */}
                    <div className="absolute -inset-[6px] border-[6px] border-transparent rounded-full pointer-events-none"
                      style={{
                        background: `linear-gradient(black, black) padding-box,
                                    radial-gradient(circle at 30% 30%, rgba(34, 211, 238, 0.5), rgba(168, 85, 247, 0.3)) border-box`,
                        border: '6px solid transparent',
                      }}
                    />
                    
                    {/* Image with inner glow */}
                    <div className="relative rounded-full overflow-hidden">
                      <img 
                        src="/profile.png" 
                        alt="Profile" 
                        className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-2 border-cyan-400/30 shadow-2xl mx-auto"
                      />
                      {/* Inner subtle gradient overlay */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-t from-cyan-500/10 via-transparent to-purple-500/10 pointer-events-none"></div>
                    </div>
                  </div>
                </div>
                
                {/* Status Indicator */}
                <div className="absolute bottom-6 right-6 backdrop-blur-sm bg-black/80 border border-white/20 rounded-full px-4 py-2 shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-white font-mono text-sm font-bold">AVAILABLE</span>
                  </div>
                </div>
              </div>

              {/* Bio Card under picture */}
              <div className="backdrop-blur-sm bg-black/40 border border-white/10 rounded-xl p-6 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-5 h-5 text-cyan-400" />
                  <h3 className="text-lg font-bold text-white">MISSION</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Building innovative solutions with modern technologies while mentoring upcoming developers 
                  in the ecosystem. Focused on creating performant, scalable applications across the entire stack.
                </p>
              </div>

              {/* Tech Stack under picture */}
              <div className="backdrop-blur-sm bg-black/40 border border-white/10 rounded-xl p-6 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <Code className="w-5 h-5 text-cyan-400" />
                  <h3 className="text-lg font-bold text-white">CORE TECHNOLOGIES</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "TypeScript", "Node.js", "MongoDB", "Tailwind"].map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1.5 backdrop-blur-sm bg-black/40 border border-white/20 rounded-full text-white text-xs font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="backdrop-blur-sm bg-black/40 border border-white/10 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-white mb-1">10+</div>
                  <div className="text-xs text-gray-400">Projects</div>
                </div>
                <div className="backdrop-blur-sm bg-black/40 border border-white/10 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-cyan-400 mb-1">3+</div>
                  <div className="text-xs text-gray-400">Years Experience</div>
                </div>
              </div>

              {/* Availability Badge */}
              <div className="backdrop-blur-sm bg-green-500/10 border border-green-500/20 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <BookOpen className="w-5 h-5 text-white" />
                  <span className="text-green-400 font-bold">OPEN FOR TEACHING</span>
                </div>
                <p className="text-gray-300 text-sm">
                  Currently accepting students for React, Next.js, Full Stack Development, and 3D Modeling.
                </p>
              </div>
            </div>

            {/* Right Side - Detailed Sections */}
            <div className="lg:w-3/5 p-6 md:p-8 lg:p-12">
              
              {/* 3D Modeling Section */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <Box className="w-6 h-6 text-purple-400" />
                  <h2 className="text-xl font-bold text-white">3D MODELING EXPERTISE</h2>
                </div>
                <div className="backdrop-blur-sm bg-black/40 border border-white/10 rounded-xl p-5">
                  <p className="text-gray-300 mb-4">
                    Creating stunning 3D models and visualizations for games, simulations, and architectural visualization.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["Blender", "Unity", "3D Visualization", "Game Assets", "Architectural Models", "Texturing", "Rendering"].map((skill) => (
                      <span key={skill} className="px-3 py-1.5 text-xs backdrop-blur-sm bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Layers className="w-4 h-4 text-white" />
                    Specialized in creating realistic models for various applications
                  </div>
                </div>
              </div>

              {/* Teaching Sections Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Teaching Areas */}
                <div className="backdrop-blur-sm bg-black/40 border border-white/10 rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="w-5 h-5 text-green-400" />
                    <h3 className="text-lg font-bold text-white">TEACHING AREAS</h3>
                  </div>
                  <div className="space-y-3">
                    {[
                      "React/Next.js Development",
                      "Full Stack Architecture", 
                      "Mobile App Development",
                      "Cloud & DevOps",
                      "3D Modeling Basics",
                      "Modern JavaScript/TypeScript"
                    ].map((topic, index) => (
                      <div key={topic} className="flex items-center gap-3 p-2 hover:bg-white/5 rounded-lg transition-colors">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                        <span className="text-sm text-gray-300">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mentorship Style */}
                <div className="backdrop-blur-sm bg-black/40 border border-white/10 rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <BookOpen className="w-5 h-5 text-cyan-400" />
                    <h3 className="text-lg font-bold text-white">MENTORSHIP APPROACH</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <span className="text-sm text-gray-300">Project-based learning with real-world examples</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <span className="text-sm text-gray-300">Code reviews and best practices</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <span className="text-sm text-gray-300">Career guidance and industry insights</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                      <span className="text-sm text-gray-300">Flexible scheduling for students</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Full Tech Stack */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <Cpu className="w-6 h-6 text-cyan-400" />
                  <h2 className="text-xl font-bold text-white">COMPLETE TECH STACK</h2>
                </div>
                <div className="backdrop-blur-sm bg-black/40 border border-white/10 rounded-xl p-5">
                  <div className="flex flex-wrap gap-2">
                    {[
                      "React", "Next.js", "TypeScript", "Node.js", "Express", 
                      "MongoDB", "PostgreSQL", "Tailwind CSS", "AWS", "Docker",
                      "Git", "React Native", "Java", "PHP", "MySQL", "Socket.io",
                      "Redux", "JWT", "Linux", "Blender", "Unity"
                    ].map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1.5 text-xs backdrop-blur-sm bg-black/60 border border-white/20 rounded-full text-white hover:bg-white/10 transition-colors cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact CTA */}
              <div className="mt-8">
                <button 
                  onClick={() => {
                    const pingSection = document.getElementById('ping');
                    if (pingSection) {
                      window.scrollTo({
                        top: pingSection.offsetTop - 100,
                        behavior: 'smooth'
                      });
                    }
                  }}
                  className="group w-full px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <MessageSquare className="w-5 h-5 text-white" />
                  <span>INITIATE COLLABORATION</span>
                  <span className="group-hover:translate-x-2 transition-transform">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Environment Footer */}
        <div className="mt-8 flex justify-center">
          <div className="backdrop-blur-sm bg-black/40 border border-white/10 rounded-xl px-6 py-3">
            <div className="flex flex-wrap justify-center gap-6 text-sm font-mono">
              <div className="text-gray-400">LOCATION: <span className="text-white">WAT (NG)</span></div>
              <div className="text-gray-400">STATUS: <span className="text-green-400">AVAILABLE</span></div>
              <div className="text-gray-400">MODE: <span className="text-cyan-400">FULL_STACK</span></div>
              <div className="text-gray-400">SPECIALTY: <span className="text-purple-400">3D_MODELING</span></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
