"use client";

import { Github, ExternalLink, Code, Globe, Smartphone, Lock, MessageSquare, Server, Cpu, Zap, Terminal } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Flipkart MERN Clone",
    description: "Full-stack e-commerce platform with user auth, product catalog, cart system, and payment integration.",
    tech: ["React", "Node.js", "MongoDB", "Express", "JWT", "Redux"],
    status: "Completed",
    github: "https://github.com/Ayodele-akinkunmi-joseph/flipkart-mern",
    demo: null,
    category: "Full Stack",
    icon: <Globe className="w-5 h-5 text-white" />,
    color: "cyan"
  },
  {
    id: 2,
    title: "LGMVIP WebDev Projects",
    description: "Collection of projects from LetsGrowMore Virtual Internship including React apps and API integrations.",
    tech: ["React", "JavaScript", "CSS3", "APIs", "Git"],
    status: "Completed",
    github: "https://github.com/Ayodele-akinkunmi-joseph/LGMVIP-WebDev",
    demo: null,
    category: "Web Development",
    icon: <Code className="w-5 h-5 text-white" />,
    color: "blue"
  },
  {
    id: 3,
    title: "Web UI Clones",
    description: "Modern UI clones of popular websites with responsive design and interactive components.",
    tech: ["HTML5", "CSS3", "JavaScript", "Tailwind", "Responsive"],
    status: "Completed",
    github: "https://github.com/Ayodele-akinkunmi-joseph/web-ui-clones",
    demo: null,
    category: "Frontend",
    icon: <Cpu className="w-5 h-5 text-white" />,
    color: "purple"
  },
  {
    id: 4,
    title: "WebChat Application",
    description: "Real-time chat application with rooms, user authentication, and message history.",
    tech: ["Socket.io", "Node.js", "React", "MongoDB", "JWT"],
    status: "Completed",
    github: "https://github.com/Ayodele-akinkunmi-joseph/WebChat",
    demo: null,
    category: "Real-time",
    icon: <MessageSquare className="w-5 h-5 text-white" />,
    color: "green"
  },
  {
    id: 5,
    title: "Weatherly Android App",
    description: "Android weather application with location-based forecasts and weather alerts.",
    tech: ["Android", "Java", "API Integration", "Material Design"],
    status: "Completed",
    github: "https://github.com/Ayodele-akinkunmi-joseph/weatherly-android",
    demo: null,
    category: "Mobile",
    icon: <Smartphone className="w-5 h-5 text-white" />,
    color: "orange"
  },
  {
    id: 6,
    title: "TSF Banking System",
    description: "Secure banking application with fund transfers, transaction history, and user management.",
    tech: ["PHP", "MySQL", "JavaScript", "Bootstrap", "Security"],
    status: "Completed",
    github: "https://github.com/Ayodele-akinkunmi-joseph/TSF-Bank",
    demo: null,
    category: "Full Stack",
    icon: <Lock className="w-5 h-5 text-white" />,
    color: "red"
  },
  {
    id: 7,
    title: "React Projects Collection",
    description: "Various React applications showcasing different concepts and modern practices.",
    tech: ["React", "Hooks", "Context API", "React Router", "Components"],
    status: "Completed",
    github: "https://github.com/Ayodele-akinkunmi-joseph/React-Projects",
    demo: null,
    category: "Frontend",
    icon: <Zap className="w-5 h-5 text-white" />,
    color: "cyan"
  },
  {
    id: 8,
    title: "Basic Banking App",
    description: "Simple banking application demonstrating core banking operations and security.",
    tech: ["Android", "Java", "SQLite", "UI/UX"],
    status: "Completed",
    github: "https://github.com/Ayodele-akinkunmi-joseph/Basic_Banking_App",
    demo: null,
    category: "Mobile",
    icon: <Smartphone className="w-5 h-5 text-white" />,
    color: "blue"
  },
  {
    id: 9,
    title: "PHP Projects Collection",
    description: "Various PHP applications including CRUD operations, authentication, and web services.",
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    status: "Completed",
    github: "https://github.com/Ayodele-akinkunmi-joseph/PHP-PROJECTS",
    demo: null,
    category: "Backend",
    icon: <Server className="w-5 h-5 text-white" />,
    color: "purple"
  }
];

const Build = () => {
  return (
    <section id="build" className="min-h-screen pt-32 px-4 sm:px-6 md:px-12 lg:px-20 relative overflow-hidden bg-black">
      
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden bg-black">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
        
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Page Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 backdrop-blur-xl bg-black/40 border border-white/20 rounded-full px-6 py-3 mb-6">
            <Terminal className="w-4 h-4 text-white" />
            <span className="text-cyan-400 font-mono text-sm">PROJECT_PORTFOLIO</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              PROJECTS
            </span>
            <span className="block text-2xl md:text-3xl text-gray-400 mt-4 font-mono">
              _DEVELOPMENT_WORKFLOW
            </span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            A curated collection of full-stack applications, mobile apps, and web solutions 
            built with modern technologies and best practices.
          </p>
        </div>

        {/* Projects Stats */}
        <div className="glass-card rounded-2xl p-6 mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-white mb-2">{projects.length}</div>
              <div className="text-sm text-cyan-400 font-mono">TOTAL_PROJECTS</div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-white mb-2">9+</div>
              <div className="text-sm text-blue-400 font-mono">TECHNOLOGIES</div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-sm text-green-400 font-mono">COMPLETION_RATE</div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-white mb-2">4</div>
              <div className="text-sm text-purple-400 font-mono">CATEGORIES</div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse"></div>
              <h2 className="text-2xl font-bold text-white">PROJECTS</h2>
            </div>
            <span className="text-sm text-gray-400 font-mono bg-black/40 border border-white/10 rounded-full px-4 py-2">
              {projects.length} PROJECTS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="group relative backdrop-blur-xl bg-black/40 border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-all duration-500 hover:scale-[1.02]"
              >
                {/* Project Header */}
                <div className="p-6 border-b border-white/10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-${project.color}-500/10`}>
                        {project.icon}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-mono text-gray-400">PROJECT_{project.id.toString().padStart(2, '0')}</span>
                          <span className={`text-xs font-mono px-2 py-1 rounded-full ${
                            project.status === 'Completed' ? 'bg-green-500/10 text-green-400 border border-green-500/20' :
                            'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                          }`}>
                            {project.status}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="p-6 border-b border-white/10">
                  <h4 className="text-sm font-mono text-gray-400 mb-3 flex items-center gap-2">
                    <Code className="w-4 h-4 text-white" />
                    TECH_STACK
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-xs backdrop-blur-sm bg-black/30 border border-white/10 rounded-full text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="p-6">
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-3 bg-black/30 border border-white/20 text-white text-sm font-medium rounded-lg hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <Github className="w-4 h-4 text-white" />
                      VIEW_CODE
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-3 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium rounded-lg hover:bg-cyan-500/20 transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4 text-white" />
                        LIVE_DEMO
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="glass-card rounded-2xl p-8 md:p-12 max-w-3xl mx-auto border border-cyan-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              READY TO COLLABORATE?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how we can bring your ideas to life 
              with cutting-edge technology and modern development practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-full hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-5 h-5 text-white" />
                START_CONVERSATION
              </a>
              <a
                href="https://github.com/Ayodele-akinkunmi-joseph"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-black/30 border border-white/20 text-white font-bold rounded-full hover:border-cyan-500/50 hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Github className="w-5 h-5 text-white" />
                VIEW_GITHUB
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Build;