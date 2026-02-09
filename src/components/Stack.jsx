"use client";

import { Cpu, Database, Server, Code, Terminal, Zap, Globe, Smartphone, Cloud, GitBranch, Palette, Wrench } from 'lucide-react';

const technologies = {
  "Frontend": [
    { name: "React", level: 95, icon: <Cpu className="w-5 h-5 text-white" />, color: "cyan" },
    { name: "Next.js", level: 90, icon: <Zap className="w-5 h-5 text-white" />, color: "white" },
    { name: "TypeScript", level: 88, icon: <Code className="w-5 h-5 text-white" />, color: "blue" },
    { name: "Tailwind CSS", level: 92, icon: <Palette className="w-5 h-5 text-white" />, color: "teal" },
  ],
  "Backend": [
    { name: "Node.js", level: 90, icon: <Server className="w-5 h-5 text-white" />, color: "green" },
    { name: "NestJS", level: 85, icon: <Terminal className="w-5 h-5 text-white" />, color: "red" },
    { name: "Laravel", level: 82, icon: <Zap className="w-5 h-5 text-white" />, color: "orange" },
    { name: "Express", level: 88, icon: <Globe className="w-5 h-5 text-white" />, color: "gray" },
  ],
  "Databases": [
    { name: "MongoDB", level: 85, icon: <Database className="w-5 h-5 text-white" />, color: "green" },
    { name: "PostgreSQL", level: 82, icon: <Database className="w-5 h-5 text-white" />, color: "blue" },
    { name: "MySQL", level: 80, icon: <Database className="w-5 h-5 text-white" />, color: "orange" },
    { name: "Redis", level: 78, icon: <Database className="w-5 h-5 text-white" />, color: "red" },
  ],
  "Mobile": [
    { name: "Android", level: 85, icon: <Smartphone className="w-5 h-5 text-white" />, color: "green" },
    { name: "React Native", level: 80, icon: <Smartphone className="w-5 h-5 text-white" />, color: "blue" },
    { name: "Java", level: 82, icon: <Code className="w-5 h-5 text-white" />, color: "orange" },
    { name: "Kotlin", level: 75, icon: <Code className="w-5 h-5 text-white" />, color: "purple" },
  ],
  "DevOps": [
    { name: "Docker", level: 85, icon: <Cloud className="w-5 h-5 text-white" />, color: "blue" },
    { name: "AWS", level: 80, icon: <Cloud className="w-5 h-5 text-white" />, color: "orange" },
    { name: "CI/CD", level: 85, icon: <GitBranch className="w-5 h-5 text-white" />, color: "yellow" },
    { name: "Linux", level: 88, icon: <Terminal className="w-5 h-5 text-white" />, color: "yellow" },
  ],
  "Tools": [
    { name: "Git", level: 95, icon: <GitBranch className="w-5 h-5 text-white" />, color: "orange" },
    { name: "VS Code", level: 90, icon: <Code className="w-5 h-5 text-white" />, color: "blue" },
    { name: "Figma", level: 75, icon: <Palette className="w-5 h-5 text-white" />, color: "pink" },
    { name: "Postman", level: 85, icon: <Wrench className="w-5 h-5 text-white" />, color: "orange" },
  ]
};

const Stack = () => {
  return (
    <section id="stack" className="min-h-screen pt-32 px-4 sm:px-6 md:px-12 lg:px-20 relative overflow-hidden bg-black">
      
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-black"></div>
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-900/5 to-black"></div>
      </div>

      {/* Main Container */}
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Page Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 backdrop-blur-xl bg-black/40 border border-white/20 rounded-full px-6 py-3 mb-6">
            <Terminal className="w-4 h-4 text-white" />
            <span className="text-blue-400 font-mono text-sm">TECH_STACK</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
              TECHNOLOGY
            </span>
            <span className="block text-2xl md:text-3xl text-gray-400 mt-4 font-mono">
              _EXPERTISE_MATRIX
            </span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of the technologies, frameworks, and tools I work with across the stack.
          </p>
        </div>

        {/* Stats */}
        <div className="glass-card rounded-2xl p-6 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-white mb-2">24+</div>
              <div className="text-sm text-cyan-400 font-mono">TECHNOLOGIES</div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-white mb-2">6</div>
              <div className="text-sm text-blue-400 font-mono">CATEGORIES</div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-white mb-2">85%</div>
              <div className="text-sm text-green-400 font-mono">AVG_PROFICIENCY</div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-white mb-2">5+</div>
              <div className="text-sm text-orange-400 font-mono">YEARS_EXP</div>
            </div>
          </div>
        </div>

        {/* Tech Categories */}
        {Object.entries(technologies).map(([category, items], catIndex) => (
          <div key={category} className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse"></div>
              <h2 className="text-2xl font-bold text-white">{category}</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {items.map((tech, index) => (
                <div
                  key={tech.name}
                  className="glass-card rounded-xl p-5 hover:border-cyan-400/30 transition-all duration-300 group"
                  style={{ animationDelay: `${catIndex * 0.2 + index * 0.1}s` }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-${tech.color}-500/10 group-hover:bg-${tech.color}-500/20 transition-colors`}>
                        {tech.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-white">{tech.name}</h3>
                        <div className="text-xs text-gray-400 font-mono">PROFICIENCY</div>
                      </div>
                    </div>
                    <span className="text-white font-bold">{tech.level}%</span>
                  </div>
                  
                  {/* Progress bar */}
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden mb-2">
                    <div
                      className={`h-full bg-${tech.color}-500 rounded-full transition-all duration-500`}
                      style={{ width: `${tech.level}%` }}
                    ></div>
                  </div>
                  
                  {/* Level indicator */}
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>BEGINNER</span>
                    <span>INTERMEDIATE</span>
                    <span>ADVANCED</span>
                    <span>EXPERT</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Legend */}
        <div className="glass-card rounded-2xl p-8 mt-12 border border-cyan-500/20">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
            <Terminal className="w-5 h-5 text-white" />
            EXPERTISE_LEVELS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 border border-green-500/20 rounded-xl">
              <div className="text-green-400 font-bold mb-2 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                90-100% - EXPERT
              </div>
              <div className="text-sm text-gray-300">Production-ready expertise. Can architect and lead implementations.</div>
            </div>
            <div className="p-4 border border-blue-500/20 rounded-xl">
              <div className="text-blue-400 font-bold mb-2 flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                80-89% - ADVANCED
              </div>
              <div className="text-sm text-gray-300">Strong proficiency. Can build complex features independently.</div>
            </div>
            <div className="p-4 border border-yellow-500/20 rounded-xl">
              <div className="text-yellow-400 font-bold mb-2 flex items-center gap-2">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                70-79% - INTERMEDIATE
              </div>
              <div className="text-sm text-gray-300">Working knowledge. Can implement features with documentation.</div>
            </div>
            <div className="p-4 border border-orange-500/20 rounded-xl">
              <div className="text-orange-400 font-bold mb-2 flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                60-69% - BEGINNER
              </div>
              <div className="text-sm text-gray-300">Learning phase. Can contribute with guidance and supervision.</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Stack;